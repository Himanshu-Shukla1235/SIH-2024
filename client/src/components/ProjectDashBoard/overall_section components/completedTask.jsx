// Task.js
import React, { useState } from "react";
import "./Task.css";
import PopUp from "./PopupWindow";

const CompletedTask = () => {
  // List of mining tasks marked as incomplete
  const [tasks] = useState([
    { id: 1, title: "Conduct Site Survey", completed: false, content: "Survey the entire site to plan for mining operations." },
    { id: 2, title: "Setup Mining Equipment", completed: false, content: "Install and configure mining equipment on-site." },
    { id: 3, title: "Monitor Equipment Performance", completed: false, content: "Regularly check equipment to ensure optimal performance." },
    { id: 4, title: "Schedule Safety Drills", completed: false, content: "Organize regular safety drills for all personnel." },
    { id: 5, title: "Report Daily Production", completed: false, content: "Compile and report daily production figures to management." },
    { id: 6, title: "Inspect Ventilation Systems", completed: false, content: "Check and maintain ventilation systems for air quality control." },
    { id: 7, title: "Oversee Excavation Processes", completed: false, content: "Supervise excavation activities to ensure safety and efficiency." },
    { id: 8, title: "Maintain Equipment Logs", completed: false, content: "Keep detailed logs of equipment usage and maintenance." },
    { id: 9, title: "Test Emergency Protocols", completed: false, content: "Test all emergency response protocols and adjust as needed." },
    { id: 10, title: "Train New Workers", completed: false, content: "Conduct training sessions for new employees on mining operations." },
    { id: 11, title: "Evaluate Mineral Samples", completed: false, content: "Analyze mineral samples to assess quality and value." },
    { id: 12, title: "Coordinate with Logistics Team", completed: false, content: "Work with logistics to manage material transport." },
    { id: 13, title: "Update Site Maps", completed: false, content: "Regularly update maps to reflect current excavation progress." },
    { id: 14, title: "Manage Waste Disposal", completed: false, content: "Ensure proper disposal of mining waste materials." },
    { id: 15, title: "Schedule Equipment Maintenance", completed: false, content: "Plan and schedule regular maintenance for all equipment." },
    { id: 16, title: "Implement Energy-Saving Measures", completed: false, content: "Introduce measures to reduce energy consumption at the site." },
    { id: 17, title: "Optimize Production Workflows", completed: false, content: "Streamline workflows to improve production rates." },
    { id: 18, title: "Monitor Environmental Impact", completed: false, content: "Assess and mitigate the environmental impact of mining activities." },
    { id: 19, title: "Handle Supply Chain Issues", completed: false, content: "Resolve any supply chain disruptions promptly." },
    { id: 20, title: "Prepare for Regulatory Inspections", completed: false, content: "Ensure all operations comply with regulations ahead of inspections." },
  ]);

  const [currentTask, setCurrentTask] = useState(null);

  const openPopUp = (task) => setCurrentTask(task);
  const closePopUp = () => setCurrentTask(null);

  return (
    <div className="task-list">
      <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>Pending Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""} onClick={() => openPopUp(task)}>
            <span>{`${task.id}. ${task.title}`}</span>
          </li>
        ))}
      </ul>

      {currentTask && (
        <PopUp isOpen={!!currentTask} onClose={closePopUp}>
          <h2>{`${currentTask.id}. ${currentTask.title}`}</h2>
          <p>{currentTask.content}</p>
        </PopUp>
      )}
    </div>
  );
};

export default CompletedTask;
