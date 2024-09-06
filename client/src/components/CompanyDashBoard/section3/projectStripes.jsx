import React from "react";
import { Link } from "react-router-dom";
import "./projectStripes.css";

const ProjectStripes = ({ projectData }) => {
  return (
    <Link to="/project_dashboard" className="strip">
      <div className="photo">
        Photo of the mine
      </div>
      <div className="infoOfProject">
        <h2 className="name">
          <h4>Project Name:</h4>
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
    </Link>
  );
};

export default ProjectStripes;
