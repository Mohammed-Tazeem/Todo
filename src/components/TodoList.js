import React from 'react';
import DeleteTodo from './DeleteTodo.js';

export default function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  }
  if (!todos.length) {
    return <p>No todos left!</p>;
  }
  return (
    <ul class = "list">
      {todos.map((todo) => (
        <li class = 'mainList'
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.done ? 'line-through' : '' }}
          key={todo.id} 
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}