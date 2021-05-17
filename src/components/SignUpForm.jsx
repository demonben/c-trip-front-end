import { createUser } from "../lib/api";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from '../context/AuthContext'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";

const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided")
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, '6 chars minimum, 1 letter, 1 number'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  tel: Yup.number("Should be a number")
  .typeError("That doesn't look like a phone number")
  .integer("Should be a number")
  .min(8, "Must be more than 8 characters")
  .required("Phone number is required")
});

const useStyles = makeStyles((theme) => ({
    textField: {
     marginBottom: "0.8rem",
     marginLeft: "1rem",
     border: "none",
     padding: '0.3rem',
     backgroundColor: 'whitesmoke'
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

const SignUpForm = (props) => {
  const auth = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const classes = useStyles();
  const addUserOnSubmit = async (values) => {
      const newUser = {
           email: values.email,
           password: values.password,
        //    passwordConfirmation = values.passwordConfirmation,
           firstName: values.fname,
           lastName: values.lname,
           tel: values.tel,
      }
    try {
      await createUser(newUser);
    //   const { token } = await login(email, password);
    //   await auth.saveToken(token)
    localStorage.setItem("authToken", "token")
      props.hideModal();
    } catch (err) {
      setErrorMsg(err.response.data.errors[0].msg);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        fname: "",
        lname: "",
        tel: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await addUserOnSubmit(values);
      }}
    >
      
      {({ errors, touched, dirty, isValid }) => (
        <Form className="signup-form">
          {errorMsg && (
            <Alert severity="error"  className={classes.alert}>
                
              {errorMsg}
            </Alert>
          )}

          <div className="profile-flex-child mb-3 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              className={classes.textField}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              validationSchema={SignupSchema}
              required
            />{" "}
            {errors.email && touched.email ? (
              <Alert severity="error" className={classes.alert}>
                {errors.email}
              </Alert>
            ) : null}
           
          </div>
          <div className="mb-3 profile-flex-child">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              className={classes.textField}
              id="password"
              name="password"
              required
            />
            {errors.password && touched.password ? (
              <Alert severity="error" className={classes.alert}>
                {errors.password}
              </Alert>
            ) : null}
          </div>
          <div className="mb-3 profile-flex-child">
            <label htmlFor="password" className="form-label">
              Repeat Password
            </label>
            <Field
            
              type="password"
              className={classes.textField}
              id="passwordConfirmation"
              name="passwordConfirmation"
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <Alert severity="error" className={classes.alert}>
                {errors.passwordConfirmation}
              </Alert>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <Field
              type="first-name"
              className={classes.textField}
              id="fname"
              name="fname"
            />{" "}
            {errors.fname && touched.fname ? (
              <Alert severity="error" className={classes.alert}>
                {errors.fname}
              </Alert>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <Field
              type="last-name"
              className={classes.textField}
              id="lname"
              name="lname"
            />{" "}
            {errors.lname && touched.lname ? (
              <Alert severity="error" className={classes.alert}>
                {errors.lname}
              </Alert>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Phone Number
            </label>
            <Field type="tel" className={classes.textField} id="tel" name="tel" />
          </div>
          {errors.tel && touched.tel ? (
              <Alert severity="error" className={classes.alert}>
                {errors.tel}
              </Alert>
            ) : null}
          <div className="d-grid gap-2 col-6 mx-auto">
            <Button variant="contained" className={classes.btn} type="submit" disabled={!(dirty && isValid)}>
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
