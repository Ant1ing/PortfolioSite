import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://cameronjenkins.co.uk/submit', formState);
      console.log(response.data);
      setIsSubmitted(true);
      setIsAnimating(true);
  
      // Start the slide out animation after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
  
      // Remove the success message from the DOM after the slide out animation has finished
      setTimeout(() => {
        setIsAnimating(false);
      }, 2500);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="contact-page">
      {isAnimating && (
        <div className={`success-message ${isSubmitted ? 'visible' : ''}`}>
          <FontAwesomeIcon icon={faCheckCircle} color="white" />
          <span>Message Sent</span>
        </div>
      )}
      <div className="tag">
        <p className="tagP">CONTACT ME</p>
      </div>
      <div className="contact-form">
        <div className="header">
          <h1>Drop Me A <span className="header-highlight">Message</span></h1>
        </div>
        <div className="infos">
          <div className="Desc">
            <p>Please fill out the form below and I will get back to you as soon as possible.</p>
          </div>
          <div className="form-container">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="input-field">
                <label>Name:</label>
                <input type="text" name="name" value={formState.name} onChange={handleChange} />
              </div>
              <div className="input-field">
                <label>Email:</label>
                <input type="email" name="email" value={formState.email} onChange={handleChange} />
              </div>
              <div className="input-field">
                <label>Message:</label>
                <textarea name="message" value={formState.message} onChange={handleChange} />
              </div>
              <button type="submit" className="read-more">
                <span className="button-text">Submit</span>
                <FontAwesomeIcon  icon={faPaperPlane}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;