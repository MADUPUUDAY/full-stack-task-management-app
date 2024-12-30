import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section aishaala">
        <h2>Task Tracker</h2>
        <p><Link to="/aboutus" className='links'>About Us</Link></p>
      </div>
      <div className="footer-section office">
        <h2>Office</h2>
        <p>Head Office</p>
        <p>804, 5th Cross, 4th Block</p>
        <p> Hyderabad</p>
        <p>madupuudaykumar951.com</p>
        
      </div>

      <div className="footer-section quick-links">
        <h2>Quick Links</h2>
        <p>Blog</p>
        <p>Careers</p>
      </div>

      <div className="footer-section legal-stuff">
        <h2>Legal Stuff</h2>
        <p><Link to="/privacypolicy" className='links'>Privacy Policy</Link></p>
        <p><Link to="/termsandservices" className='links'>Terms and Services</Link></p>
        
        <p><Link to="/admin" className='links'>Admin</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
