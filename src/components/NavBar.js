import React from 'react'
import Login from './Login'
import LoginHooks from './LoginHooks'
import Logout from './Logout'
import LogoutHooks from './LogoutHooks'
import Search from './Search'
import Home from './pages/Home'

const NavBar = () => {
    return (
        <div>
            <Home/>
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
    )
}

export default NavBar
