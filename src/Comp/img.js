import React from "react";
import "./img.css"
export default function Img() {
  return (
    <div>
      <img className="image"
        src={require("./q4.png")}
        alt="no"
      />
    </div>
  );
}
