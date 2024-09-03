// eslint-disable-next-line no-unused-vars
import React from "react";
import "./projectStripes.css";

const ProjectStripes = ({ projectData }) => {
  return (
    <li className="strip">
      <div className="photo">
        Photo of the mine
      </div>
      <div className="infoOfProject">
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
        <h3>
          <span>Start Date: </span>
          {projectData.startDate}
        </h3>
        <h3>
          <span>End Date: </span>
          {projectData.endDate}
        </h3>

      </div>
    </li>
  );
};

export default ProjectStripes;
