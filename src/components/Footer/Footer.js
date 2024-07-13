import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="contact-info">
        <p>Email: harirai4132@gamil.com</p>
        <p>Phone: 799548xx552</p>
      </div>
      <div className="copyright">
        <p>&copy; 2024 PDF Tools. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;