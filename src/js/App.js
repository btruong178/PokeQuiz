// Library imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Component imports
import Homepage from './homepage';
import About from './about';
import { Header } from './header';
import { Footer } from './footer';

function App() {
  return (
    
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
