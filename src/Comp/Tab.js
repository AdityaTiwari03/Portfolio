import React, { useState } from "react";
import { Link } from "react-scroll";
import "./tabcss.css";

export default function UpTab() {
  const [navbarHeight, setNavbarHeight] = useState("20px");
  window.onscroll = function (event) {
    var scroll = window.scrollY;
    if (scroll < 500) {
      document.getElementById("navbar").style.backgroundColor = "";
    } else {
      document.getElementById("navbar").style.backgroundColor = "black";
    }
  };
  const handleClick = () => {
    setNavbarHeight((prevHeight) =>
      prevHeight === "30px" ? "fit-content" : "30px"
    );
  };

  return (
    <div className="main">
      <div className="container-fluid">
        <ul className="navbar" id="navbar">
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={handleClick}
            >
              Overview
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="education" spy={true} smooth={true}>
              Education
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="project" spy={true} smooth={true}>
              Project
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="skill" spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="extra" spy={true} smooth={true}>
              ExtraCurricular
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="Personal" spy={true} smooth={true}>
              Personal Info
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="Contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
