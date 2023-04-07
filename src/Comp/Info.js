import React, {useState, useToggle} from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import pdf from "./Resume_Aditya.pdf";
import  "./info.css"
export default function Info() {
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };
  const [toggle, setToggle] = useToggle();

   return (
    <div className="div"
      style={{
        color: "white",
        width: 800,
        borderColor: "black",
        position: "absolute",
        left: 20,
        height: 1000,
        marginTop: 50,
        textAlign: "center",
      }}
    >
      <p className="naam"
      >
        Aditya Tiwari
      </p>
      <p className="info">
        IIT Bhilai, Btech (2021-2025) <br />
        Computer Science and Engineering
      </p> <div>
      <AwesomeButton
        type="github"
        zIndex = "3"
        style={{height: 70, width: 350, fontSize: 20, borderColor: "white"}}
        onPress={setToggle} 
      >
        <h1>View Portfolio</h1>
      </AwesomeButton>
      </div>
      {toggle &&(
  <iframe src={pdf} id = "pdf" style= {{ width: 1200, height: 1130, zIndex: 0, display: "flex"}} ></iframe> 
  )}
    </div>
  );
}
