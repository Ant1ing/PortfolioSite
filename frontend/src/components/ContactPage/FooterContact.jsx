// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="top-section-footer">
      <div className="logo-section">
        <a href="#">
          <img src="../images/PortfolioLogo.png" alt="Logo" />
        </a>
      </div>

        <div className="links-section">
          <button onClick={() => scrollToSection('reachMe')}>Reach Me</button>
          <Link to="/">
            <button className="page-link">Back Home</button>
          </Link>
        </div>

        <div className="social-media-section">
          <a href="https://github.com/Ant1ing"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://x.com/Dev_CamTech"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.linkedin.com/in/cameron-jenkins-775385250/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      
      <hr />

      <div className="bottom-section">
        <div className="left">
          <p>Cookie Policy</p>
        </div>
        <div className="right">
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;