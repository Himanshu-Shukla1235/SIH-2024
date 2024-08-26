import React from "react";
import NavBar from "../../components/navBar/navBar";
import "./Home.css";
import ContactButton from "../../components/navBar/contactButton";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="box_1">
        <div className="sec_1">
          <div className="sec11">
            <div className="sec111">text</div>
            <div className="sec112">buttons</div>
          </div>
          <div className="sec12">charts</div>
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
