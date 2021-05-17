import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import clientId from '../utils/clientId';
import { useAuth } from '../context/AuthContext'
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

function LoginHooks(props) {
  const auth = useAuth();
  const onSuccess = async (res) => {
    // auth.saveToken(token)
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    props.hideModal()
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(`Failed to login.`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;
