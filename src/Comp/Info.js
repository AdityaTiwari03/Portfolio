import React from "react";
import "react-awesome-button/dist/styles.css";
import pdf from "./Resume_Aditya.pdf";
import "./info.css";
export default function Info() {
  return (
    <div className="portfolio-container">
      <div className="info-container">
        <div className="basic-info">
          <h1 className="name">Aditya Tiwari</h1>
          <h3 className="info">
            IIT Bhilai, Btech (2021-2025) <br />
            Computer Science and Engineering
          </h3>
          <div className="button-container">
            <a href={pdf} without rel="noopener noreferrer" target="_blank">
              <button
                trailingIcon="picture_as_pdf"
                className="pdf"
                label="Resume"
              >
                View Portfolio
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
