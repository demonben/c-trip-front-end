import { useFormik } from "formik";
import { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import clientId from "../utils/clientId";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// import { login } from "../../api/auth";
// import { useAuth } from '../../context/AuthContext'

function LoginForm(props) {
//   const auth = useAuth();
const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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
  const submitLogin = async (values) => {
      const email = values.email;
      const password = values.password;
    try {
    //   const { token } = await login(email, password);
    //   await auth.saveToken(token)
      props.hideModal();
    } catch (err) {
      setErrorMsg(err.response.data);
    }
  };
  return (
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
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="mb-3 profile-flex-child">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary mx-auto">
          Login
        </button>
      </div>
      <div>OR</div>
      <Button variant="contained" onClick={signIn} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </Button>
    </form>
  );
}

export default LoginForm;
