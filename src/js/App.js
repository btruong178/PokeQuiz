import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import About from './about';
import AnimatedComponent from './animatedcomponent';
import SmoothScrollComponent from './smoothscrolling';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/AnimatedComponent" element={<AnimatedComponent />} />
          <Route path="/SmoothScrollComponent" element={<SmoothScrollComponent />} />
      </Routes>
    </>
  );
}

export default App;
