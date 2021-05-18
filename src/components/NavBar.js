import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import LoginHooks from "./LoginHooks";
import LoginForm from "./LoginForm";
import { useGoogleLogout } from 'react-google-login';
import clientId from '../utils/clientId';
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  navLink: {
    marginRight: theme.spacing(5),
    textDecoration: 0,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    marginLeft: theme.spacing(5),
    justifySelf: "center"
  },
  btn: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(1),
    border: "2px solid black",
    padding: "0.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderRadius: "2px",
    textDecoration: 0,
    fontWeight: "bold",
    color: "black",
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'none',
    '&:hover':{
      backgroundColor: 'white'
    }
  },
  bar: {
    boxShadow: "none",
    marginTop: "1rem",
  },
  dialog: {
    padding: "2rem",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => setModalIsOpen(true);
  const handleModalClose = () => setModalIsOpen(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const [successMsg, setSuccessMsg] = useState(false)
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    localStorage.removeItem('authToken')
    setSuccessMsg(true)
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
  const handleLogout = () => {
   signOut()
  }
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" className={classes.bar}>
      <Toolbar className={classes.flex}>
        <h3 className={classes.title}>cTrip</h3>
        <div>
        <NavLink className={classes.navLink} exact to="/">
          Home
        </NavLink>
        {!localStorage.authToken && <NavLink className={classes.navLink} to="/myTrips">
          My Trips
        </NavLink>}
        <NavLink className={classes.navLink} to="/search">
          Search
        </NavLink>
        
        {!localStorage.authToken  && 
        (<>
        <Button className={classes.btn} onClick={handleModalOpen}>
        Sign Up
      </Button>
      <Button className={classes.btn} onClick={handleLoginOpen}>
        Login
      </Button>
      </>)
        }
          
          {localStorage.authToken && 
          <Button className={classes.btn} onClick={handleLogout}>
            Log Out
          </Button>}
          </div>
        <Dialog
          open={modalIsOpen}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.dialog}>
            <LoginHooks hideModal={handleModalClose} />
          </div>
        </Dialog>
        <Dialog
          open={loginOpen}
          onClose={handleLoginClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.dialog}>
            <LoginForm hideModal={handleLoginClose} />
          </div>
        </Dialog>
      </Toolbar>
      {(successMsg && !localStorage.authToken) && (<Alert severity="success">Logged Out Successfully</Alert>)}
    </AppBar>
  );
};

export default NavBar;
