import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import clientId from '../utils/clientId';
import { useAuth } from "../context/AuthContext";
import { refreshTokenSetup } from '../utils/refreshToken';


function LogoutHooks(props) {
  const auth = useAuth();
  const onLogoutSuccess = (res) => {
    // auth.removeToken();
    console.log('Logged out Success');
    // alert('Logged out Successfully ✌');
    refreshTokenSetup(res);
    props.hideModal()
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
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;
