import React from "react";
import "./EquipmentInventory.css"; // Import the CSS file

function EquipmentInventory() {
  return (
    <div className="equipment-inventory-container">
      <h2>Equipment Inventory and Fuel Consumption</h2>
      <label>
        List of Major Equipment:
        <textarea
          name="equipmentList"
          placeholder="Enter list of major equipment"
        ></textarea>
      </label>
      <label>
        Excavators - Fuel type (e.g., Diesel):
        <input
          type="text"
          name="excavatorFuelType"
          placeholder="Enter fuel type"
        />
      </label>
      <label>
        Average Fuel Consumption (Liters per hour):
        <input
          type="number"
          name="excavatorFuelConsumption"
          placeholder="Enter fuel consumption"
        />
      </label>
      {/* Add more fields for other equipment */}
    </div>
  );
}

export default EquipmentInventory;
