import React from "react";
import Slider from "../../components/HomePage/section1/slider";

const App = () => {
  const slides = [
    { key: 0, content: <div>Slide 1 content here</div> },
    { key: 1, content: <div>Slide 2 content here</div> },
    { key: 2, content: <div>Slide 3 content here</div> },
    // Add more slides as needed
  ];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default App;
