import React, { useReducer } from 'react';
import reducer from '../entities/todo/model/reducer';
import AddTodo from '../features/add-todo/ui/AddTodo';
import TodoList from '../features/todo-list/ui/TodoList';
import TodoStats from '../features/todo-stats/ui/TodoStats';

export default function Home() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: Math.random(), text: 'Do morning exercise', isCompleted: false },
    { id: Math.random(), text: 'Read a book', isCompleted: false },
    { id: Math.random(), text: 'Finish work project', isCompleted: false }
  ]);

  return (
    <div className="App">
      <AddTodo todos={todos} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
      <TodoStats todos={todos} dispatch={dispatch} />
    </div>
  );
}
