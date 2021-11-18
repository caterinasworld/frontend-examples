import React from 'react';

// import views
import AppClassDemo from './views/AppClassDemo';
import AppFunctionDemo from './views/AppFunctionDemo';

// import styles
import './App.css';

function App() {
  return (
    <>
      <h1 className='h1'>Star Wars - Starships</h1>
      <h2 className='h2'>Create React App with Class Components</h2>
      <AppClassDemo />
      <h2 className='h2'>Create React App with Functional Components</h2>
      <AppFunctionDemo />
    </>
  );
}

export default App;
