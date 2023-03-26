import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
export default function Info() {
  return (
    <div
      style={{
        width: 800,
        border: "black",
        position: "absolute",
        left: 0,
        height: 800,
        marginTop: 50,
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 80,
          marginLeft: 20,
          fontWeight: "bold",
        }}
      >
        Aditya Tiwari
      </p>
      <p style={{ marginTop: 0, fontSize: 40 }}>
        IIT Bhilai, Btech (2021-2025) <br />
        Computer Science and Engineering
      </p>
      <AwesomeButton
        type="github"
        height="70px"
        size="120"
        fontSize="40"
        width="100px"
        onPress={() => {
          window.open("https://github.com/AdityaTiwari03/Resume");
        }}
      >
        <h1>View Portfolio</h1>
      </AwesomeButton>
    </div>
  );
}
