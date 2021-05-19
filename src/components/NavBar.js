import React from "react";

import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

<<<<<<< Updated upstream
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
=======
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
    '&:hover': {
      backgroundColor: 'white'
>>>>>>> Stashed changes
    }
  }));

const NavBar = () => {
<<<<<<< Updated upstream
    const classes = useStyles();
=======
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
>>>>>>> Stashed changes
  return (
    <AppBar position="static" color="transparent" className={classes.bar}>
      <Toolbar>
        <h3 className={classes.title}>cTrip</h3>
<<<<<<< Updated upstream
        <NavLink className={classes.navLink} exact to="/">
          Home
        </NavLink>
        <NavLink className={classes.navLink} to="/myTrips">
          My Trips
        </NavLink>
        <NavLink className={classes.navLink} to="/search">
          Search
        </NavLink>
        <NavLink className={classes.btn} to="/login">
          Login
        </NavLink>
=======
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

          {!localStorage.authToken &&
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
>>>>>>> Stashed changes
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
