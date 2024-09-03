import React from "react";
import "./EnergyConsumption.css"; // Import the CSS file

function EnergyConsumption() {
  return (
    <div className="energy-consumption-container">
      <h2>Energy Consumption</h2>
      <label>
        Total Electricity Consumption (kWh per year):
        <input
          type="number"
          name="electricityConsumption"
          placeholder="Enter total consumption"
        />
      </label>
      <label>
        Electricity Source (Grid, On-site generation, Renewable):
        <input
          type="text"
          name="electricitySource"
          placeholder="Enter electricity source"
        />
      </label>
      {/* Add more fields as needed */}
    </div>
  );
}

export default EnergyConsumption;
