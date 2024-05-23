// import React from 'react';
import Navbar from "../components/Navbar";
// import HeroSec from "../components/HomePage/HeroSec";

const HomePage = () => {
  return (
    <div className="fullpage-wrapper">
      <div className="section">
          <Navbar />
      </div>
      <div className="section">
        {/* Your second section component */}
      </div>
      <div className="section">
        {/* Your third section component */}
      </div>
      {/* Add more divs as needed */}
    </div>
  );
};

export default HomePage;