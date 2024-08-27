import React from 'react';

const Slider = ({ slides }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
