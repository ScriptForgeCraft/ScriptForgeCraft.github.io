import React from 'react';
import { AddTodo } from '../features/AddTodo';
import { TodoList } from '../widgets/TodoList';
import { TodoStats } from '../widgets/TodoStats';
import styles from './App.module.css';
import { reducer } from '../entities/Todo/reducer';
import { useReducer } from 'react';

export function App() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: Math.random(), text: 'Do morning exercise', completed: false },
    { id: Math.random(), text: 'Read a book', completed: false },
    { id: Math.random(), text: 'Finish work project', completed: false },
  ]);

  return (
    <div className={styles.App}>
      <AddTodo dispatch={dispatch} todos={todos} />
      <TodoList dispatch={dispatch} todos={todos} />
      <TodoStats dispatch={dispatch} todos={todos} />
    </div>
  );
}
