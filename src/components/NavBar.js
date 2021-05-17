import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import LoginHooks from "./LoginHooks";
import LogoutHooks from "./LogoutHooks";
import { useAuth } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  navLink: {
    marginRight: theme.spacing(5),
    textDecoration: 0,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(40),
  },
  btn: {
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
  bar: {
    boxShadow: "none",
    marginTop: "1rem"
  },
  dialog: {
    padding: "2rem",
  },
}));

const NavBar = () => {
  const auth = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => setModalIsOpen(true);
  const handleModalClose = () => setModalIsOpen(false);
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
        
          <Link className={classes.btn} onClick={handleModalOpen}>
            Login
          </Link>
        
        
          <Link className={classes.btn} onClick={handleModalOpen}>
            Log Out
          </Link>
        
        <Dialog
          open={modalIsOpen}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.dialog}>
            <LoginHooks hideModal={handleModalClose} />
            <LogoutHooks hideModal={handleModalClose} />
          </div>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
