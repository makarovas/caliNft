import React from "react";
import "./Header.css";
import logo from "../assets/header/icon-15.jpg";
const Header = () => {
  return (
    <div className="header">
      <h2>Header</h2>
      <div className="logo-container">
        <img src={logo} alt="image" />
      </div>
    </div>
  );
};

export default Header;
