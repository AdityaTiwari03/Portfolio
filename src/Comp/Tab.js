import React from "react";
import { Link } from "react-scroll";
import "./tabcss.css";
export default function UpTab() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          marginTop: 30,
          paddingTop: 10,
          justifyContent: "space-around",
          fontSize: 30,
          overflow: "hidden",
          backgroundColor: "yellow",
          height: 50,
          borderRadius: 30
        }}
      >
        <li cursor="pointer" className="go">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Overview
          </Link>{" "}
        </li>
        <li className="go">
          <Link to="education" spy={true} smooth={true}>
            Education
          </Link>
        </li>
        <li className="go">
          <Link to="project" spy={true} smooth={true}>
            Project
          </Link>
        </li>
        <li className="go">
          <Link to="skill" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="go">
          <Link to="extra" spy={true} smooth={true}>
            ExtraCurricular Activities
          </Link>
        </li>

        <li className="go">
          <Link to="Personal" spy={true} smooth={true}>
            Personal Information
          </Link>
        </li>
        <li className="go">
          <Link to="Contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
