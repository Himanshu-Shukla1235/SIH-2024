import React, { useState } from "react";
import "./Activity1.css";
// import Graph1 from "./Activity_1_components/Activity_1_graph1.jsx"
const Activity1 = () => {
  // Initialize state with an array of objects
  const [buttons, setButtons] = useState([
    { id: 1, buttonName: "NormalButton", text: "Add to your Task" },
    { id: 2, buttonName: "NormalButton", text: "Add to your Task" },
    { id: 3, buttonName: "NormalButton", text: "Add to your Task" },
    { id: 4, buttonName: "NormalButton", text: "Add to your Task" },
    { id: 5, buttonName: "NormalButton", text: "Add to your Task" },
  ]);

  const buttonClickHandle = (id) => {
    // Update state for the button with the matching id
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, buttonName: "added", text: "Added!" }
          : button
      )
    );
  };

  return (
    <React.Fragment>
      <main className="ProD_main">
        <div className="activity1_sec1">
          {" "}
          <div className="activityDescription">
            <h2>Activity Name</h2>
            <p>
              The exploration step in coal mining involves identifying and
              evaluating potential coal deposits to determine their viability
              for extraction. This process begins with geological surveys,
              including mapping, sampling, and drilling to gather data on the
              location, quantity, and quality of the coal. Geologists use
              advanced techniques like seismic surveys, core drilling, and
              geophysical logging to gain insights into the underground
              formations.The exploration step in coal mining involves
              identifying and evaluating potential coal deposits to determine
              their viability for extraction. This process begins with
              geological surveys, including mapping, sampling, and drilling to
              gather data on the location, quantity, and quality of the coal.
              Geologists use advanced techniques like seismic surveys, core
              drilling, and geophysical logging to gain insights into the
              underground formations.
            </p>
          </div>
          <div className="activity1_graph1"></div>
          <div className="CurrentWorkingData">current working</div>
        </div>

        <div className="SuggestedTech">
          <div className="suggestionText">
            <a href="">Insights : </a>
          </div>
          <div className="suggestedTechEle">
            <div className="containerForTechEle">
              {buttons.map((button) => (
                <div key={button.id} className="techEle">
                  <div className="techName">
                    <div className="TecdivName">
                      <a href="">Green Tech</a>
                    </div>
                  </div>
                  <div className="descriptionTech">
                    <div className="descriptionTechPart">
                      Description: A JavaScript library for building user
                      interfaces, React allows developers to create single-page
                      applications with a component-based architecture.
                    </div>
                    <div className="buttonSet">
                      <button
                        className={button.buttonName}
                        onClick={() => buttonClickHandle(button.id)}
                      >
                        {button.text}
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
