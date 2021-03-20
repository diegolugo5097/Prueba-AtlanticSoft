import React from "react";
import logo from "../../assets/img/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5">
        <div className="container p-4">
          <div className="row mt-3 justify-content-center">
            <a className="text-white p-3 mt-3" href="#!">
              Home
            </a>
            <a className="text-white p-3 mt-3" href="#!">
              How It Works
            </a>
            <a className="text-white p-3 mt-3" href="#!">
              Testimonials
            </a>
            <a className="text-white p-3 mt-3" href="#!">
              About Us
            </a>
            <a className="text-white p-3 mt-3" href="#!">
              Contact Us
            </a>
            <a className="text-white p-3 mt-3" href="#!">
              Login
            </a>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="row col justify-content-center p-4">
          <div>
            <img src={logo} className="logo-footer" />
          </div>
          <span className="text-secondary text-center mt-5 ml-5">
            Copyright USA Buying Group. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
