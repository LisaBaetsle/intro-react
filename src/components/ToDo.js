import React from "react";

export default function ToDoList({ todo }) {
  
  return (
        <li>
          <input type="checkbox" checked={todo.isCompleted} id={todo.id}/> {todo.text}
        </li>

  );
}