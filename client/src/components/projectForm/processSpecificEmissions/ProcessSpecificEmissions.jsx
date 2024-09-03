import React from "react";
import "./ProcessSpecificEmissions.css"; // Import the CSS file

function ProcessSpecificEmissions() {
  return (
    <div className="process-specific-emissions-container">
      <h2>Process-Specific Emissions</h2>
      <label>
        Fugitive Methane Emissions (Cubic meters per year):
        <input
          type="number"
          name="methaneEmissions"
          placeholder="Enter emissions"
        />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default ProcessSpecificEmissions;
