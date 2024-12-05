import styles from './TodoStats.module.css';

export function TodoStats({ todos, dispatch }) {
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className={styles.container}>
      <span>
        {completedTodos}/{todos.length} completed
      </span>
      <button onClick={() => dispatch({ type: 'clearCompleted' })}>
        Clear Completed
      </button>
    </div>
  );
}
