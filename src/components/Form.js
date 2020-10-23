import React, { useRef } from 'react';

export default function Form({ addTodo }) {
  const inputRef = useRef(); //Make a variable to use one the input so that we can get the user input (input reference)

  function handleAddToDo() {
    const inputValue = inputRef.current.value; //Take the current user input
    if (inputValue === '') return
    addTodo(inputValue)
  }

  return (
    <form>
      <input
      type="text"
      ref={ inputRef } //variable of the toggleToDo function to get the user input
      placeholder="add some stuff to do"
      />
      <br />
      <button type="button" onClick={handleAddToDo}> Add stuff </button>
    </form>
     
  );
}
