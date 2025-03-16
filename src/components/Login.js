// src/components/Login.js
import React, { useState, useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      // Save token and user data using your AuthContext
      login(response.data.user, response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      {/* Removed duplicate header; MainMenu is rendered in App.js */}
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group" style={{ textAlign: 'right' }}>
                <a href="#!" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px' }}>
                  Forgot password?
                </a>
              </div>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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
