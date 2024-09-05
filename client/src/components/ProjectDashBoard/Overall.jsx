import React from "react";
import { useState } from "react";
import "./Overall.css";
import Piechart from "./overall_section components/pieChaart";
import SinkGap from "./overall_section components/SinkGap";
import Issues from "./overall_section components/issues";
import Task from "./overall_section components/Task";
import CompletedTask from "./overall_section components/completedTask";
const Overall = () => {
  // Initialize state to keep track of the click count
  const [index, setIndex] = useState(0);
  const pages = [
    <Task></Task>,
    <CompletedTask></CompletedTask>,
    <Issues></Issues>,
  ];
  const page = pages[index];
  // Function to handle button click
  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    <React.Fragment>
      <main className="proD_overall_main">
        <div className="proD_overall_sec1">
          {" "}
          <div className="proD_overall_box1">
            <h2>Project Name</h2>
            <p>
              The coal mining project focuses on extracting coal resources
              efficiently and sustainably, employing advanced mining
              technologies to minimize environmental impact. The project aims to
              optimize production while ensuring safety and compliance with
              environmental regulations. By integrating modern equipment and
              monitoring systems, the project strives to reduce emissions,
              improve operational efficiency, and contribute responsibly to the
              energy sector.
            </p>
          </div>
          <div className="proD_overall_box2">
            <Piechart></Piechart>
          </div>
          <div className="proD_overall_box3">
            <SinkGap></SinkGap>
          </div>
        </div>

        <div className="proD_overall_sec2">
          {" "}
          <div className="proD_overall_Nav1">
            {" "}
            
            <button onClick={() => handleClick(0)}>Tasks</button>
            <button onClick={() => handleClick(1)}>Completed Tasks</button>
            <button onClick={() => handleClick(2)}>Issues</button>
          </div>
          <div className="proD_overall_pages">{page}</div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Overall;
