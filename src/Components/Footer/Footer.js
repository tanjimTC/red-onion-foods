import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row ">
        <div className="col-md-3 text-center p-4">
          <Link to="/">
            <img
              className="img-fluid w-75 p-3"
              src={require("../../logo.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3  mb-3">
          <ul className="list-unstyled ">
            <li>
              {" "}
              <Link to="/">
                <small>About Online food </small>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">
                <small>Read Our Blog </small>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <small>Sign Up to delivery</small>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <small>Add your restaurant</small>{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled">
            <li>
              {" "}
              <Link to="/">
                {" "}
                <small>Get Help</small>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">
                <small>Read FAQ </small>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <small>View All Cities</small>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <small>Restaurants near me</small>{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row footer-bottom text-center">
          <div className="col-md-4 d-flex justify-content-around ">
            <Link
              style={{ textDecoration: "none", color: "#A7A7A7" }}
              to="/privacy"
            >
              <small>Privacy Policy.</small>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#A7A7A7" }}
              to="/terms-condition"
            >
              {" "}
              <small>Terms & Conditions</small>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#A7A7A7" }}
              to="/privacy"
            >
              {" "}
              <small>Pricing Policy</small>
            </Link>
          </div>
          <div className="col-md-4 ">
            <p>
              <small>
                &copy; {new Date().getFullYear()} online food - All Right
                Reserved
              </small>
            </p>
          </div>
          <div className="col-md-4 ">
            <small style={{ color: "#a7a7a7" }}>
              Developed by Tanjim (
              <span style={{ color: "#F91944" }}>The Nerd</span>)
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
