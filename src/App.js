import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Title from './components/Title';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const LSKEY = "todoApp.todos"; //local storage key

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
 
  // Update the state
  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), text: todo, completed: false }]);
  }

  //Load our todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // Save todos to localStorage, only when todos changes
  useEffect(() => {
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  //Toggle the todos
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.isCompleted = !todo.isCompleted
    setTodos(newTodos)
  }
  
  return (
    <div className="todo-container">
      <Title />
      <Form addTodo={addTodo}/>
      <div className="todo-list">
        <h2>Stuff I need to do:</h2>
        <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
    </div>
  );
}

export default App;
