import React from "react";
import { MdNotifications, MdAdd } from "react-icons/md";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Dashboard</div>
      <div className="header-search">
        <input type="text" placeholder="Search" disabled />
      </div>
      <div className="header-actions">
        <MdNotifications className="header-icon" />
        <button className="header-add-btn"><MdAdd /></button>
        <div className="header-profile">
          <img src="/avatar.png" alt="User" className="profile-img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
