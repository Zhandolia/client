import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoalsInfo.css';

const GoalsInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-header">
        <h1>Your College Goals</h1>
        <p>Help us understand your preferences and goals to provide you with tailored college recommendations.</p>
      </div>
      
      <div className="progress-bar">
        <div className="progress-step">
          <div className="step-circle completed">✓</div>
          <div className="step-label">Basic Info</div>
        </div>
        <div className="progress-step">
          <div className="step-circle completed">✓</div>
          <div className="step-label">Academics</div>
        </div>
        <div className="progress-step">
          <div className="step-circle completed">✓</div>
          <div className="step-label">Activities</div>
        </div>
        <div className="progress-step">
          <div className="step-circle completed">✓</div>
          <div className="step-label">Essays</div>
        </div>
        <div className="progress-step">
          <div className="step-circle active">5</div>
          <div className="step-label active">Goals</div>
        </div>
      </div>
      
      <form className="signup-form">
        <h2 className="form-section-title">Academic Interests</h2>
        
        <div className="section-help">
          Your academic interests help us identify colleges with strong programs in your areas of interest. Select up to three potential majors.
        </div>
        
        <div className="form-group">
          <label htmlFor="intendedMajor1">Intended Major (First Choice) *</label>
          <select id="intendedMajor1" required>
            <option value="">Select a Major</option>
            <option value="computer-science" defaultValue>Computer Science</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="biology">Biology</option>
            <option value="psychology">Psychology</option>
            <option value="economics">Economics</option>
            <option value="english">English</option>
            <option value="political-science">Political Science</option>
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="history">History</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="education">Education</option>
            <option value="nursing">Nursing</option>
            <option value="pre-med">Pre-Med</option>
            <option value="pre-law">Pre-Law</option>
            <option value="communications">Communications</option>
            <option value="undecided">Undecided</option>
          </select>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="intendedMajor2">Second Choice (Optional)</label>
            <select id="intendedMajor2">
              <option value="">Select a Major</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="biology">Biology</option>
              <option value="psychology">Psychology</option>
              <option value="economics" defaultValue>Economics</option>
              <option value="english">English</option>
              <option value="political-science">Political Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="history">History</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="education">Education</option>
              <option value="nursing">Nursing</option>
              <option value="pre-med">Pre-Med</option>
              <option value="pre-law">Pre-Law</option>
              <option value="communications">Communications</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="intendedMajor3">Third Choice (Optional)</label>
            <select id="intendedMajor3">
              <option value="">Select a Major</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="biology">Biology</option>
              <option value="psychology">Psychology</option>
              <option value="economics">Economics</option>
              <option value="english">English</option>
              <option value="political-science">Political Science</option>
              <option value="mathematics" defaultValue>Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="history">History</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="education">Education</option>
              <option value="nursing">Nursing</option>
              <option value="pre-med">Pre-Med</option>
              <option value="pre-law">Pre-Law</option>
              <option value="communications">Communications</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="careerGoals">Career Goals/Field of Interest *</label>
          <textarea id="careerGoals" required defaultValue="I'm interested in pursuing a career in software engineering or data science, with a particular interest in artificial intelligence and machine learning. I'd like to work at a tech company that's focused on developing innovative solutions that have positive social impact."></textarea>
          <div className="word-count">Word count: 42/150</div>
        </div>
        
        <h2 className="form-section-title">College Preferences</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label>College Type (Select all that apply)</label>
            <div className="college-type-grid">
              <div className="college-type-option">
                <input type="checkbox" id="type-public" defaultChecked />
                <label htmlFor="type-public">Public</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-private" defaultChecked />
                <label htmlFor="type-private">Private</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-liberal-arts" />
                <label htmlFor="type-liberal-arts">Liberal Arts</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-research" defaultChecked />
                <label htmlFor="type-research">Research University</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-technical" />
                <label htmlFor="type-technical">Technical Institute</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-hbcu" />
                <label htmlFor="type-hbcu">HBCU</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-religious" />
                <label htmlFor="type-religious">Religious Affiliation</label>
              </div>
              <div className="college-type-option">
                <input type="checkbox" id="type-womens" />
                <label htmlFor="type-womens">Women's College</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>School Size Preference</label>
            <div className="slider-container">
              <input type="range" min="1" max="4" step="1" defaultValue="3" className="range-slider" />
              <div className="slider-labels">
                <span>Small<br />(&lt;2,000)</span>
                <span>Medium<br />(2,000-5,000)</span>
                <span>Large<br />(5,000-15,000)</span>
                <span>Very Large<br />&gt;15,000)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Location Preference</label>
            <div className="option-grid">
              <div className="option-card selected">
                <input type="checkbox" id="location-urban" defaultChecked />
                <label htmlFor="location-urban">
                  <h4>Urban</h4>
                  <p>City environment with lots of activities and resources nearby</p>
                </label>
              </div>
              <div className="option-card">
                <input type="checkbox" id="location-suburban" />
                <label htmlFor="location-suburban">
                  <h4>Suburban</h4>
                  <p>Balanced lifestyle with moderate population density</p>
                </label>
              </div>
              <div className="option-card">
                <input type="checkbox" id="location-rural" />
                <label htmlFor="location-rural">
                  <h4>Rural</h4>
                  <p>Smaller community with a quieter pace</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn-prev" onClick={() => navigate('/signup/essays')}>Back</button>
          <button type="button" className="btn-submit" onClick={() => navigate('/dashboard')}>Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default GoalsInfo;
