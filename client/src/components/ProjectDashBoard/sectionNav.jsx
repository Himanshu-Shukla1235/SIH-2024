import React from "react";
import "./sectionNav.css";

const SectionNav = ({ onSectionChange }) => {
  return (
    <nav className="sectionNav">
      <button onClick={() => onSectionChange(0)} className="navButton">
        Overall
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Activity 1
      </button>
    </nav>
  );
};

export default SectionNav;
