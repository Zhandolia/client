// src/components/MainMenu.js
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">A</div>
            AdmissionsElevate
          </Link>
          <nav>
            <ul>
              <li><HashLink smooth to="/#features">Features</HashLink></li>
              <li><HashLink smooth to="/#how-it-works">How It Works</HashLink></li>
              <li><HashLink smooth to="/#pricing">Pricing</HashLink></li>
              <li><HashLink smooth to="/#community">Community</HashLink></li>
              <li><HashLink smooth to="/#blog">Resources</HashLink></li>
              <li><HashLink smooth to="/#contact">Contact</HashLink></li>
            </ul>
          </nav>
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-secondary">Log In</Link>
            <Link to="/signup" className="btn">Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
