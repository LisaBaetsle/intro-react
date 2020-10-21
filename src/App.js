import React from 'react';
import Title from './Title';
import Input from './Input';
import Submit from './Submit';
import ListToDo from './ListToDo';

const App = () => {
  return (
    <div className="todo-container">
      <Title />
      <form>
        <Input />
        <br />
        <Submit />
      </form>
      <div className="todo-list">
        <h2>Stuff I need to do:</h2>
        <ListToDo />
      </div>
    </div>
  );
}

export default App;
