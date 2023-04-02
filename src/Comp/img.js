import React from "react";
import "./img.css"
export default function Img() {
  return (
    <div enable>
      <img className="image"
        src={require("./q4.png")}
        alt="no"
        style={{
          position: "absolute",
          width: 750,
          height: 850,
          zIndex: -1
        }}
      />
    </div>
  );
}
