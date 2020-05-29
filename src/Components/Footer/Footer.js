import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row ">
        <div className="col-md-3 text-center p-4">
          <Link to='/'>
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
              <Link to="/">About Online food</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Read Our Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Sign Up to delivery</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Add your restaurant</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled">
            <li>
              {" "}
              <Link to="/">Get Help</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Read FAQ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">View All Cities</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Restaurants near me</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
      <div className="row footer-bottom text-center">
        <div className="col-md-4 d-flex justify-content-around align-items-center">
          <p>Privacy Policy.</p>
          <p> Terms of Use</p>
          <p> Pricing Policy</p>
        </div>
        <div className="col-md-4 ">
          <p>
            <small>
              &copy; {new Date().getFullYear()} online food - All Right Reserved
            </small>
          </p>
        </div>
        <div className="col-md-4 ">
            <p style={{color : '#a7a7a7'}}>Developed by Tanjim (<span style={{color:'#F91944'}}>The Nerd</span>)</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
