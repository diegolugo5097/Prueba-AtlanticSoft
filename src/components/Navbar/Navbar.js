import React from "react";
import logo from "../../assets/img/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} className="mx-4 logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link mx-4" href="#">
                Home It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="#">
                About Us
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="d-flex">
              <a className="nav-link login mx-2" href="#">
                Log In
              </a>
              <button className="btn btn-outline-primary mx-4">
                Become a Member
              </button>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
