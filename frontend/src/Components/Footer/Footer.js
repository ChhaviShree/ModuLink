import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer_logo from "../Assets/finallogo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import video1 from "../Assets/video1.mp4";
import video2 from "../Assets/video2.mp4";

const Footer = () => {
  return (
    <div className="footer">
      <div className="video-container">
        <video width="320" height="240" controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="320" height="240" controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>MODULINK</p>
      </div>
      <ul className="footer-links">
        <li>
          <Link style={{ color: "white" }} to="/company">
            Company
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/designs">
            Designs
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024-All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
