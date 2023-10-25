import React, {useState, useToggle} from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import pdf from "./Resume_Aditya.pdf";
import  "./info.css"
import Img from "./img";
export default function Info() {
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };
  const [toggle, setToggle] = useToggle();

   return (
    <div className="content">
      <div className="info-container">
        <p className="name">Aditya Tiwari</p>
        <p className="info">
          IIT Bhilai, Btech (2021-2025) <br />
          Computer Science and Engineering
        </p>
        <div className="button-container">
          <AwesomeButton
            type="github"
            zIndex="3"
            style={{
              height: 50,
              width: 230,
              fontSize: 10,
              borderColor: "white",
            }}
            onPress={setToggle}
          >
            <h1>View Portfolio</h1>
          </AwesomeButton>
        </div>
        {toggle && ( 
        <iframe
          src={pdf}
          id="pdf"
          className="pdf-frame"
        ></iframe>
      )}

      </div>
      <div className="photo"><Img /></div>
    </div>
  
 );
}
