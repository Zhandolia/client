// src/components/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      {/* Removed duplicate header; MainMenu is rendered in App.js */}
      {/* Login Form */}
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Log in to continue your college application journey</p>
          </div>
          <div className="auth-form">
            <div className="social-login">
              <button className="social-btn">
                <span className="social-icon">G</span>
                Continue with Google
              </button>
              <button className="social-btn">
                <span className="social-icon">f</span>
                Continue with Facebook
              </button>
            </div>
            <div className="auth-divider">
              <span>OR</span>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Enter your password" required />
              </div>
              <div className="form-group" style={{ textAlign: 'right' }}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px' }}>Forgot password?</a>
              </div>
              <button type="submit" className="btn">Log In</button>
            </form>
            <div className="auth-footer">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
