import React from "react";
import "./section2.css";
import Graph1 from "./graph1";
import Graph2 from "./graph2";
const section2 = () => {
  return (
    <div className="section_2"><div className="overallInfo">hello</div>
      <div className="charts">
        <div className="section_21">
          <h4 style={{fontFamily:"sans-serif",fontWeight:"lighter"}}>Sinkgap Graph</h4>
          <Graph1></Graph1>
        </div>
        <div className="section_22">
          <h4 style={{fontFamily:"sans-serif",fontWeight:"lighter"}}>Emmision by different types of sources </h4>
          <Graph2></Graph2>
        </div>
      </div>
      
    </div>
  );
};

export default section2;
