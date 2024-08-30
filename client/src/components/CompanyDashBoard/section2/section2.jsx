import React from "react";
import "./section2.css";
import Graph1  from './graph1'
import Graph2  from './graph2'
const section2 = () => {
  return (
    <div className="section_2">
      <div className="section_21"><h4>Sinkgap Graph</h4><Graph1></Graph1></div>
      <div className="section_22"><h4>Emmision by different types of sources </h4><Graph2></Graph2></div>
    </div>
  );
};

export default section2;
