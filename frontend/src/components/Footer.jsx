// import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__col col1">
                        <div className="footer__logo">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                <img className="logo" src="images/josmith.png" alt="Jo Smith Logo" style={{ width: '70px', height: 'auto' }}/>
                            </a>
                        </div>
                        <h2 className="footer__newsletter-title">Newsletter</h2>
                        <p className="footer__newsletter-description">Subscribe to our newsletter to get the latest updates</p>
                        <form className="footer__newsletter">
                            <input className="footer__newsletter-input" type="email" placeholder="Enter your email" />
                            <button className="footer__newsletter-button" type="submit">Subscribe</button>
                        </form>
                        <p className="footer__newsletter-disclaimer">By Subscribing, you agree to our <b>Privacy Policy</b> and consent to receive updates from our company</p>
                    </div>
                    <div className="footer__col col2">
                        <h3 className="footer__links-title">Links</h3>
                        <ul className="footer__links-list">
                            <li><Link className="footer__link spec_link" to="/">Home</Link></li>
                            <li><Link className="footer__link spec_link" to="/portfolio">Portfolio</Link></li>
                            <li><Link className="footer__link spec_link" to="/services">Services</Link></li>
                            <li><Link className="footer__link spec_link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="footer__divider"></hr>
                <div className="footer__row">
                    <div className="footer__col col4">
                        <p className="footer__link">Privacy Policy</p>
                        <p className="footer__link">Terms of Service</p>
                        <p className="footer__link">Cookie Settings</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;