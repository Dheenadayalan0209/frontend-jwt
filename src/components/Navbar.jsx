import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="/">
        CRUD operation
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          

          <li className="nav-item">
            <a className="nav-link" href="/login">
              Sign Up
            </a>
          </li>

          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

