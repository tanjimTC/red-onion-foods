import React from "react";
import './Header.css';
import logo from '../../logo2.png';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <a className="navbar-brand" href="#">
          <img style={{width : '100px'}} className='logo ml-5 img-fluid'  src={logo} alt="logo"/>
        </a>
      </nav>
    </div>
  );
};

export default Header;
