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


import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    navLink: {
      marginRight: theme.spacing(5),
      textDecoration: 0,
      fontWeight: "bold",
      color: "black",
    },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(40)
    },
    btn:{
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(3),
        border: "2px solid black",
        padding: "0.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        borderRadius: "2px",
        textDecoration: 0,
        fontWeight: "bold",
        color: "black",
    },
    bar:{
        boxShadow: "none"
    }
  }));

const NavBar = () => {
    const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" className={classes.bar}>
      <Toolbar>
        <h3 className={classes.title}>cTrip</h3>
        <NavLink className={classes.navLink} exact to="/">
          Home
        </NavLink>
        <NavLink className={classes.navLink} to="/">
          My Trips
        </NavLink>
        <NavLink className={classes.navLink} to="/search">
          Search
        </NavLink>
        <NavLink className={classes.btn} to="/login">
          Login
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
