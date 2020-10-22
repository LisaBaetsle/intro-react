import React, { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(); //Make a variable to use one the input so that we can get the user input (input reference)

  function toggleToDo() {
    const inputElement = inputRef.current; //Take the current user input
    console.log(inputElement.value); // console log the value of the current user input

  }

  return (
    <form>
      <input
      type="text"
      ref={ inputRef } //variable of the toggleToDo function to get the user input
      placeholder="add some stuff to do"
      />
      <br />
      <button onClick={toggleToDo}> Add stuff </button>
    </form>
     
  );
}
