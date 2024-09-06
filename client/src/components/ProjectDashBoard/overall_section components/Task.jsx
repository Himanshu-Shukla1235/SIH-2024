// Task.js
import React, { useState } from "react";
import "./Task.css";
import PopUp from "./PopupWindow";

const Task = ({ showCompleted }) => {
  // Expanded list of 20 mining tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Conduct site survey",
      completed: false,
      content: "Survey the entire site to plan for mining operations.",
    },
    {
      id: 2,
      title: "Setup mining equipment",
      completed: false,
      content: "Install and configure mining equipment on-site.",
    },
    {
      id: 3,
      title: "Monitor equipment performance",
      completed: false,
      content: "Regularly check equipment to ensure optimal performance.",
    },
    {
      id: 4,
      title: "Schedule safety drills",
      completed: false,
      content: "Organize regular safety drills for all personnel.",
    },
    {
      id: 5,
      title: "Report daily production",
      completed: false,
      content: "Compile and report daily production figures to management.",
    },
    {
      id: 6,
      title: "Inspect ventilation systems",
      completed: false,
      content:
        "Check and maintain ventilation systems for air quality control.",
    },
    {
      id: 7,
      title: "Oversee excavation processes",
      completed: false,
      content:
        "Supervise excavation activities to ensure safety and efficiency.",
    },
    {
      id: 8,
      title: "Maintain equipment logs",
      completed: false,
      content: "Keep detailed logs of equipment usage and maintenance.",
    },
    {
      id: 9,
      title: "Test emergency protocols",
      completed: false,
      content: "Test all emergency response protocols and adjust as needed.",
    },
    {
      id: 10,
      title: "Train new workers",
      completed: false,
      content:
        "Conduct training sessions for new employees on mining operations.",
    },
    {
      id: 11,
      title: "Evaluate mineral samples",
      completed: false,
      content: "Analyze mineral samples to assess quality and value.",
    },
    {
      id: 12,
      title: "Coordinate with logistics team",
      completed: false,
      content: "Work with logistics to manage material transport.",
    },
    {
      id: 13,
      title: "Update site maps",
      completed: true,
      content: "Regularly update maps to reflect current excavation progress.",
    },
    {
      id: 14,
      title: "Manage waste disposal",
      completed: false,
      content: "Ensure proper disposal of mining waste materials.",
    },
    {
      id: 15,
      title: "Schedule equipment maintenance",
      completed: false,
      content: "Plan and schedule regular maintenance for all equipment.",
    },
    {
      id: 16,
      title: "Implement energy-saving measures",
      completed: false,
      content: "Introduce measures to reduce energy consumption at the site.",
    },
    {
      id: 17,
      title: "Optimize production workflows",
      completed: false,
      content: "Streamline workflows to improve production rates.",
    },
    {
      id: 18,
      title: "Monitor environmental impact",
      completed: false,
      content:
        "Assess and mitigate the environmental impact of mining activities.",
    },
    {
      id: 19,
      title: "Handle supply chain issues",
      completed: false,
      content: "Resolve any supply chain disruptions promptly.",
    },
    {
      id: 20,
      title: "Prepare for regulatory inspections",
      completed: false,
      content:
        "Ensure all operations comply with regulations ahead of inspections.",
    },
  ]);

  const [currentTask, setCurrentTask] = useState(null);

  const openPopUp = (task) => setCurrentTask(task);
  const closePopUp = () => setCurrentTask(null);

  const markAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
    closePopUp();
  };

  // Filter tasks based on the showCompleted prop
  const filteredTasks = tasks.filter((task) =>
    showCompleted ? task.completed : true
  );


  return (
    <div className="task-list">
      <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
        {showCompleted ? "Completed Tasks" : "Tasks"}
      </h3>
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : ""}
              onClick={() => openPopUp(task)}
            >
              <div className="task-header">
                <span>{`${task.id}. ${task.title}`}</span>
              </div>
              <div className="task-content">
                <hr className="task-divider" />
                <p>{task.content}</p>
              </div>
            </li>
          ))
        ) : (
          <li>No tasks found.</li>
        )}
      </ul>

      {currentTask && (
        <PopUp isOpen={!!currentTask} onClose={closePopUp}>
          <h2>{currentTask.title}</h2>
          <p>{currentTask.content}</p>
          <button
            onClick={() =>
              markAsCompleted(currentTask.id)
            }
            className="done-button"
            disabled={currentTask.completed}
          >
            {currentTask.completed ? "Completed" : "Done"}
          </button>
        </PopUp>
      )}
    </div>
  );
};

export default Task;