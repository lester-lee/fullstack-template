import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.less";

export default function Navbar() {
  return (
    <nav className="top">
      <h1>Home Page</h1>
      <menu>
        <li><NavLink to="/students">All Students</NavLink></li>
        <li>||</li>
        <li><NavLink to="/students"> Create Student</NavLink></li>
      </menu>
    </nav>
  );
}
