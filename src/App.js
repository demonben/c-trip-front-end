import React from 'react';
import { useEffect } from 'react';
import './App.css';
// import Login from './components/Login';
// import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import { apiTest } from './lib/api';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar"
// import Search from "./components/pages/search/Search"
import {SearchFront} from "./components/pages/search/SearchFront"
// import Hotel  from './components/pages/Hotel'
import Hotel  from './components/Hotel'

function App() {
  useEffect(() => { }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" >
            <SearchFront/>
            {/* <Search /> */}
          </Route>
          <Route path="/login" >
            <LoginHooks />
            <LogoutHooks/>
          </Route>

          <Route path="/hotel" exact>
            <Hotel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
