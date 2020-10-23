import React from "react";

export default function ToDoList({ todo, toggleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
        <li>
          <input type="checkbox" checked={todo.isCompleted} onChange={handleTodoClick} id={todo.id}/> {todo.text}
        </li>

  );
}