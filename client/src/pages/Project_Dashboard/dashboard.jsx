import React from "react";
import { useState } from "react";
import SectionNav from "../../components/ProjectDashBoard/sectionNav";
import Activity1 from "../../components/ProjectDashBoard/Activity1";
import Overall from "../../components/ProjectDashBoard/Overall";
import "./dashboard.css";

let NavSections = [Overall, Activity1];
const Dashboard = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const CurrentComp = NavSections[sectionIndex];

  // Function to change the section index
  const handleSectionChange = (index) => {
    setSectionIndex(index);
  };

  return (
    <React.Fragment>
      <main className="proDashboard">
        <div className="proD_backButton">
          <button>BACK</button>
        </div>
        <div className="proD_section1">
          <SectionNav onSectionChange={handleSectionChange} />
        </div>
        <div className="proD_section2">
          <CurrentComp />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
