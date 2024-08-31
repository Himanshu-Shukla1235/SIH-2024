import React from "react";
import "./projectStripes.css";

const ProjectStripes = ({ projectData }) => {
  return (
    <li className="strip">
      <h2>
        <span>Project Name: </span>
        {projectData.projectName}
      </h2>
      <h3>
        <span>Location: </span>
        {projectData.location}
      </h3>
      <h3>
        <span>Type: </span>
        {projectData.type}
      </h3>
    </li>
  );
};

export default ProjectStripes;
