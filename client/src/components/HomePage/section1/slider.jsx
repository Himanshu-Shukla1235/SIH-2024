import React, { useState } from "react";
import "./slider.css";

import ButtonComponent from "./Button2";
import Button from "./Button1";

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

  return (
    <div className="slideContent">
      <div className="show">
        {slides.length > 0 && (
          <div className="show1">{slides[currentIndex].content}</div>
        )}
      </div>
      <div className="slider-nav">
        
        <ButtonComponent onClick={prevSlide} iconDirection="left" ></ButtonComponent>
        <ButtonComponent onClick={nextSlide} iconDirection="right" ></ButtonComponent>

        {/* <div>{currentIndex}</div> */}
      </div>
    </div>
  );
};

export default Slider;
