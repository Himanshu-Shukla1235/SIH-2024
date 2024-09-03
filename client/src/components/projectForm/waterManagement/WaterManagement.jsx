import React from "react";
import "./WaterManagement.css"; // Import the CSS file

function WaterManagement() {
  return (
    <div className="water-management-container">
      <h2>Water Management</h2>
      <label>
        Water Source (Surface water, Groundwater, Recycled):
        <input
          type="text"
          name="waterSource"
          placeholder="Enter water source"
        />
      </label>
      <label>
        Annual Water Usage (Cubic meters):
        <input
          type="number"
          name="waterUsage"
          placeholder="Enter water usage"
        />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default WaterManagement;
