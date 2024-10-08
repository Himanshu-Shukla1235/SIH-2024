import React from "react";
import "./section2.css";
import Graph1 from "./graph1";
import Graph2 from "./graph2";
import { BsArrowUpCircleFill } from "react-icons/bs";
import AchievementCard from "./achivement/Achivements";
const section2 = () => {
  return (
    <div className="section_2">
      <div className="overall_Info">
        <div className="total_info">
          <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
            Rank
            <BsArrowUpCircleFill className="upArrow"/>
          </h3>{" "}
          <h1 style={{ fontFamily: "sans-serif" }}>5</h1>
        </div>
        <div className="total_info">
          <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
            Carbon-Credits
            <BsArrowUpCircleFill className="upArrow"/>
          </h3>
          {""}
          <h1 style={{ fontFamily: "sans-serif" }}>20{` Tonnes`}</h1>
        </div>
        <div className="total_info">
          <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
            Overall-Sink Gap
            <BsArrowUpCircleFill className="upArrow"
            style={{ transform: 'rotate(180deg)',
              color:'red'
             }}/>
          </h3>{" "}
          <h1 style={{ fontFamily: "sans-serif" }}>20{` Tonnes`}</h1>
        </div>
        <div className="total_info">
          <h3 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
            Total Projects
          </h3>{" "}
          <h1 style={{ fontFamily: "sans-serif" }}>10</h1>
        </div>
      </div>
      <div className="charts">
        <div className="section_21">
          <h4 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
            Sinkgap Graph
          </h4>
          <Graph1></Graph1>
        </div>
        <div className="section_22">
          <h4 style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
            Emmision by different types of sources{" "}
          </h4>
          <Graph2></Graph2>
        </div>
      </div>{" "}
      <div className="achivements">
        <div className="achiTag">
          {" "}
          <h1 style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
            Achivements
          </h1>
          <p
            style={{
              fontFamily: "sans-serif",
              fontWeight: "lighter",
              color: "grey",
            }}
          >
            Achievements, whether big or small, play a crucial role in shaping
            our personal and professional identities.
          </p>
        </div>
        <AchievementCard></AchievementCard>
      </div>
    </div>
  );
};

export default section2;
