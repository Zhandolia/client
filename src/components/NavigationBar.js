// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link style={{ margin: "0 10px" }} to="/">Home</Link>
      <Link style={{ margin: "0 10px" }} to="/dashboard">Dashboard</Link>
      <Link style={{ margin: "0 10px" }} to="/login">Login</Link>
      <Link style={{ margin: "0 10px" }} to="/signup">Sign Up</Link>
    </nav>
  );
};

export default NavigationBar;
