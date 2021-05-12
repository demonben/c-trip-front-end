import React from 'react'
import Login from './Login'
import LoginHooks from './LoginHooks'
import Logout from './Logout'
import LogoutHooks from './LogoutHooks'
import Search from './Search'
import Home from './pages/Home'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link className="nav-item" href="/">
                        Home
                    </Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link className="nav-item" href="/search">
                        Search
                    </Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link className="nav-item" href="/login">
                        login
                    </Nav.Link>
                </Nav>
                <Form inline></Form>
            </Navbar>
            
            <p>The Components way</p>
            <Login />
            <br />
            <Logout />
            <p>The Hooks way</p>
            <LoginHooks />
            <LogoutHooks />
            <br />
            <Search />
            <Home />
        </div>
    )
}

export default NavBar
