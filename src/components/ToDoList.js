import React from "react";
import ToDo from './ToDo';

export default function ToDoList({ todos }) {
  
  return (
    <ul>
      {todos.map(todo => {
        return <ToDo key={todo.id} todo={todo} />
      }) }
    </ul>
  );
}

//The map() function is used to iterate over an array and manipulate or change data items. In React, the map() function is most commonly used for rendering a list of data to the DOM.