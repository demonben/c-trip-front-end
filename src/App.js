import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import { apiTest } from './lib/api';
import Search from './components/Search';
import NavBar from  './components/NavBar'

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      
      <NavBar />
    
    </div>
  );
}

export default App;
