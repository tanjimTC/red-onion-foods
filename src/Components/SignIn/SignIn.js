import React from "react";
import { useFormik } from "formik";
import Auth from "../SignUp/useAuth";
import { Link } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "email is Required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "please enter a valid email address";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 6) {
    errors.password = "minimum password length is 6";
  }
  return errors;
};

const SignIn = () => {
  window.scrollTo(0, 0);
  const auth = Auth();
  const formik = useFormik({
    initialValues,
    validate,
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center form-container">
      <div className="form-image text-center">
        <img className=" img-fluid" src={require("../../logo2.png")} alt="" />
      </div>
      <form className="signup-form" onSubmit={auth.onSubmit}>
        <div className="form-group ">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text  text-white">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            {/* <label htmlFor="email">email</label> */}
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="email"
            />{" "}
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="error"> {formik.errors.email}</div>
          ) : (
            <div className="none">none</div>
          )}
        </div>
        <div className="form-group">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text  text-white">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            {/* <label htmlFor="password">password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="password"
            />{" "}
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : (
            <div className="none">none</div>
          )}
        </div>
        {auth.currentUser ? (
          <div>
            <p>Hi {auth.currentUser.name} !</p>
            <button
              className="btn text-white disabled btn-block "
              type="submit"
            >
              logged in
            </button>
            <p className='mt-2' style={{color :'#000'}}>proceed to <Link style={{color :'#f91944 '}} to='/checkout' >check out?</Link></p>
          </div>
        ) : (
          <React.Fragment>
            <button className="btn text-white  btn-block" type="submit">
            log in
          </button>
          <p className='mt-2' style={{color :'#666'}}>don't have an account? <Link style={{color :'#f91944 '}} to='/signup' >sign up</Link></p>
          </React.Fragment>
        )}
      </form>
      
      {/* <br />
      {auth.currentUser ? (
        <button className="btn review-button" onClick={auth.signOut}>
          sign out
        </button>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default SignIn;
