import React from "react";
import Slider from "../../components/HomePage/section1/slider";

const App = () => {
  const slides = [
    { key: 0, content: <div className="min-w-full">Slide 1 content here</div> },
    { key: 1, content: <div className="min-w-full">Slide 2 content here</div> },
    { key: 2, content: <div className="min-w-full">Slide 3 content here</div> },
    // Add more slides as needed
  ];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default App;
