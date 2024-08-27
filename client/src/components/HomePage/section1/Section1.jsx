import React from "react";
import './Section1.css';
import Button1 from './Button1'
import Chart1 from './chart'


const Section1 = () => {

  return (
    <React.Fragment className="section">
    
      <div className="sec_11">
        <div className="sec_111">
          <h1>CarbonTrack India</h1>
          <h3>Quantify, Analyze,and Neutalize </h3>
          <h3>Your Carbon Footprint</h3>
          <p>
            CarbonTrack India is developed by a team of environmental experts,
            data scientists, and software engineers dedicated to supporting
            India's coal sector in balancing energy needs with climate
            commitments. For the landing page of CarbonTrack India, you should
            focus on concisely.
          </p>
        </div>
        <div className="sec_112"><button style={{backgroundColor:'#FF8C00',color:'white',fontFamily:'sans-serif'}}>Get Started Now</button> <Button1 text='Learn more'/></div>
      </div>
      <div className="sec_12"><Chart1></Chart1></div>
    </React.Fragment>
  );
};

export default Section1;
