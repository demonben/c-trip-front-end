import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import { apiTest } from './lib/api';
import Search from './components/Search';

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login />
      <br />
      <Logout />
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <br />
      <Search />
    </div>
  );
}

export default App;
