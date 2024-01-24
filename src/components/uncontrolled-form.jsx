import React from 'react';

export const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    console.log('name:', nameInputRef.current.value);
    console.log('age:', ageInputRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' name='name' placeholder='Name' ref={nameInputRef} />
      <input type='number' name='age' placeholder='Age' ref={ageInputRef} />
      <input type='submit' value='Submit' />
    </form>
  );
};
