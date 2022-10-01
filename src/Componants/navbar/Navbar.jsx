import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/images/logo.png";
import ReactSwitch from "react-switch";
const Navbar = ({ onChange, checked }) => {
  const [isActive, setIsActive] = useState(false);
  const [btnActive, setBtnActive] = useState("home");
  return (
    <nav>
      <div className="container">
        <Link className="logo" to="/">
          <h4>
            VAWU<span>LENS</span>
          </h4>
          <div className="logo_img circle-3">
            <img src={LOGO} alt="logo" />
          </div>
        </Link>
        <div className="link_list_con">
          <div className={`link_list ${isActive ? "active" : ""}`}>
            <Link
              className={`link ${btnActive === "home" ? "active" : ""}`}
              to="/"
              onClick={() => {
                setBtnActive("home");
                setIsActive(!isActive);
              }}
            >
              Home
            </Link>
            <Link
              className={`link ${btnActive === "about" ? "active" : ""}`}
              to="/about"
              onClick={() => {
                setBtnActive("about");
                setIsActive(!isActive);
              }}
            >
              About
            </Link>
            <Link
              className={`link ${btnActive === "gallery" ? "active" : ""}`}
              to="/gallery"
              onClick={() => {
                setBtnActive("gallery");
                setIsActive(!isActive);
              }}
            >
              Gallery
            </Link>
            <Link
              className={`link ${btnActive === "plans" ? "active" : ""}`}
              to="/plans"
              onClick={() => {
                setBtnActive("plans");
                setIsActive(!isActive);
              }}
            >
              Plans
            </Link>
            <Link
              className={`link ${btnActive === "trainers" ? "active" : ""}`}
              to="/trainers"
              onClick={() => {
                setBtnActive("trainers");
                setIsActive(!isActive);
              }}
            >
              Trainers
            </Link>
            <Link
              className={`link ${btnActive === "contact" ? "active" : ""}`}
              to="/contact"
              onClick={() => {
                setBtnActive("contact");
                setIsActive(!isActive);
              }}
            >
              Contact
            </Link>
            <ReactSwitch onChange={onChange} checked={checked} />
          </div>
          <div
            className={`toggle ${isActive ? "active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
