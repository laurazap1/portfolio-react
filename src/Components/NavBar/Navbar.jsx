import React from "react";
import "./Navbar.css";
//import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="logo">LAURA ZAPATA</div>
      <ul className="nav-menu">
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
      </ul>
      <div className="nav-connect">CONNECT WITH ME</div>
    </div>
  );
};

export default Navbar;
