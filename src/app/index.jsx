import React from 'react';
import styles from './App.module.css';
import { AddTodo } from '../features/AddTodo';
import { TodoList } from '../widgets/TodoList';
import { TodoStats } from '../widgets/TodoStats';
import { reducer } from '../entities/Todo/reducer';
import { useReducer, useEffect } from 'react';

export function App() {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.App}>
      <AddTodo dispatch={dispatch} todos={todos} />
      <TodoList dispatch={dispatch} todos={todos} />
      <TodoStats dispatch={dispatch} todos={todos} />
    </div>
  );
}
