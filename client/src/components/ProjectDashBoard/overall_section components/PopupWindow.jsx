import React from "react";
import "./PopUpWindow.css"; // Import the CSS file

const PopUpWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If the popup is not open, return null

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-window" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children} {/* Render the children passed to the popup */}
      </div>
    </div>
  );
};

export default PopUpWindow;
