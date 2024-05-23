// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="logo-section">
        <img src="path-to-your-logo.png" alt="Logo" />
      </div>

      <div className="links-section">
        <Link to="/home" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* Add more links as needed */}
      </div>

      <div className="social-media-section">
        <a href="your-facebook-url"><img src="facebook-icon.png" alt="Facebook" /></a>
        <a href="your-twitter-url"><img src="twitter-icon.png" alt="Twitter" /></a>
        <a href="your-instagram-url"><img src="instagram-icon.png" alt="Instagram" /></a>
        {/* Add more social media links as needed */}
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