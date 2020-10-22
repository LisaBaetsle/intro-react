import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {
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
    <div className="todo-container">
      <Title />
      <Form />
      <div className="todo-list">
        <h2>Stuff I need to do:</h2>
        <ToDoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
