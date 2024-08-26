import React from 'react';
import Slider from '../../components/HomePage/section1/slider';

const App = () => {
  return (
    <div>
      <Slider>
        <div style={{ backgroundColor: '#8e44ad', height: '300px' }}>
          <h2 style={{ color: '#fff' }}>Slide 1</h2>
        </div>
        <div style={{ backgroundColor: '#3498db', height: '300px' }}>
          <h2 style={{ color: '#fff' }}>Slide 2</h2>
        </div>
        <div style={{ backgroundColor: '#e74c3c', height: '300px' }}>
          <h2 style={{ color: '#fff' }}>Slide 3</h2>
        </div>
      </Slider>
    </div>
  );
};

export default App;
