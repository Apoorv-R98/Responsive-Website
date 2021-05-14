import React from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import ListItem from "./ListItem";

function Navbar() {
  return (
    <div id="navBar">
      <div id="logo">
        <img src={logo} alt="MyOnlineMeal.com" />
      </div>

      <ul>
        <ListItem text="Home" />
        <ListItem text="Services" />
        <ListItem text="About Us" />
        <ListItem text="Contact Us" />
      </ul>
    </div>
  );
}

export default Navbar;
