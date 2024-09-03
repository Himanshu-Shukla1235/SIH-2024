import React from "react";
import "./section1.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FactoryIcon from "@mui/icons-material/Factory";
import ConstructionIcon from "@mui/icons-material/Construction";
const Section1 = () => {
  return (
    <React.Fragment>
      <main className="compSec1Main">
        <div className="mainBox">
          <div className="ProfileVisual">
            <div className="profilePhoto"></div>
            <div className="CompanyName">
              <a href="#">Coal India Limited</a>
            </div>
          </div>

          <div className="ProfileInfo">
            <ul>
              <li>
                <LocationOnIcon fontSize="2.3px" /> <a>Location:</a>{" "}
                <p>Delhi ,India</p>
              </li>
              <li>
                <CalendarMonthIcon fontSize="2.3px"/> <a>Year Established:</a>{" "}
                <p>1993</p>
              </li>
              <li>
                <ConstructionIcon fontSize="2.3px" />
                <a>Type of Mining Operation:</a>
                <p>underground, open-cast, or both.</p>
              </li>
              <li>
                <FactoryIcon fontSize="2.3px" /> <a>Ownership Structure</a>
                <p> Public, private, or government-owned</p>
              </li>
              {/* <li>
                <FactoryIcon fontSize="2.3px" />
                <a></a>{" "}
                <p></p>
              </li> */}
            </ul>
            <button>Update</button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Section1;
