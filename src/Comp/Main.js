import React from "react";
import "./App.css";
import html from "../Images/HTML.png";
import css from "../Images/CSS.png";
import js from "../Images/JS.png";
import python from "../Images/Python.png";
import reactjs from "../Images/Reactjs.png";
import ML from "../Images/ML.png";
import Git from "../Images/Git.png";
import bash from "../Images/Bash.png";
import latex from "../Images/latex.png";
import OOP from "../Images/OOP.png";
import nextjs from "../Images/nextjs.png";

function MiddleSection() {
  return (
    <div class="detail-container">
      <div id="home" class="detail-section">
        <p>
          I'm Aditya Tiwari, a native of Indore, with a strong passion for a
          career in web development. My journey into the tech world began with a
          deep interest in Machine Learning, and I've already gained knowledge
          in this field.
          <br />
          Currently, I'm expanding my skill set by delving into backend
          development and participating in Smart India Hackathon.
        </p>
      </div>{" "}
      <div id="education" class="detail-section">
        <h2>EDUCATION</h2>
        <ul class="edu-list">
          <li>
            <b>Chameli Devi Public School</b>, Indore — Secondary School
            Certificate Examination <br />
            July,2006 - June 2020{" "}
          </li>
          <li>
            <b>Gyan Sagar Vidya Niketan </b>, Indore — higher Secondary
            Examination <br />
            June 2020 - April 2021{" "}
          </li>
          <li>
            <b>Indian Institute of Technology, Bhilai </b>, Raipur — Btech
            (Computer Science and Engineering) <br />
            November 2021 - PRESENT{" "}
          </li>
        </ul>
      </div>{" "}
      <div id="project" class="detail-section">
        <h2>PROJECTS</h2>
        During my internship at Finorator as a Frontend Developer, I worked
        extensively with HTML, CSS, JavaScript, and React. My responsibilities
        included creating and maintaining user interfaces, collaborating with
        cross-functional teams, and ensuring clean, efficient code that adhered
        to industry standards. I tackled challenges like performance
        optimization and gained valuable experience in version control with Git.
        I've also Participated in several Flipr Hackathon for Web Development.
      </div>{" "}
      <div id="skill" class="detail-section skill">
        <h2>SKILLS</h2>
        <div className="cardcontainer">
          <div className="card">
            <div className="logocontainer">
              <img src={html} className="logo" />
            </div>
            <div className="textcontainer">HTML</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={css} className="logo" />
            </div>
            <div className="textcontainer">CSS</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={js} className="logo" />
            </div>
            <div className="textcontainer">JavaScript</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={python} className="logo" />
            </div>
            <div className="textcontainer">Python</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={reactjs} className="logo" />
            </div>
            <div className="textcontainer">React JS</div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="card">
            <div className="logocontainer">
              <img src={Git} className="logo" />
            </div>
            <div className="textcontainer">Git</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={ML} className="logo" />
            </div>
            <div className="textcontainer">Machine Learning</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={bash} className="logo" />
            </div>
            <div className="textcontainer">Bash</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={latex} className="logo" />
            </div>
            <div className="textcontainer">Latex</div>
          </div>
          <div className="card">
            <div className="logocontainer">
              <img src={OOP} className="logo" />
            </div>
            <div className="textcontainer">Object Oriented Programming</div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="card">
            <div className="logocontainer">
              <img src={nextjs} className="logo" />
            </div>
            <div className="textcontainer">Next JS</div>
          </div>
        </div>
      </div>
      <div id="extra" class="detail-section extra" style={{ flex: "50%" }}>
        <h2> Extra Curricular </h2>
        <ul>
          <li>Won Inter- School Acting Competition 2 times</li>
          <li>
            Participated in many dance and acting events at college level.
          </li>
          <li>
            Active Participant of various Cultural activities including Dance,
            Acting and Anchoring.
          </li>
        </ul>
      </div>
      <div id="Personal" class="detail-section" style={{ flex: "50%" }}>
        <h2>Personal Information</h2>
        <ul>
          <li>
            <b>Date of Birth</b> - 2nd Aug 2003{" "}
          </li>
          <li>
            <b>Father’s Name</b> - Mr Prashant Tiwari
          </li>
          <li>
            <b>Nationality</b> - Indian
          </li>{" "}
        </ul>
      </div>
      <div id="Contact" class="detail-section" style={{ flex: "50%" }}>
        <h2> Contact me</h2>
        <ul>
          <li>
            <b>Phone - </b>+91-6268631092
          </li>
          <li
            onClick={() => {
              window.open(
                "https:/accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AQMjQ7QHMxz5HSIXrs09SrUDvJQ7PXVsFeaHcO3cEgGhcLbt6gfYuHeiQOkHM_Oh9Hdy08h6GVvrqA&flowName=GlifWebSignIn&flowEntry=ServiceLogin#inbox"
              );
            }}
          >
            <b>Email - </b>
            <u>aadi.tiwari0208@gmail.com </u>
          </li>
          <li
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/aditya-tiwari-8b6971223/"
              );
            }}
          >
            <b>Linkedin - </b>
            <u>www.linkedin.com/in/aditya-tiwari-8b6971223</u>
          </li>
          <li
            onClick={() => {
              window.open("https://github.com/AdityaTiwari03");
            }}
          >
            <b>Github - </b>
            <u>AdityaTiwari03</u>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MiddleSection;
