import React from "react";
import "./CommunityImpact.css"; // Import the CSS file

function CommunityImpact() {
  return (
    <div className="community-impact-container">
      <h2>Employee and Community Impact</h2>
      <label>
        Number of Employees:
        <input
          type="number"
          name="numberOfEmployees"
          placeholder="Enter number of employees"
        />
      </label>
      <label>
        Average Commute Distance (km):
        <input
          type="number"
          name="commuteDistance"
          placeholder="Enter commute distance"
        />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default CommunityImpact;
