import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsButtonOpen(!isButtonOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__links left-aligned">
        <button onClick={() => scrollToSection('aboutMe')}>About Me</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <div className={`projects-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button className={`dropdown-button ${isButtonOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            <img src="../images/dropdown.svg" alt="Dropdown" />
          </button>
          <div className="dropdown-content">
            <Link to="/project1">Jo Smith Photography - Portfolio Piece</Link>
            <Link to="/project2">Empower 786 - Client Work</Link>
            <Link to="/project3">Body Builder Game - Web Game</Link>
            <Link to="/project4">Quantum - UI Design</Link>
            <button onClick={() => scrollToSection('projects')}>View All</button>
          </div>
        </div>
      </div>
      <div className="navbar__logo center-aligned">
        <a href="#">
          <img src="../images/PortfolioLogo.png" alt="Logo" />
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
        <button onClick={() => scrollToSection('aboutMe')}>About Me</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
      <div className="navbar__button right-aligned attention-button">
        <button className="attention-button">
          <span>Contact</span>
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;