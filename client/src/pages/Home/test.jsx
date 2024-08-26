import React from "react";
import NavBar from "../../components/navBar/navBar";
import "./Home.css";
import ContactButton from "../../components/navBar/contactButton";
import { Button1 } from "../../components/HomePage/";
const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="box_1">
        <div className="sec_1">
          <div className="sec_11">
            <div className="sec_111">
              <h1>CarbonTrack India</h1>
              <h3>Quantify, Analyze,and Neutalize </h3>
              <h3>Your Carbon Footprint</h3>
              <p>
                CarbonTrack India is developed by a team of environmental
                experts, data scientists, and software engineers dedicated to
                supporting India's coal sector in balancing energy needs with
                climate commitments. For the landing page of CarbonTrack India,
                you should focus on concisely.
              </p>
            </div>
            <div className="sec_112">buttons</div>
          </div>
          <div className="sec_12">charts</div>
        </div>
        {/* ___________________________________________section-2_____________________________________________________ */}
        <div className="sec_2"></div>
        <div className="sec_3"></div>
        <div className="sec_4"></div>
      </div>
      <div className="background">
        <div className="filter"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;
