import React from "react";
import "./Header.css";
import logo from "../assets/header/icon-15.jpg";
import searchIcon from "../assets/header/search.png";
import themeSwitcher from "../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="search-container">
        <img src={searchIcon} alt="search" />
        <input className="search-input" placeholder="Tab to search" />
      </div>
      <div className="header-items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="header-actions">
        <div className="theme-switch-icon">
          <img src={themeSwitcher} alt="theme-switcher" />
        </div>
      </div>
      <div className="get-in-container">
        <button className="get-in-button">Get in</button>
      </div>
    </div>
  );
};

export default Header;
