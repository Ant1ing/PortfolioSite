import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function AboutMe() {
  const [isTextExpanded, setTextExpanded] = useState(false);

  const text = `Hi, I am Cameron. My journey with Web Development started in my childhood, sparking a lifelong passion that guided me through school, where I consistently excelled in computer science. This passion led me to pursue further studies in college, deepening my skills and knowledge. \n\nBeyond coding, I find joy in weight lifting, gaming, and indulging in Star Trek marathons. Each interest reflects a different facet of my personality, from the discipline of fitness to the strategy of gaming and the imaginative worlds of sci-fi. \n\nWelcome to my portfolio. Here, youll find a blend of my technical expertise and personal passions.`;

  const shortText = `${text.slice(0, 100)}...`; // Adjust as needed


  return (
    <div className="split-section">
        <div className="text-side">
            <div className="tag">
                <p className="tagP">ABOUT ME</p>
            </div>
            <h1>Get To Know <span className="header-highlight">Me</span></h1>
            <p className={isTextExpanded ? 'text-expanded' : 'text-collapsed'}>
                {isTextExpanded ? text : shortText}
            </p>
            <button className="textExpander" onClick={() => setTextExpanded(!isTextExpanded)}>
                {isTextExpanded ? 'Show less' : 'Show more'}
            </button>
            <p className="AboutMeText">Hi, I am Cameron. My journey with Web Development started in my childhood, sparking a lifelong passion that guided me through school, where I consistently excelled in computer science. This passion led me to pursue further studies in college, deepening my skills and knowledge.<br></br><br></br>  Beyond coding, I find joy in weight lifting, gaming, and indulging in Star Trek marathons. Each interest reflects a different facet of my personality, from the discipline of fitness to the strategy of gaming and the imaginative worlds of sci-fi.<br></br> <br></br>  Welcome to my portfolio. Here, youll find a blend of my technical expertise and personal passions.</p>
            <hr />
            <div className="bottom-section">
                <div className="social-media">
                    <a href="https://github.com/Ant1ing" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a className="twitter-logo" href="https://x.com/Dev_CamTech" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a className="linkedin-logo" href="https://www.linkedin.com/in/cameron-jenkins-775385250/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
                <div className="navbar__button right-aligned">
                    <button className="read-more">
                    <span>View More</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="image-side">
            <img src="../images/me.svg" alt="About me" />
        </div>
    </div>
  );
}

export default AboutMe;