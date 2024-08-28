import React, { useState } from "react";
import "./slider.css";

import ButtonComponent from "./Button2";
import Button from "./Button1";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import LensIcon from "@mui/icons-material/Lens";
const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  //dots nav
  const goto = (index) => {
    setCurrentIndex(index);
  };
  const dot1 =
  currentIndex === 0 ? (
    <LensIcon sx={{ color: "darkorange",c }} fontSize="small" />
  ) : (
    <PanoramaFishEyeIcon fontSize="small" />
  );

const dot2 =
  currentIndex === 1 ? (
    <LensIcon sx={{ color: "darkorange" }} fontSize="small" />
  ) : (
    <PanoramaFishEyeIcon fontSize="small" />
  );

const dot3 =
  currentIndex === 2 ? (
    <LensIcon sx={{ color: "darkorange" }} fontSize="small" />
  ) : (
    <PanoramaFishEyeIcon fontSize="small" />
  );


 
  return (
    <div className="slideContent">
      <div className="show">
        {slides.length > 0 && (
          <div className="show1">{slides[currentIndex].content}</div>
        )}
      </div>
      <div className="slider-nav">
        <ButtonComponent
          onClick={prevSlide}
          iconDirection="left"
        ></ButtonComponent>
        <ButtonComponent
          onClick={nextSlide}
          iconDirection="right"
        ></ButtonComponent>

        {/* <div>{currentIndex}</div> */}
      </div>
      <div className="navdots">
        {" "}
        <div className="navdot1" style={{cursor:'pointer'}} onClick={() => goto(0)}>
          {dot1}
        </div>
        <div className="navdot1" style={{cursor:'pointer'}} onClick={() => goto(1)}>{dot2}</div>
        <div className="navdot1" style={{cursor:'pointer'}} onClick={() => goto(2)}>{dot3}</div>
      </div>
    </div>
  );
};

export default Slider;
