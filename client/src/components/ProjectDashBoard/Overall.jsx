import React, { useState } from "react";
import "./Overall.css";
import Piechart from "./overall_section components/pieChaart";
import SinkGap from "./overall_section components/SinkGap";
import Issues from "./overall_section components/issues";
import Task from "./overall_section components/Task";

const Overall = () => {
  const [index, setIndex] = useState(0);
  const pages = [
    <Task showCompleted={false} />,
    <Task showCompleted={true} />,
    <Issues />,
  ];
  const page = pages[index];

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <React.Fragment>
      <main className="proD_overall_main">
        <div className="proD_overall_sec1">
          <div className="proD_overall_box1">
          <div class="mineSummary">
            <h2>Mine Summary</h2>
            <p style={{marginTop:"1em"}}>
              <strong>Summary:</strong> Chhattisgarh Mine, located in India, is an underground 
              bituminous coal mine with an annual production of 1.2 million tons. The mine 
              uses longwall mining and has significant methane and CO2 emissions. 
            </p>
            <p>
              <strong>Mine Name:</strong> Chhattisgarh Mine
            </p>
            <p>
              <strong>Location:</strong> Chhattisgarh, India
            </p>
            <p>
              <strong>Type:</strong> Underground
            </p>
            <p>
              <strong>Coal Type:</strong> Bituminous
            </p>
            <p>
              <strong>Annual Production:</strong> 1,200,000 tons/year
            </p>
            <p>
              <strong>Mining Method:</strong> Longwall
            </p>
            <p>
              <strong>Equipment:</strong> Excavators, Haul Trucks
            </p>
            <p>
              <strong>Total Electricity:</strong> 15,000,000 kWh/year
            </p>
            <p>
              <strong>Key Emissions:</strong> Methane: 5,000,000 cubic meters/year, CO2: 100,000 tons/year
            </p>
            <p>
              <strong>Reclamation:</strong> Revegetation, Soil stabilization
            </p>
          </div>

          </div>
          <div className="proD_overall_box2">
          <h4 style={{fontFamily:"sans-serif"}}>% of the carbon Emmission from activity</h4>
            <Piechart />
          </div>
          <div className="proD_overall_box3">
          <h4 style={{marginTop:'1em',fontFamily:'sans-serif'}}>Sink-Gap</h4>
            <SinkGap />
          </div>
        </div>

        <div className="proD_overall_sec2">
          <div className="proD_overall_Nav1">
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
