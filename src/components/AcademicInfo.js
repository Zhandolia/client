// src/components/AcademicInfo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AcademicInfo.css';

const AcademicInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-header">
        <h1>Academic Information</h1>
        <p>Let's dive deeper into your academic background to provide personalized college recommendations.</p>
      </div>
      
      <div className="progress-bar">
        <div className="progress-step">
          <div className="step-circle completed">✓</div>
          <div className="step-label">Basic Info</div>
        </div>
        <div className="progress-step">
          <div className="step-circle active">2</div>
          <div className="step-label active">Academics</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">3</div>
          <div className="step-label">Activities</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">4</div>
          <div className="step-label">Essays</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">5</div>
          <div className="step-label">Goals</div>
        </div>
      </div>
      
      <form className="signup-form">
        {/* Transcript Information Section */}
        <h2 className="form-section-title">Transcript Information</h2>
        <div className="section-help">
          Your course selection and performance are significant factors in college admissions. Please be as accurate as possible when entering this information.
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gradeSystem">Grading System *</label>
            <select id="gradeSystem" required>
              <option value="">Select Grading System</option>
              <option value="4.0" defaultValue="true">4.0 Scale (A, B, C, D, F)</option>
              <option value="100">100-Point Scale (100, 90, 80, etc.)</option>
              <option value="ib">International Baccalaureate (7, 6, 5, etc.)</option>
              <option value="uk">UK System (A*, A, B, C, etc.)</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weightedScale">Weighted Scale Maximum *</label>
            <select id="weightedScale" required>
              <option value="">Select Maximum</option>
              <option value="4.0">4.0 (No weighting)</option>
              <option value="4.5">4.5</option>
              <option value="5.0" defaultValue="true">5.0</option>
              <option value="6.0">6.0</option>
              <option value="other">Other</option>
            </select>
            <span className="form-help">The maximum GPA possible at your school with weighted courses</span>
          </div>
        </div>
        
        <div className="grade-scale">
          <div className="grade-item"><span>A:</span> 90-100%</div>
          <div className="grade-item"><span>B:</span> 80-89%</div>
          <div className="grade-item"><span>C:</span> 70-79%</div>
          <div className="grade-item"><span>D:</span> 60-69%</div>
          <div className="grade-item"><span>F:</span> Below 60%</div>
          <div className="grade-item"><span>Weighted:</span> +1.0 for AP/IB</div>
          <div className="grade-item"><span>Weighted:</span> +0.5 for Honors</div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cumUnweightedGPA">Cumulative Unweighted GPA *</label>
            <input type="number" id="cumUnweightedGPA" step="0.01" min="0" max="4.0" defaultValue="3.85" required />
            <span className="form-help">On a 4.0 scale</span>
          </div>
          <div className="form-group">
            <label htmlFor="cumWeightedGPA">Cumulative Weighted GPA *</label>
            <input type="number" id="cumWeightedGPA" step="0.01" min="0" max="5.0" defaultValue="4.35" required />
            <span className="form-help">On your school's weighted scale</span>
          </div>
        </div>
        
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
          <span className="toggle-label">My school calculates weighted GPAs</span>
        </div>
        
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
          <span className="toggle-label">Include class rank in my profile</span>
        </div>
        
        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="classRank">Class Rank (if available)</label>
            <input type="text" id="classRank" placeholder="e.g., 5" defaultValue="8" />
          </div>
          <div className="form-group half">
            <label htmlFor="classSize">Out of (class size)</label>
            <input type="number" id="classSize" placeholder="e.g., 300" defaultValue="245" />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rankPercent">Class Rank Percentile</label>
            <input type="text" id="rankPercent" placeholder="e.g., Top 10%" defaultValue="Top 3%" readOnly />
            <span className="form-help">Automatically calculated based on your rank and class size</span>
          </div>
        </div>
        
        {/* Course Information Section */}
        <h2 className="form-section-title">Course Information</h2>
        <div className="form-hint">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 5.5V8.5M8 11V11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Please enter all courses you've taken in high school and those you plan to take senior year. Colleges want to see the rigor of your curriculum.
        </div>
        
        <h3 className="form-section-subtitle">Freshman Year (9th Grade)</h3>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th width="35%">Course Name</th>
                <th width="20%">Course Level</th>
                <th width="15%">Fall Grade</th>
                <th width="15%">Spring Grade</th>
                <th width="15%">Final Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" defaultValue="English 9" />
                </td>
                <td>
                  <select defaultValue="honors">
                    <option value="regular">Regular</option>
                    <option value="honors">Honors</option>
                    <option value="ap">AP</option>
                    <option value="ib">IB</option>
                    <option value="dual">Dual Enrollment</option>
                  </select>
                </td>
                <td>
                  <select defaultValue="A">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                    <option value="na">N/A</option>
                  </select>
                </td>
                <td>
                  <select defaultValue="A">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                    <option value="na">N/A</option>
                  </select>
                </td>
                <td>
                  <select defaultValue="A">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                    <option value="na">N/A</option>
                  </select>
                </td>
              </tr>
              {/* Additional rows can be added as needed */}
            </tbody>
          </table>
        </div>
        
        <div className="form-buttons">
            <button type="button" className="btn-prev" onClick={() => navigate('/signup')}>Back</button>
            <button type="button" className="btn-next" onClick={() => navigate('/signup/activities')}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default AcademicInfo;
