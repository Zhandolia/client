// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');

  return token ? (
    <Outlet />
  ) : (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Feature Restricted</h2>
      <p>You must be signed in to access this feature.</p>
      <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default ProtectedRoute;
