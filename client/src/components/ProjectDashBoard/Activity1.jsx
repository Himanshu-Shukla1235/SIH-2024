import React, { useState } from "react";
import "./Activity1.css";
import Graph2 from "./Activity_1_components/Activity_1_graph2";

const Activity1 = () => {
  // Initialize state with an array of different technologies
  const [technologies, setTechnologies] = useState([
    {
      id: 1,
      name: "Green Tech",
      description: "Description: A technology that focuses on reducing carbon emissions.",
      buttonName: "NormalButton",
      text: "Add to your Task"
    },
    {
      id: 2,
      name: "Renewable Energy",
      description: "Description: Utilizing solar, wind, and hydro power to reduce reliance on fossil fuels.",
      buttonName: "NormalButton",
      text: "Add to your Task"
    },
    {
      id: 3,
      name: "Energy Efficiency",
      description: "Description: Implementing measures to reduce energy consumption in buildings and processes.",
      buttonName: "NormalButton",
      text: "Add to your Task"
    },
    {
      id: 4,
      name: "Carbon Capture",
      description: "Description: Technologies designed to capture and store carbon dioxide emissions.",
      buttonName: "NormalButton",
      text: "Add to your Task"
    },
    {
      id: 5,
      name: "Sustainable Agriculture",
      description: "Description: Practices that improve soil health and reduce greenhouse gas emissions from farming.",
      buttonName: "NormalButton",
      text: "Add to your Task"
    }
  ]);

  const buttonClickHandle = (id) => {
    // Update state for the technology with the matching id
    setTechnologies((prevTechnologies) =>
      prevTechnologies.map((tech) =>
        tech.id === id
          ? { ...tech, buttonName: "added", text: "Added!" }
          : tech
      )
    );
  };

  return (
    <React.Fragment>
      <main className="ProD_main">
        <div className="activityDescription">
          <h2>Factors :</h2>
          <div className="phaseFactors">
            <h3>Exploration and Planning</h3>
            <ul>
              <li><a href="#">Energy consumption for surveys:</a> 2000 kWh</li>
              <li><a href="#">CO2 emissions from drilling:</a> 1500 kg</li>
            </ul>

            <h3>Extraction</h3>
            <ul>
              <li><a href="#">Surface mining machinery:</a> 5000 kg CO2 per day</li>
              <li><a href="#">Methane release from underground mining:</a> 2000 kg</li>
            </ul>

            <h3>Transportation</h3>
            <ul>
              <li><a href="#">Diesel trucks:</a> 3000 kg CO2 per month</li>
              <li><a href="#">Trains:</a> 4000 kg CO2 per month</li>
            </ul>

            <h3>Processing and Handling</h3>
            <ul>
              <li><a href="#">Energy for crushing:</a> 2500 kWh</li>
              <li><a href="#">CO2 from washing coal:</a> 1000 kg</li>
            </ul>

            <h3>Combustion</h3>
            <ul>
              <li><a href="#">Power plant emissions:</a> 100,000 kg CO2 per year</li>
              <li><a href="#">Other pollutants:</a> 20,000 kg</li>
            </ul>

            <h3>Post-Mining Activities</h3>
            <ul>
              <li><a href="#">Waste management emissions:</a> 3000 kg CO2</li>
              <li><a href="#">Land rehabilitation:</a> 2000 kg CO2</li>
            </ul>
          </div>
          <button className="updatePhaseData">Update</button>
        </div>
        <div className="CurrentWorkingData">
          <h2>Testing</h2>
          <Graph2 />
        </div>
        <div className="SuggestedTech">
          <div className="suggestedTechEle">
            <div className="containerForTechEle">
              {technologies.map((tech) => (
                <div key={tech.id} className="techEle">
                  <div className="techName">
                    <div className="TecdivName">
                      <a href="#">{tech.name}</a>
                    </div>
                  </div>
                  <div className="descriptionTech">
                    <div className="descriptionTechPart">
                      {tech.description}
                    </div>
                    <div className="buttonSet">
                      <button className="buttonSet_b1">test</button>
                      <button
                        className={tech.buttonName}
                        onClick={() => buttonClickHandle(tech.id)}
                      >
                        {tech.text}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Activity1;
