import * as React from "react";
import backimage from "../../../../../public/Images/sec1_image9.jpg";
import "./slide2.css";
import Button3 from "../Button1"
export default function Slide2() {
  return (
    <div
      className="slide2"
      style={{
        backgroundImage: `url(${backimage})`, // Use template literals to dynamically insert the imported image URL
        backgroundSize: "cover", // Ensures the background image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        opacity: "0.9",
      }}
    >
      <div className="slide2_sec1">
        <h1 style={{color:"green",fontFamily:"sans-serif"}}>CIX Approach to Quality</h1>
        <p style={{color:"white" ,fontFamily:"sans-serif"}}>
          Download our paper to learn more about our approach to carbon credit
          quality and integrity for the voluntary carbon market!
        </p>
        <button   style={{cursor:"pointer" ,backgroundColor:"black", border:"none", color:"lightgreen",fontSize: "12px",fontFamily:"sans-serif",width:"9em",height:"2em" ,borderRadius:'5px',marginTop:"15px"} }>Download Now</button>
      </div>
      <div className="slide2_sec2"></div>
    </div>
  );
}
