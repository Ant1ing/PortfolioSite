import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    const handleResize = () => {
      if (window.innerWidth > 800 && (isDropdownOpen || isHamburgerOpen)) {
        setIsDropdownOpen(false);
        setIsHamburgerOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen, isHamburgerOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__links left-aligned">
        <button onClick={() => scrollToSection('reachMe')}>Reach Me</button>
      </div>
      <div className="navbar__logo center-aligned">
        <a href="#">
          <img src="../images/PortfolioLogoLong.png" alt="Logo" />
        </a>
      </div>
      <div className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`} onClick={toggleHamburgerMenu}>
        <div className="hamburger-menu__line clickable-area">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar__links--mobile ${isHamburgerOpen ? 'open' : ''}`} style={{display: isHamburgerOpen ? 'block' : 'none'}}>
        <button onClick={() => scrollToSection('skills')}>Reach Me</button>
        <Link to="/">
            <button className="page-link">Back Home</button>
        </Link>
      </div>
      <div className="navbar__button right-aligned attention-button">
        <Link to="/">
            <button className="attention-button">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
            <span>Back Home</span>
            </button>
        </Link>
    </div>
    </nav>
  );
}

export default Navbar;