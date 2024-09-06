import React from "react";
import "./ProjectCard.css"; // Move related CSS here

function ProjectCard({
  imageSrc,
  title,
  location,
  projectCode,
  projectCategory,
  projectType,
  standards,
  price,
  tonnesAvailable,
  vintages,
}) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-info">
        <div className="project-info-contents">
          <h2>{title}</h2>
          <p>{location}</p>
          <div className="project-details">
            <div className="project-meta">
              <p>Project Code: {projectCode}</p>
              <p>Project Category: {projectCategory}</p>
              <p>Project Type: {projectType}</p>
              <p>Standards: {standards}</p>
            </div>
            <div className="project-meta">
              <span className="badge">BBB</span>
              <span className="badge">CORSIA, Eligible</span>
            </div>
          </div>
        </div>
        <div className="price-info">
          <p className="price-text">
            From <span>${price}</span> USD/tonne
          </p>
          <p className="price-details">{tonnesAvailable} tonnes available</p>
          <p className="price-details">Vintages {vintages}</p>
          <button className="details-button">Project details</button>
          <button className="sell-button">Sell</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
