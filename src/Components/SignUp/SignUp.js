import React from "react";
import { useFormik } from "formik";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Auth from "./useAuth";
const initialValues = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "name is Required";
  }
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
  if (!values.password2) {
    errors.password2 = "confirm password is required";
  } else if (values.password !== values.password2) {
    errors.password2 = "password does not match ";
  }
  return errors;
};

const SignUp = () => {
  const auth=Auth();
  const formik = useFormik({
    initialValues,
    validate,
  });
  return (
    <div className="d-flex flex-column justify-content-center align-items-center form-container">
      <div className='form-image text-center'>
        <img className=" img-fluid" src={require("../../logo2.png")} alt="" />
      </div>
      <form className='signup-form' onSubmit={auth.handleSignUp}>
        <div className="form-group ">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text  text-white">
                <i className="fas fa-user"></i>
              </span>
            </div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="name"
            />{" "}
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : (
            <div className="none">none</div>
          )}
        </div>

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
        <div className="form-group ">
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
        
        <div className="form-group ">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text  text-white">
                
                <i className="fas fa-check-double"></i>
              </span>
            </div>
            {/* <label htmlFor="password2">confirm password</label> */}
            <input
              type="password"
              name="password2"
              id="password2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password2}
              placeholder="confirm password"
            />{" "}
          </div>
          {formik.touched.password2 && formik.errors.password2 ? (
            <div className="error ">{formik.errors.password2}</div>
          ) : (
            <div className="none">none</div>
          )}
        </div>
        <button className="btn text-white  btn-block " type="submit">
          create account
        </button>
      </form>
      <p className='mt-2' style={{color :'#666'}}>already have an account? <Link style={{color :'#f91944 '}} to='/login' >sign in</Link></p>
    </div>
  );
};

export default SignUp;
