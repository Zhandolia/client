import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AcademicInfo from './components/AcademicInfo';
import ActivitiesInfo from './components/ActivitiesInfo';
import EssaysInfo from './components/EssaysInfo';
import GoalsInfo from './components/GoalsInfo'; // if available

function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/academics" element={<AcademicInfo />} />
        <Route path="/signup/activities" element={<ActivitiesInfo />} />
        <Route path="/signup/essays" element={<EssaysInfo />} />
        <Route path="/signup/goals" element={<GoalsInfo />} />
      </Routes>
    </div>
  );
}

export default App;
