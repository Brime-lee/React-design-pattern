import React, { useState, useEffect } from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  useEffect(() => {
    if (name.length < 1) {
      console.log('name cannot be empty');
    }
  }, [name]);

  const submitHandler = (e) => {
    console.log('name:', name);
    console.log('age:', age);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='number'
        name='age'
        placeholder='Age'
        age={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
