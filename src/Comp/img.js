import React from "react";
import "./img.css"
export default function Img() {
  return (
    <div enable>
      <img className="image"
        src={require("./q4.png")}
        alt="no"
        style={{
          zIndex: -1,
          right: 20
        }}
      />
    </div>
  );
}
