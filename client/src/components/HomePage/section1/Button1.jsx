//this the contact button comp

import React from "react";
import "./Button1.css"; // Assuming you create a CSS file for the styles

const Button = ({ type = "type--C", text = "ENTRY" }) => {
  return (
    <div className="container">
      <button className="oneButton" ><p style={{ color: '#000000'}}>{text}</p>
</button>
    </div>
  );
};

export default Button;
