import React from "react";
import "./Header.css";
import logo from "../../logo2.png";
import { Link } from "react-router-dom";
import  { useAuth } from "../SignUp/useAuth";

const Header = (props) => {
  localStorage.setItem("cart", JSON.stringify(props.cart));
  const auth=useAuth();
  const handleSignOut =()=>{
    auth.signOut()
    window.location.pathname='/login'
  }
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
          className='mr-2'
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
        {auth.currentUser?(
          <small style={{ color: "#f91944" }}>
            Hi<b> {auth.currentUser.name?(
              <span>{auth.currentUser.name}</span>
            ):('')}</b> !
          </small>
        ):(
          <Link
          to="/login"
          className="btn btn-1"
          style={{ textDecoration: "none", color: "black" }}
        >
          Login
        </Link>
        )}
        {auth.currentUser?(<button
          onClick={handleSignOut}
          className="btn btn-2"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Sign out
        </button>):(
          <Link
          to="/signup"
          className="btn btn-2"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Sign up
        </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
