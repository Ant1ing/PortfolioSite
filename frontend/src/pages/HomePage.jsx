// import React from 'react';
import HeroSec from "../components/HomePage/HeroSec";
import Navbar from "../components/Navbar";
import CVDownload from "../components/CVDownload";
import Footer from "../components/Footer";
import AboutMe from "../components/HomePage/AboutMe";

const HomePage = () => {
  return (
    <div className="fullpage-wrapper">
      <Navbar />
      <CVDownload />
      <HeroSec />
      <section id="aboutMe">
        <div id="nextSection">
          <AboutMe />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;