import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import { UserContext } from './UserContext';

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-md navbar-light bg-light'>
          <ul className='navbar'>
            <li className='nav-link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-link'>
              <Link to='/about'>About</Link>
            </li>
            <li className='nav-link'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <UserContext.Provider value={{ count, setCount }}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>{' '}
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
