
const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Lynnie Maclver",
      company: "Corrective Tree Care, Crawford",
      testimonial:
        "Cameron helped me get my business to a point where I can confidently maintain a quality client base and provide my customers with the best experience while browsing my website.",
      stars: 4,
      source: "Email Review",
      logo: "../images/lynniepfp.jpg", 
      image: "../images/personalicon.svg",
    },
    {
      name: "Kirsty Macdonald",
      company: "Blossom Beauty, Douglas",
      testimonial:
        "I am so happy with the work Cameron has done for me. He has helped me to create a beautiful website that has helped me to grow my business and reach a wider audience. I would highly recommend him to anyone looking for a website designer.",
      stars: 5,
      source: "Email Review",
      logo: "../images/kirstypfp.jpg", 
      image: "../images/personalicon.svg",
    },
    {
      name: "Ruaridh Logan",
      company: "Personal Site",
      testimonial:
        "Cameron helped me to create a personal website that I am so proud of. He was so helpful and professional throughout the whole process and I would highly recommend him to anyone looking for a website designer.",
      stars: 5,
      source: "Google Review",
      logo: "../images/ruaridhpfp.jpg", 
      image: "../images/googleicon.svg",
    },
    {
      name: "Deborah Wilson",
      company: "Old Arms Pub",
      testimonial:
        "After recently purchasing a new pub I was in need of a new website. Cameron was recommended to me by a friend and I am so glad I chose him. He was so helpful and professional throughout the whole process and I am so happy with the website he has created for me.",
      stars: 4,
      source: "Email Review",
      logo: "../images/debpfp.jpg", 
      image: "../images/personalicon.svg",
    },
    {
      name: "Shak Ahmed",
      company: "Empower786, Douglas",
      testimonial:
        "Cameron's designs help me take my business from a start-up to a fully fledged running business with a growing client base and a beautiful website. Thank you!",
      stars: 5,
      source: "Google Reviews",
      logo: "../images/shakpfp.jpg", 
      image: "../images/googleicon.svg",
    },
    {
      name: "Angus Baillie",
      company: "Personal Site",
      testimonial:
        "I have known Cameron a long time and I am so happy with the website he has created for me. He was so helpful and professional throughout the whole process and I would highly recommend him to anyone looking for a website designer.",
      stars: 5,
      source: "Google Reviews",
      logo: "../images/anguspfp.jpg", 
      image: "../images/googleicon.svg",
    },
  ];

  const allTestimonials = [...testimonials, ...testimonials];

  return (
    
    <div className="testimonial-section">
      <div className="slider">
        <div className="slide-track">
          {allTestimonials.map((testimonial, index) => (
            <div className="slide" key={index}>
              <div className="testimonial-header">
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <div className="user-info">
                  <div className="logo">
                    <img src={testimonial.logo} alt={testimonial.name} />
                  </div>
                  <div className="name-info">
                    <p>{testimonial.name}</p>
                    <span className="company">{testimonial.company}</span>
                  </div>
                  <hr></hr>
                  <div className="source">
                    <img src={testimonial.image} alt={testimonial.source} />
                    <p className="source-text">{testimonial.source}</p>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;