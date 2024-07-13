import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">PDF Tools</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Try for Free</button>
      </div>
    </header>
  );
}

export default Header;