import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import clientId from "../utils/clientId";
import { useAuth } from "../context/AuthContext";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";
import { CircularProgress } from "@material-ui/core";
import SignUpForm from "./SignUpForm";

function LoginHooks(props) {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);

  const onSuccess = async (res) => {
    setLoading(true);
    // auth.saveToken(token)
    localStorage.setItem("authToken", res.tokenObj.access_token);
    props.hideModal();
    setLoading(false);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <>
      {loading && <CircularProgress />}
      
      <SignUpForm/>
      <Divider />
      <div>OR</div>
      <Button variant="contained" onClick={signIn} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </Button>
    </>
  );
}

export default LoginHooks;
