import React from "react";
import './Header.css';
import logo from '../../logo2.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <Link className="navbar-brand" to="/">
          <img style={{width : '100px'}} className='logo ml-5 img-fluid'  src={logo} alt="logo"/>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
