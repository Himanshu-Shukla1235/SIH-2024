import React from "react";
import "./MineIdentification.css"; // Import the CSS file

function MineIdentification() {
  return (
    <div className="mine-identification-container">
      <h2>Mine Identification and General Information</h2>
      <label>
        Mine Name:
        <input type="text" name="mineName" placeholder="Enter mine name" />
      </label>
      <label>
        Mine Location (Country, Region, GPS Coordinates):
        <input
          type="text"
          name="mineLocation"
          placeholder="Enter mine location"
        />
      </label>
      <label>
        Type of Mine (e.g., Surface, Underground):
        <input type="text" name="mineType" placeholder="Enter type of mine" />
      </label>
      <label>
        Coal Type Mined (e.g., Lignite, Bituminous, Anthracite):
        <input
          type="text"
          name="coalType"
          placeholder="Enter coal type mined"
        />
      </label>
      <label>
        Date of Operation Start:
        <input type="date" name="operationStart" />
      </label>
      <label>
        Expected Mine Life (Years remaining):
        <input
          type="number"
          name="mineLife"
          placeholder="Enter years remaining"
        />
      </label>
    </div>
  );
}

export default MineIdentification;
