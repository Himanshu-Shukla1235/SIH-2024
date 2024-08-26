import React from "react";
import "./slider.css";

const Slider = ({ slides }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">
        {slides.map((slide) => (
          <div key={slide.key} className="min-w-full">
            {slide.content}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Slider;
