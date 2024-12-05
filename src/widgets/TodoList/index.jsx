import styles from './TodoList.module.css';

export function TodoList({ todos, dispatch }) {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                dispatch({
                  type: 'isChecked',
                  payload: { id: todo.id, completed: e.target.checked },
                })
              }
            />
            {todo.text}
            <button
              onClick={() => dispatch({ type: 'removeTodo', payload: todo.id })}
            >
              X
            </button>
          </label>
        </div>
      ))}
    </div>
  );
}
