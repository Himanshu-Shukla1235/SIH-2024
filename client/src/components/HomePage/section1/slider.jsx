import React, { useState } from "react";
import "./slider.css";
import Button from "./Button1"; // Capitalize 'Button' as it's a React component


const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slideContent">
      <div className="show">
        {slides.length > 0 && (
          <div className="show1">
            {slides[currentIndex].content}
          </div>
        )}
      </div>
      <div className="slider-nav">
      <button onClick={prevSlide}>prev</button>
      <button onClick={nextSlide}>next</button>
        {/* <div>{currentIndex}</div> */}
      </div>
    </div>
  );
};

export default Slider;
