// Task.js
import React, { useState } from "react";
import "./Task.css";
import PopUp from "./PopupWindow";

const Issues = () => {
  // List of 20 common issues in coal mining
  const [issues] = useState([
    { id: 1, title: "Coal Dust Suppression", completed: false, content: "Implement measures to control coal dust to protect worker health and reduce environmental impact." },
    { id: 2, title: "Mine Gas Control", completed: true, content: "Monitor and control dangerous gases like methane to prevent explosions." },
    { id: 3, title: "Water Contamination", completed: false, content: "Address the contamination of local water sources due to runoff from mining operations." },
    { id: 4, title: "Ground Subsidence", completed: true, content: "Mitigate ground subsidence which can damage surface structures and ecosystems." },
    { id: 5, title: "Equipment Maintenance Delays", completed: false, content: "Ensure timely maintenance of equipment to avoid costly downtime." },
    { id: 6, title: "Worker Safety and Training", completed: false, content: "Enhance worker safety through regular training and updated safety protocols." },
    { id: 7, title: "Ventilation Issues", completed: false, content: "Maintain adequate ventilation systems to reduce airborne hazards." },
    { id: 8, title: "Blasting Hazards", completed: false, content: "Manage risks associated with blasting operations to protect workers and equipment." },
    { id: 9, title: "Transportation and Logistics", completed: false, content: "Resolve challenges in transporting coal from mines to processing facilities or markets." },
    { id: 10, title: "Regulatory Compliance", completed: false, content: "Stay compliant with changing regulations to avoid legal and financial penalties." },
    { id: 11, title: "Environmental Rehabilitation", completed: false, content: "Plan for and implement effective rehabilitation of mining sites post-extraction." },
    { id: 12, title: "Slope Stability", completed: false, content: "Ensure slope stability in open-pit mines to prevent landslides and ensure safety." },
    { id: 13, title: "Energy Efficiency", completed: false, content: "Improve energy efficiency of mining operations to reduce costs and environmental footprint." },
    { id: 14, title: "Coal Quality Control", completed: false, content: "Implement measures to consistently maintain the quality of coal extracted." },
    { id: 15, title: "Waste Management", completed: false, content: "Manage waste products from coal mining to minimize environmental impact." },
    { id: 16, title: "Worker Fatigue", completed: false, content: "Address worker fatigue through proper scheduling and rest breaks to maintain safety." },
    { id: 17, title: "Noise Pollution", completed: false, content: "Control noise pollution to protect workers' hearing and reduce environmental disturbance." },
    { id: 18, title: "Operational Delays", completed: false, content: "Minimize delays in operations due to unforeseen challenges or equipment failures." },
    { id: 19, title: "Supply Chain Disruptions", completed: false, content: "Address disruptions in the supply chain to ensure smooth mining operations." },
    { id: 20, title: "Mine Closure Planning", completed: false, content: "Plan effectively for the eventual closure of mines to mitigate long-term impacts." },
  ]);

  const [currentIssue, setCurrentIssue] = useState(null);

  const openPopUp = (issue) => setCurrentIssue(issue);
  const closePopUp = () => setCurrentIssue(null);

  return (
    <div className="task-list">
      <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>Issues</h3>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} className={issue.completed ? "completed" : ""} onClick={() => openPopUp(issue)}>
            <span onClick={() => openPopUp(issue)}>{`${issue.id}. ${issue.title}`}</span>
          </li>
        ))}
      </ul>

      {currentIssue && (
        <PopUp isOpen={!!currentIssue} onClose={closePopUp}>
          <h2>{`${currentIssue.id}. ${currentIssue.title}`}</h2>
          <p>{currentIssue.content}</p>
        </PopUp>
      )}
    </div>
  );
};

export default Issues;
