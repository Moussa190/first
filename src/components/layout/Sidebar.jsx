import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
