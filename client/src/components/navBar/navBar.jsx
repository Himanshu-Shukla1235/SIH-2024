import React from "react";
import "./navBar.css";
import ContactButton from "./contactButton";
const NavBar = () => {
  
  return (
    <React.Fragment>
      <div className="nav">
        <a className="nav_text_1">CorbonFootprint India</a>
        <a href="" className="nav_text_2">FAQS</a>
        <a href="" className="nav_text_3">Case Studies</a>
        <a href="" className="nav_text_4">Plans</a>
        <a href="" className="nav_text_5">Resources</a>
        <a href="" className="nav_text_6">Pricing</a>
        <ContactButton></ContactButton>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
