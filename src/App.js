import React from 'react';
import { useState } from 'react';
import './style.css';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Cooling opt', done: false },
    { id: 2, text: 'BOM Check', done: false },
    { id: 3, text: 'Model', done: false },
  ]);
  return (
    <div className="App">
      <h1  className="mainHeading" > Todo List </h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}


