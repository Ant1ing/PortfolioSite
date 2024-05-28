import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser, faPen, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="tag">
        <p className="tagP">PROJECTS</p>
      </div>
      
      <div className="title-sec">
        <h2 className="title">A Glimpse Into My <span className="header-highlight">Projects</span></h2>
      </div>

      <div className="projects">
        <div className="projects-sec">
          <div className="project">
            <div className="project-img">
              <img src='../images/josmith.png' alt='Jo Smith - Portfolio Website' />
            </div>
            <div className="project-info">
              <h2>Jo Smith - <span className="header-highlight">Portfolio Website</span></h2>
              <div className="project-role">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faUser} className="icon" /> Role
                </h3>
                <p>UI/UX Designer, Developer</p>
              </div>
              <div className="project-desc">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faPen} className="icon" /> Description
                </h3>
                <p>This was a college assigned project that took me roughly 2 weeks to design and code. <br></br><br></br> This was my first project where I tried to branch out and was my first submitted piece using the MERN tech stack.<br></br><br></br> Currently this project is simply to demonstrate UI elements, in the future I hope to round out the site with back-end aspects.</p>
              </div>
              <div className="project-date">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Timeline
                </h3>
                <p>Mar 2024 - Apr 2024</p>
              </div>
              <div className="buttons">
                <a href="http://josmith.cameronjenkins.co.uk" className="read-more" target="_blank" rel="noopener noreferrer">
                  <span className="button-text">Open Page</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <img src='../images/empower786.png' alt='Jo Smith - Portfolio Website' />
            </div>
            <div className="project-info">
              <h2>Empower 786 - <span className="header-highlight">Client Work</span></h2>
              <div className="project-role">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faUser} className="icon" /> Role
                </h3>
                <p>UI/UX Designer</p>
              </div>
              <div className="project-desc">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faPen} className="icon" /> Description
                </h3>
                <p>The Empower786 project exemplifies how thoughtful design and robust development can transform a local business`s online presence. <br></br><br></br>By understanding the client`s needs and the market dynamics, I delivered a design that not only looks great but also drives tangible results. <br></br><br></br>This client gave me complete creative freedom to run with whatever I thought would add depth and professionalism to his site and brand identity.<br></br><br></br>The Hope is to have a delivered website for this client by Aug 2024</p>
              </div>
              <div className="project-date">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Timeline
                </h3>
                <p>May 2024 - Aug 2024</p>
              </div>
              <div className="buttons">
                <a href="https://www.figma.com/design/CyiFtOrnFOaGIpZqqrPmbT/Design-Identity?node-id=0-1&t=2RquQ6LR2By0XwX4-1" className="read-more" target="_blank" rel="noopener noreferrer">
                  <span className="button-text">View Designs</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <img src='../images/bodygame.png' alt='Jo Smith - Portfolio Website' />
            </div>
            <div className="project-info">
              <h2>Body Builder Puzzle Adventure - <span className="header-highlight">Web Game</span></h2>
              <div className="project-role">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faUser} className="icon" /> Role
                </h3>
                <p>UI/UX Designer, Developer</p>
              </div>
              <div className="project-desc">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faPen} className="icon" /> Description
                </h3>
                <p>Yet another college assignment, this time the brief was to deliver an informative game to help children learn more about the human body.<br></br><br></br>My inspiration came from the board game `Operation` and through that i wanted a score system to track if the users place the limbs in the correct slots. <br></br><br></br>The UI elements of this site are very minimal as it was purely to demonstrate functionality and promote learning over all else.</p>
              </div>
              <div className="project-date">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Timeline
                </h3>
                <p>Jan 2024 - Feb 2024</p>
              </div>
              <div className="buttons">
                <a href="http://bodygame.cameronjenkins.co.uk" className="read-more" target="_blank" rel="noopener noreferrer">
                  <span className="button-text">Open Page</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <img src='../images/vinylsonline.png' alt='Jo Smith - Portfolio Website' />
            </div>
            <div className="project-info">
              <h2>Vinyls Online - <span className="header-highlight">E-Commerce </span></h2>
              <div className="project-role">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faUser} className="icon" /> Role
                </h3>
                <p>Developer</p>
              </div>
              <div className="project-desc">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faPen} className="icon" /> Description
                </h3>
                <p>This was my attempt to demonstrate my abilities using Back-End languages. <br></br><br></br> The requirements of this project were to create a basic page layout and functionality to imitate an E-commerce website including account management and product management. <br></br><br></br> For this project my language of choice was PHP and maintaining a database via PHPMyAdmin.</p>
              </div>
              <div className="project-date">
                <h3 className="header-highlight">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Timeline
                </h3>
                <p>Feb 2024 - Mar 2024</p>
              </div>
              <div className="buttons">
                <a href="http://vinylsonline.cameronjenkins.co.uk" className="read-more" target="_blank" rel="noopener noreferrer">
                  <span className="button-text">Open Page</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;