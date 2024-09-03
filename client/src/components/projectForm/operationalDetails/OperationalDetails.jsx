import React from "react";
import "./OperationalDetails.css"; // Import the CSS file

function OperationalDetails() {
  return (
    <div className="operational-details-container">
      <h2>Operational Details</h2>
      <label>
        Annual Coal Production (Tons per year):
        <input
          type="number"
          name="annualProduction"
          placeholder="Enter annual production"
        />
      </label>
      <label>
        Mining Method Used:
        <select name="miningMethod">
          <option value="surface">Surface Mining</option>
          <option value="underground">Underground Mining</option>
        </select>
      </label>
      <label>
        Number of Shifts per Day:
        <input
          type="number"
          name="shiftsPerDay"
          placeholder="Enter number of shifts"
        />
      </label>
      <label>
        Operational Days per Year:
        <input
          type="number"
          name="operationalDays"
          placeholder="Enter operational days"
        />
      </label>
    </div>
  );
}

export default OperationalDetails;
