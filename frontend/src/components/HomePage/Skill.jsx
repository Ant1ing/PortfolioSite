import { useState, useRef, useEffect } from 'react';

const Skill = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState([false, false, false, false]);
  const dropdownRefs = useRef([]);

  const handleDropdownClick = (index, event) => {
    event.preventDefault();
    let newIsOpen = isOpen.map((open, i) => i === index ? !open : false);
    setIsOpen(newIsOpen);
    setActiveIndex(index === activeIndex ? null : index);

    // Scroll to the clicked dropdown
    if (index !== activeIndex) {
      dropdownRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, isOpen.length);
  }, [isOpen]);

  window.addEventListener('scroll', function() {
    document.querySelectorAll('.section').forEach(function(section) {
      var bounding = section.getBoundingClientRect();
  
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        section.style.opacity = 1 - window.scrollY / (document.body.scrollHeight - window.innerHeight);
      }
    });
  });

  return (
    <div className="skills-section-overall">
      <div className="tag">
        <p className="tagP">SKILLS</p>
      </div>
      <div className="skills-section">
        <h2 className="title">My <span className="header-highlight">Proficiencies</span></h2>
        <div className="dropdowns">
          <details ref={el => dropdownRefs.current[0] = el} open={activeIndex === 0}>
            <summary onClick={(event) => handleDropdownClick(0, event)}>
                <div className="left">
                    <div className="top">
                        <h3>Making Things <span className="header-highlight">Beautiful</span></h3>
                        <img className={isOpen[0] ? "rotate" : ""} src="../images/dropdown.svg" alt="dropdown icon"/>
                    </div>
                    <p className="author">Cameron Jenkins</p>
                </div>
                <div className="bottomText">
                    <div className="tagText">
                        <p>Front-End Development</p>
                    </div>
                </div>
            </summary>
            <div className="dropdown-content">
                <div className="dropdown-left">
                    <p>During my college years, I took the initiative to teach myself the MERN stack as an extracurricular activity, enhancing my front-end development skills.<br></br><br></br>I excel in crafting responsive and visually appealing designs, utilizing modern frameworks to build dynamic and interactive user interfaces.<br></br><br></br>My expertise includes creating seamless user experiences and implementing advanced styling techniques. This solid foundation in front-end development allows me to deliver high-quality, engaging web applications that meet the needs of users and businesses alike.</p>
                </div>

                <div className="dropdown-right">
                <img className="frontend-img" src="../images/frontendicons.svg" />
                </div>
            </div>
        </details>

        <details ref={el => dropdownRefs.current[1] = el} open={activeIndex === 1}>
            <summary onClick={(event) => handleDropdownClick(1, event)}>
                <div className="left">
                    <div className="top">
                        <h3>Dealing With <span className="header-highlight">Data</span></h3>
                        <img className={isOpen[1] ? "rotate" : ""} src="../images/dropdown.svg" alt="dropdown icon"/>
                    </div>
                    <p className="author">Cameron Jenkins</p>
                </div>
                <div className="bottomText">
                    <div className="tagText">
                        <p>Back-End Development</p>
                    </div>
                </div>
            </summary>
            <div className="dropdown-content">
                <div className="dropdown-left">
                    <p>With a strong foundation in back-end development, I have honed my skills through various projects, primarily using PHP and Python.<br></br><br></br>My journey began with PHP, a language that allowed me to understand the intricacies of server-side scripting and database interactions.<br></br><br></br>Over time, I have built and maintained several dynamic and robust applications, showcasing my ability to create seamless user experiences and efficient, scalable systems.<br></br><br></br>My proficiency in back-end development enables me to design and implement secure, high-performance applications that meet the unique needs of each project.</p>
                </div>
                <div className="dropdown-right">
                    <img className="backend-img" src="../images/backendicons.svg" />
                </div>
            </div>
        </details>

        <details ref={el => dropdownRefs.current[2] = el} open={activeIndex === 2}>
            <summary onClick={(event) => handleDropdownClick(2, event)}>
                <div className="left">
                    <div className="top">
                        <h3>Data <span className="header-highlight">Storage</span></h3>
                        <img className={isOpen[2] ? "rotate" : ""} src="../images/dropdown.svg" alt="dropdown icon"/>
                    </div>
                    <p className="author">Cameron Jenkins</p>
                </div>
                <div className="bottomText">
                    <div className="tagText">
                        <p>Database Development</p>
                    </div>
                </div>
            </summary>
            <div className="dropdown-content">
                <div className="dropdown-left">
                    <p>In my journey as a developer, I have cultivated a robust set of skills in database management, working with a variety of database systems to design, implement, and maintain efficient data storage solutions. <br></br><br></br>My experience spans traditional relational databases as well as modern NoSQL databases, allowing me to select and utilize the best tools for each projects unique needs.<br></br><br></br>My experince with AWS is currently limited as this tool was not brought up in college classes or any of my past experience so I am currently teaching myself.</p>
                </div>
                <div className="dropdown-right">
                    <img className="database-img" src="../images/databaseicons.svg" />
                </div>
            </div>
        </details>

        <details ref={el => dropdownRefs.current[3] = el} open={activeIndex === 3}>
            <summary onClick={(event) => handleDropdownClick(3, event)}>
                <div className="left">
                    <div className="top">
                        <h3>An Eye For <span className="header-highlight">Design</span></h3>
                        <img className={isOpen[3] ? "rotate" : ""} src="../images/dropdown.svg" alt="dropdown icon"/>
                    </div>
                    <p className="author">Cameron Jenkins</p>
                </div>
                <div className="bottomText">
                    <div className="tagText">
                        <p>UI/UX Design And Development</p>
                    </div>
                </div>
            </summary>
            <div className="dropdown-content">
                <div className="dropdown-left">
                    <p>UI/UX design is my favorite aspect of development, as it allows me to blend creativity with functionality to create intuitive and engaging user experiences. <br></br><br></br>My passion for design is reflected in every project I undertake, where I strive to create interfaces that are not only visually appealing but also highly usable. <br></br><br></br>I have honed my skills using a variety of industry-standard tools and have a keen eye for detail that ensures a seamless user experience.</p>
                </div>
                <div className="dropdown-right">
                    <img className="ui-ux-img" src="../images/uiicons.svg" />
                </div>
            </div>
        </details>
        </div>
        </div>
    </div>
  );
};

export default Skill;