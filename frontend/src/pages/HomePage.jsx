// import React from 'react';
import HeroSec from "../components/HomePage/HeroSec";
import Navbar from "../components/Navbar";
import CVDownload from "../components/CVDownload";
import Footer from "../components/Footer";
import AboutMe from "../components/HomePage/AboutMe";
import Skill from "../components/HomePage/Skill";
import Projects from "../components/HomePage/ProjectsSec";
import TestimonialSlider from "../components/HomePage/Testimonials";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <div className="fullpage-wrapper">
        <div className={`loading-screen ${loading ? '' : 'slide-down'}`}>
          <TypeAnimation
            cursor={true}
            sequence={['Welcome to my portfolio', 500, 'Loading...', 500]}
            wrapper="h1"
          />
        </div>
        <>
          <Navbar />
          <CVDownload />
          <HeroSec />
          <section id="aboutMe">
            <div id="nextSection">
              <AboutMe />
            </div>
          </section>
          <section id="skills">
            <div id="nextSection">
              <Skill />
            </div>
          </section>
          <section id="project">
            <div id="nextSection">
              <Projects />
            </div>
          </section>
          <TestimonialSlider />
          <Footer />
        </>
      </div>
  );
};

export default HomePage;