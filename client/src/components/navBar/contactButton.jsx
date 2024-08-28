//this the contact button comp

import React from "react";
import "./contactButton.css"; // Assuming you create a CSS file for the styles

const Button = ({ type = "type--C", text = "ENTRY" }) => {
  return (
    <div className="container">
      <button className="oneButton"><span style={{ color: '#000000' }}>Contact Us</span>
</button>
    </div>
  );
};

export default Button;
