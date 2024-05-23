import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const starSize = 2; // Set a constant size for the stars

const HeroSec = () => {
  const [stars, setStars] = useState([]);
  const [starPositions, setStarPositions] = useState([]);

  useEffect(() => {
    const starsCount = 300;
    const { innerHeight, innerWidth } = window;

    const newStars = [];
    for (let i = 0; i < starsCount; i++) {
      const top = Math.random() * innerHeight;
      const left = Math.random() * innerWidth;
      const star = {
        top,
        left,
        transform: `translate(-50%, -50%) rotateZ(${Math.random() * 360}deg)`,
        animationDelay: `${Math.random() * 2}s`,
        brightness: Math.random() * 0.7 + 0.00, // initial brightness
      };
      newStars.push(star);
    }
    setStars(newStars);
    setStarPositions(newStars.map((star) => ({ top: star.top, left: star.left })));
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setStarPositions((prevPositions) =>
      prevPositions.map((star) => {
        const dx = clientX - star.left;
        const dy = clientY - star.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 70) {
          return {
            ...star,
            top: star.top - dy / 20,
            left: star.left - dx / 20,
          };
        } else {
          return star;
        }
      })
    );
  };

  return (
    <div className="hero-section-top" onMouseMove={handleMouseMove}>
      <div className="hero-section">
        {starPositions.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${star.top}px`,
              left: `${star.left}px`,
              transform: stars[index].transform,
              width: `${starSize}px`, // use the constant size
              height: `${starSize}px`, // use the constant size
              animationDelay: stars[index].animationDelay,
              opacity: stars[index].brightness, // use the brightness from the star object
            }}
          />
        ))}
        <div className="overlay"></div>

        <div className="hero-section__content">
            <h3 className="hero-subheading top-text">Hi, I am </h3>
            <h1 className="hero-header">Cameron Jenkins</h1>
            <TypeAnimation
            sequence={[
                'Front-End Developer',
                1000, 
                'Back-end Developer',
                1000,
                'UI/UX Designer',
                1000
            ]}
            wrapper="span"
            speed={50}
            className="bottom-text"
            repeat={Infinity}
            />
        </div>
        <div className="hero-section__scroll" onClick={() => document.getElementById('nextSection').scrollIntoView({ behavior: 'smooth' })}>
            <img src="../images/dropdown.svg" alt="Scroll Down" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;