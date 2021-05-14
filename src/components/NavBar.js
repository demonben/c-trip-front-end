import React from "react";
import Login from "./Login";
import LoginHooks from "./LoginHooks";
import Logout from "./Logout";
import LogoutHooks from "./LogoutHooks";
import Search from "./Search";
import Home from "./pages/Home";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Hotel } from "@material-ui/icons";

const NavBar = () => {
	return (
		<div>
			<Nav className="mr-auto">
				<Link className="nav-item" exact to="/">
					<Home />
				</Link>
			</Nav>
			<Nav className="mr-auto">
				<Link className="nav-item" to="/search">
					<Search />
				</Link>
			</Nav>
			<Nav className="mr-auto">
				<Link className="nav-item" to="/login">
					<LoginHooks />
					<LogoutHooks />
				</Link>
			</Nav>
			<Form inline></Form>

			<br />
			<Search />
			<Home />

			{/* <p>The Components way</p>
            <Login />
            <br />
            <Logout /> */}
		</div>
	);
};

export default NavBar;
