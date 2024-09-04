// Task.js
import React, { useState } from 'react';
import "./Task.css"
const Task = () => {
  // Sample list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Conduct site survey', completed: false },
    { id: 2, title: 'Setup mining equipment', completed: true },
    { id: 3, title: 'Monitor emission levels', completed: false },
    { id: 4, title: 'Schedule safety drills', completed: true },
    { id: 5, title: 'Report daily production', completed: false },
    { id: 6, title: 'Report daily production', completed: false },
    { id: 7, title: 'Report daily production', completed: false },
    { id: 8, title: 'Report daily production', completed: false },
    { id: 9, title: 'Report daily production', completed: false },
    { id: 10, title: 'Report daily production', completed: false },
    { id: 11, title: 'Report daily production', completed: false },
    { id: 12, title: 'Report daily production', completed: false },
    { id: 13, title: 'Report daily production', completed: false },
    { id: 14, title: 'Report daily production', completed: false },
    { id: 15, title: 'Report daily production', completed: false },
    { id: 16, title: 'Report daily production', completed: false },
    { id: 17, title: 'Report daily production', completed: false },
    { id: 18, title: 'Report daily production', completed: false },
  ]);

  return (
    <div className="task-list">
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
