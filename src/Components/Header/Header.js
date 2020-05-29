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
            style={{ width: "100px" }}
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
          <sup style={{ color: "#f91944" }}>
            <b>{props.cart.length}</b>
          </sup>
        </Link>
        <button className="btn btn-1">Login</button>
        <button className="btn btn-2">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
