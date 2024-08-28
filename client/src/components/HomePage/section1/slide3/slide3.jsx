import * as React from "react";
import backimage from "../../../../../public/Images/sec1_image10.jpg";
import "./slide3.css";
import Button3 from "../Button1";
export default function slide3() {
  return (
    <div
      className="slide3"
      style={{
        backgroundImage: `url(${backimage})`, // Use template literals to dynamically insert the imported image URL
        backgroundSize: "cover", // Ensures the background image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        opacity: "0.9",
      }}
    >
      <div className="slide3_sec1">
        <h1 style={{ color: "orange", fontFamily: "sans-serif" }}>
          Trusted Carbon Credits Real Impact
        </h1>
        <p style={{ color: "white", fontFamily: "sans-serif" }}>
        Climate Impact X is a global marketplace, auctions house and exchange for trusted carbon credits.
        </p>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "black",
            border: "none",
            color: "orange",
            fontSize: "12px",
            fontFamily: "sans-serif",
            width: "9em",
            height: "2em",
            borderRadius: "5px",
            marginTop: "15px",
          }}
        >
        View Solutions
        </button>
      </div>
      <div className="slide3_sec2"></div>
    </div>
  );
}
