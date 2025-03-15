import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected routes example */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<div>Dashboard (Protected)</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
