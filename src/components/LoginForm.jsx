import { useFormik } from "formik";
import { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import clientId from "../utils/clientId";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { logInGoogle, logInUser } from "../lib/api";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textField: {
     marginBottom: "0.8rem",
     marginLeft: "1rem",
     border: "none",
     padding: '0.3rem',
    },
    btn: {
        marginBottom: "1rem"
    },
    alert: {
        marginBottom: "0.8rem",
        paddingTop: "0",
        paddingBottom: "0"
    }
  }));

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await submitLogin(values);
    },
  });
  const onSuccess = async (res) => {
    console.log(res.profileObj)
    const user = {
        email: res.profileObj.email,
        firstName: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
    }
    await logInGoogle(user)
    setLoading(true);
    localStorage.setItem("authToken", res.tokenObj.id_token);
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
  });
  const submitLogin = async (values) => {
    const loginUser = {
      email: values.email,
      password: values.password,
    };
    console.log(loginUser);
    try {
      const { token } = await logInUser(loginUser)
      await localStorage.setItem("authToken", token)
      props.hideModal();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
      <>
    <form className="signup-form" onSubmit={formik.handleSubmit}>
      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}
      <div className="profile-flex-child mb-3 ">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <TextField 
          variant="outlined"
          type="email"
          className={classes.textField}
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="mb-3 profile-flex-child">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <TextField 
        variant="outlined"
          type="password"
          className={classes.textField}
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="contained" className={classes.btn} type="submit">
          Login
        </Button>
      </div>
      <Divider/>
      <div>OR</div>
    </form>
     <Button variant="contained" onClick={signIn} className="button">
     <img src="icons/google.svg" alt="google login" className="icon"></img>
     <span className="buttonText">Sign in with Google</span>
   </Button>
   </>
  );
}

export default LoginForm;
