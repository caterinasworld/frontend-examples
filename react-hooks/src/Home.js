import React, { useState } from 'react';
import List from './List';

export default function Home() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState();

  let getData = () => {
    return [number];
  };

  let handleClick = (event) => {
    setCount(count + 1);
  };

  let handleChange = (event) => {
    setNumber(parseInt(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div className='container w-75 mx-auto'>
      <h1>Home</h1>
      <div>This is the Home page </div>
      <h2>Count Section</h2>
      <button onClick={handleClick}>Count: {count}</button>
      <h2>Input Section</h2>
      <label htmlFor='input'></label>
      <input type='text' id='input' onChange={handleChange}></input>
      <List getData={getData}></List>
    </div>
  );
}
