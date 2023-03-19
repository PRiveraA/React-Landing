import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand">Start Bootstrap</a>
        <div className="">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
