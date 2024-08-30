import React from "react";
import logo from "./images/logo.svg";
import dashboadImg from "./images/illustration-dashboard.png";
import Email from "./components/Email";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="container">
      <img className="ping-logo" src={logo} alt="Logo image" />
      <h1>
        <span>We are launching</span> soon!
      </h1>
      <h2>Subscribe and get notified</h2>
      <Email />
      <img
        className="dashboard-img"
        src={dashboadImg}
        alt="Illustration of dashboard"
      />
      <div className="social-links">
        <a href="#">
          <FaFacebookF className="social-img" />
        </a>
        <a href="#">
          <FaTwitter className="social-img" />
        </a>
        <a href="#">
          <FaInstagram className="social-img" />
        </a>
      </div>
      <p className="copyright-info">
        <FaRegCopyright />
        Copyright Ping. All rights reserved.
      </p>
    </div>
  );
};

export default App;
