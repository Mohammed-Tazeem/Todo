import React from 'react';
import { useRef } from 'react';

export default function AddTodo({ setTodos }) {
  const inputRef = useRef();
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false,
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = '';
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input class = 'inputField' ref={inputRef} name="addTodo" placeholder="Add todo" />
      <button class='submitButton' type="submit">Submit</button>
    </form>
  );
}