import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <div className="todo-container">
      <Title />
      <Form />
      <div className="todo-list">
        <h2>Stuff I need to do:</h2>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
