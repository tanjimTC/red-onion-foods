import React from "react";
import "./Header.css";
import logo from "../../logo2.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  localStorage.setItem("cart", JSON.stringify(props.cart));
  return (
    <div className="header ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "130px" }}
            className="logo img-fluid ml-2"
            src={logo}
            alt="logo"
          />
        </Link>
      </nav>
      <div className="headerCart">
        <Link
          to="/cart-details"
          style={{ textDecoration: "none", color: "black" }}
        >
          <i className="fas fa-shopping-cart"></i>
          {props.cart.length ? (
            <sup style={{ color: "#f91944" }}>
              <b>{props.cart.length}</b>
            </sup>
          ) : (
            ""
          )}
        </Link>
        <Link
          to="/login"
          className="btn btn-1"
          style={{ textDecoration: "none", color: "black" }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="btn btn-2"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
