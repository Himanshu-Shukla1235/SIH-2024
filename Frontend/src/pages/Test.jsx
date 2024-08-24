import React from "react";
import "./Testing.css";
import AnimatedCards from "../components/AnimatedCards";

const Testing = () => {
  return (
    <div className="container">
      <div className="text-box">
        <h1 className="heading">Hello, this is testing....</h1>
      </div>
      <div className="animated-cards-box">
        <AnimatedCards />
      </div>
    </div>
  );
};

export default Testing;
