import React from "react";
import "./Footer.css";
import { BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links-container">
        <Link to={"/"} className="format-link">
          <BsTwitter />
        </Link>
        <Link to={"/"} className="format-link">
          <BsInstagram />
        </Link>
        <Link to={"/"} className="format-link">
          <BsGithub />
        </Link>
      </div>

      <div className="footer-link-container">
        <Link to={"/"} className="format-link">
          <div className="footer-link">PRIVACY POLICY</div>
        </Link>
        <Link to={"/"} className="format-link">
          <div className="footer-link">TERMS & CONDITIONS</div>
        </Link>
        <Link to={"/"} className="format-link">
          <div className="footer-link">REFUND POLICY</div>
        </Link>
      </div>

      <div className="footer-copyright-container">
          <p className="footer-copyright">Copyright ©2022 GameSandBox. All rights reserved.</p>
          <h2>GameSandbox.</h2>
      </div>
    </footer>
  );
};

export default Footer;
