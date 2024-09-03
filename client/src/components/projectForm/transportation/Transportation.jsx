import React from "react";
import "./Transportation.css"; // Import the CSS file

function Transportation() {
  return (
    <div className="transportation-container">
      <h2>Transportation</h2>
      <label>
        Mode of Coal Transportation (Truck, Rail, Conveyor):
        <input
          type="text"
          name="transportMode"
          placeholder="Enter mode of transportation"
        />
      </label>
      <label>
        Number of Trucks:
        <input
          type="number"
          name="numberOfTrucks"
          placeholder="Enter number of trucks"
        />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default Transportation;
