import React, { useState } from "react";
import "./Activity1.css";
import Graph2 from "./Activity_1_components/Activity_1_graph2"

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
        <div className="activityDescription">info</div>
        <div className="CurrentWorkingData">
          <h2>Testing</h2>
          <Graph2 />
        </div>
        <div className="SuggestedTech">
          {/* <div className="suggestionText">
            <a href="">Insights : </a>
          </div> */}
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
                      <button className="buttonSet_b1">test</button>
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
