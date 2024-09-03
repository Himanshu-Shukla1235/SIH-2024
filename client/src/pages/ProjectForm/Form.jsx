import React, { useState, useEffect } from "react";
import MineIdentification from "../../components/projectForm/mineIdentification/MineIdentification";
import OperationalDetails from "../../components/projectForm/operationalDetails/OperationalDetails";
import EquipmentInventory from "../../components/projectForm/equipmentInventory/EquipmentInventory";
import EnergyConsumption from "../../components/projectForm/energyConsumption/EnergyConsumption";
import ProcessSpecificEmissions from "../../components/projectForm/processSpecificEmissions/ProcessSpecificEmissions";
import Transportation from "../../components/projectForm/transportation/Transportation";
import WasteManagement from "../../components/projectForm/wasteManagement/WasteManagement";
import WaterManagement from "../../components/projectForm/waterManagement/WaterManagement";
import LandReclamation from "../../components/projectForm/landReclamation/LandReclamation";
import CommunityImpact from "../../components/projectForm/communityImpact/CommunityImpact";
import CarbonManagement from "../../components/projectForm/carbonManagement/CarbonManagement";
import RegulatoryCompliance from "../../components/projectForm/regulatoryCompliance/RegulatoryCompliance";
import NavBar from "../../components/navBar/NavBar"; // Ensure this path is correct
import "./Form.css";

// Array of all form components with titles for tooltips
const formComponents = [
  { component: <MineIdentification />, title: "Mine Identification" },
  { component: <OperationalDetails />, title: "Operational Details" },
  { component: <EquipmentInventory />, title: "Equipment Inventory" },
  { component: <EnergyConsumption />, title: "Energy Consumption" },
  {
    component: <ProcessSpecificEmissions />,
    title: "Process-Specific Emissions",
  },
  { component: <Transportation />, title: "Transportation" },
  { component: <WasteManagement />, title: "Waste Management" },
  { component: <WaterManagement />, title: "Water Management" },
  { component: <LandReclamation />, title: "Land Reclamation" },
  { component: <CommunityImpact />, title: "Community Impact" },
  { component: <CarbonManagement />, title: "Carbon Management" },
  { component: <RegulatoryCompliance />, title: "Regulatory Compliance" },
];

function Form() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const nextStep = () => {
    if (currentStep < formComponents.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const jumpToStep = (step) => {
    if (step >= 0 && step < formComponents.length) {
      setCurrentStep(step);
    }
  };

  return (
    <>
      <div
        className={`navComponent ${
          showNavBar ? "navComponentShow" : "navComponentHide"
        }`}
      >
        <NavBar />
      </div>
      <div className="form-container">
        <h1 className="form-title">Mine Data Entry Form</h1>
        <div className="form-content">
          {formComponents[currentStep].component}
          
          <div className="step-indicators">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="nav-button"
            >
              Prev
            </button>
            {formComponents.map((step, index) => (
              <button
                type="button"
                key={index}
                onClick={() => jumpToStep(index)}
                className={`step-button ${
                  currentStep === index ? "active" : ""
                }`}
                title={step.title}
              >
                {index + 1}
              </button>
            ))}
            <div className="step-buttons">
              {currentStep < formComponents.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={currentStep === formComponents.length - 1}
                  className="nav-button"
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="nav-button">
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
