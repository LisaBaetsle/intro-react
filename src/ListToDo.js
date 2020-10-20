import React from 'react';

const ListToDo = () => {
  return (
    <div className="todo-list">
        <h2>My to do list</h2>
        <input 
          type="checkbox" 
        />
        <label htmlFor="todo1"> Learn React</label>
        <br />
        <input 
          type="checkbox" 
        />
        <label htmlFor="todo2"> Go roller skating</label>
        <br />
      </div>
  );
}

export default ListToDo;