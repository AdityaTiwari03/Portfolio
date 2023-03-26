import React, { Component } from "react";
import "./App.css";
export default class MiddleSection extends Component {
  render() {
    function hi() {
      window.open("https://github.com/AdityaTiwari03/Order");
    }
    return (
      <div style={{ fontSize: 30, marginLeft: 130, marginRight: 130 }}>
        <div id="home">
          <p>
            This is Aditya Tiwari, I am thriving to persue my career as Web
            developer. I am currently persuing Btech from IIT Bhilai, Computer
            Science and Engineering(2021-2025). I am natively form Indore.
          </p>
        </div>{" "}
        <br />
        <div id="education">
          <h2>EDUCATION</h2>
          <ul>
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
        <br />
        <div id="project">
          <h2>PROJECTS</h2>
          This is my personal Project that I developed using React, CSS and
          Javascript. I know Hindi and English. <br />
          <br />
          <button className="proj" onClick={hi}>
            Go to my Project
          </button>
        </div>{" "}
        <br />{" "}
        <div id="extra" style={{ position: "absolute", right: 130 }}>
          <h2> Extra Curricular </h2>
          <ul>
            <li>
              Won Inter- School Acting <br />
              Competition 2 times
            </li>
            <li>
              Participated in many dance and <br /> acting events at college
              level.
            </li>
          </ul>
        </div>
        <div id="skill">
          <h2>SKILLS</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS.</li>
            <li>Python</li>
            <li>MS Office</li>
            <li>Object Oriented</li>
            <li>Programming</li>
            <li>GIT</li>
            <li>Shell Script</li>
            <li>Latex</li>
          </ul>
        </div>
        <br />
        <div id="Personal" style={{ position: "absolute", right: 130 }}>
          <h2>Personal Information</h2>
          <ul>
            <li>
              <b>Date of Birth</b> - 2 Aug 2003{" "}
            </li>
            <li>
              <b>Father’s Name</b> - Mr.Prashant Tiwari
            </li>
            <li>
              <b>Nationality</b> - Indian
            </li>{" "}
          </ul>
        </div>
        <div id="Contact">
          <h2> Contact me</h2>
          <ul>
            <li>
              <b>Phone - </b>+91-6268631092
            </li>
            <li
              onClick={() => {
                window.open(
                  "https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AQMjQ7QHMxz5HSIXrs09SrUDvJQ7PXVsFeaHcO3cEgGhcLbt6gfYuHeiQOkHM_Oh9Hdy08h6GVvrqA&flowName=GlifWebSignIn&flowEntry=ServiceLogin#inbox"
                );
              }}
            >
              <b>Email - </b>
              <u>aadi.tiwari0208@gmail.com </u>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}