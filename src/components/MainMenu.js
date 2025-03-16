// src/components/MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-icon">A</div>
          AdmissionsElevate
        </Link>

        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#blog">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="cta-buttons">
          <Link to="/login" className="btn btn-secondary">Log In</Link>
          <Link to="/signup" className="btn">Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
