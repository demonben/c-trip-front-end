import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
import clientId from '../utils/clientId';
import Button from "@material-ui/core/Button";
import { CircularProgress } from '@material-ui/core';


function LogoutHooks(props) {
  const [loading, setLoading] = useState(false)
  const onLogoutSuccess = (res) => {
    setLoading(true)
    console.log('Logged out Success');
    localStorage.removeItem('authToken')
    props.hideModal()
    setLoading(false)
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <>
    {loading && <CircularProgress />}
    <Button variant="contained" onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </Button>
    </>
  );
}

export default LogoutHooks;
