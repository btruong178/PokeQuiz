import React from 'react';
import { Link, Element } from 'react-scroll';

function SmoothScrollComponent() {
  return (
    <div>
      <nav>
        <Link to="section1" smooth={true} duration={500}>
          Go to Section 1
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          Go to Section 2
        </Link>
      </nav>

      <Element name="section1" className="section">
        <h1>Section 1</h1>
      </Element>

      <Element name="section2" className="section">
        <h1>Section 2</h1>
      </Element>
    </div>
  );
}

export default SmoothScrollComponent;