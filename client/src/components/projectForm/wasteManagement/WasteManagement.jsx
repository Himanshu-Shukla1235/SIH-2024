import React from "react";
import "./WasteManagement.css"; // Import the CSS file

function WasteManagement() {
  return (
    <div className="waste-management-container">
      <h2>Waste and Tailings Management</h2>
      <label>
        Type of Waste Generated (Tailings, Overburden, etc.):
        <input type="text" name="wasteType" placeholder="Enter type of waste" />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default WasteManagement;
