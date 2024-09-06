import React from "react";
import "./sectionNav.css";

const SectionNav = ({ onSectionChange }) => {
  return (
    <nav className="sectionNav">
      <button onClick={() => onSectionChange(0)} className="navButton">
        Overall
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Exploration & Planning
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Development
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Extraction
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Processing & Handling
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Transportation
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Combustion
      </button>
      <button onClick={() => onSectionChange(1)} className="navButton">
        Rehabitation and Closure
      </button>
    </nav>
  );
};

export default SectionNav;
