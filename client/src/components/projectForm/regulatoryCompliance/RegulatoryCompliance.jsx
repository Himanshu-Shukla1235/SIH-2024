import React from "react";
import "./RegulatoryCompliance.css"; // Import the CSS file

function RegulatoryCompliance() {
  return (
    <div className="regulatory-compliance-container">
      <h2>Regulatory Compliance</h2>
      <label>
        Environmental Permits Held:
        <input type="text" name="permitsHeld" placeholder="Enter permits" />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default RegulatoryCompliance;
