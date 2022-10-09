import React from "react";
import Logo from "../img/Icon.png";
import { Link } from "react-router-dom";
const PublicHeader = () => {
  return (
    <header className="header">
      <div className="logoimg">
        <img src={Logo} alt="ksimb logo" className="logo" />
      </div>
      <div className="loginLink">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default PublicHeader;
