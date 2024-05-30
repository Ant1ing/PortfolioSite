import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // import useLocation
import Navbar from "../components/ContactPage/NavbarContact";
import CVDownload from "../components/CVDownload";
import Footer from "../components/ContactPage/FooterContact";
import HeroSec from "../components/ContactPage/HeroSecContact";
import { TypeAnimation } from 'react-type-animation';
import ContactForm from '../components/ContactPage/ContactForm';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [firstVisit, setFirstVisit] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const navigatingBackFromContactPage = location.state?.fromContactPage;
  
    console.log('visitedBefore before:', sessionStorage.getItem('visitedBefore')); // log visitedBefore before setting it
  
    if (sessionStorage.getItem('visitedBefore') !== 'true' || navigatingBackFromContactPage) {
      setFirstVisit(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('visitedBefore', 'true'); // set visitedBefore to true after the long loading screen has been displayed
        console.log('visitedBefore after:', sessionStorage.getItem('visitedBefore')); // log visitedBefore after setting it
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setFirstVisit(false);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="fullpage-wrapper">
      <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
        {firstVisit ? (
          <TypeAnimation
            cursor={true}
            sequence={['Welcome to my portfolio', 500, 'Loading...', 500]}
            wrapper="h1"
          />
        ) : (
          <img src="../images/PortfolioLogo.svg" alt="Logo" />
        )}
      </div>
      <>
        <Navbar />
        <HeroSec />
        <section id="reachMe">
          <div id="nextSection">
            <ContactForm />
          </div>
        </section>
        <CVDownload />
        <Footer />
      </>
    </div>
  );
};

export default Contact;