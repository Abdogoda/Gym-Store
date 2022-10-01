import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import LOGO from "../../assets/images/logo.png";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <Link className="logo" to="/">
            <h4>
              VAWU<span>LENS</span>
            </h4>
            <div className="logo_img circle-3">
              <img src={LOGO} alt="logo" />
            </div>
          </Link>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga
            similique provident sapiente magnam, placeat autem. Nostrum, odio!
            Sequi maxime laboriosam nulla ducimus aspernatur.
          </p>
          <div className="footer_icons">
            <IoLogoLinkedin className="footer_icon circle-2" />
            <FaFacebook className="footer_icon circle-2" />
            <FaTwitter className="footer_icon circle-2" />
            <FaInstagram className="footer_icon circle-2" />
          </div>
        </div>
        <div className="permalinks_container">
          <div className="permalinks">
            <h5>Permalinks</h5>
            <div className="footer_links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/trainers">Trainers</Link>
              <Link to="/plans">Plans</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="permalinks">
            <h5>Get In Touch</h5>
            <div className="footer_links">
              <Link to="/contact">Contact Us</Link>
              <Link to="">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
