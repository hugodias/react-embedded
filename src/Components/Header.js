import React from "react";
import logo from "./logo.svg";

const Header = () => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">Embedded profile builder</h1>
  </header>
);

export default Header;
