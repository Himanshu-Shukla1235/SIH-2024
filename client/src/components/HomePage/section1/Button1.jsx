import React from "react";
import "./Button1.css"; // Assuming you create a CSS file for the styles

const Button = ({ type = "type--C", text = "ENTRY" }) => {
  return (
    <div className="container">
      <button className="oneButton">
        <span style={{ color: '#000000' ,fontFamily:'sans-serif'}}>{text}</span>
      </button>
    </div>
  );
};

export default Button;
