import React, { useState } from "react";

export default function ListToDo() {
  const initialTodos = [
    {
      text: "Learn about React",
      id: 1,
      isCompleted: false
    },
    {
      text: "Go Rollerskating",
      id: 2,
      isCompleted: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" /> {todo.text}
        </li>
      ))}
    </ul>
  );
}

//The map() function is used to iterate over an array and manipulate or change data items. In React, the map() function is most commonly used for rendering a list of data to the DOM.

