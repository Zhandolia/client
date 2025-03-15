// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  // Existing dynamic arrays:
  const [languages, setLanguages] = useState([{ language: "English", proficiency: "Native or bilingual proficiency" }]);
  const [apIbScores, setApIbScores] = useState([
    { course: "AP Biology", score: "5", year: "2024" },
    { course: "AP Calculus BC", score: "4", year: "2024" }
  ]);
  const [awards, setAwards] = useState([
    { title: "National Merit Finalist", details: "National | 2024" },
    { title: "International Math Olympiad - Honorable Mention", details: "International | 2023" }
  ]);
  const [activities, setActivities] = useState([
    { 
      name: "Debate Team", 
      type: "Academic", 
      position: "Member", 
      org: "School", 
      start: "2022-09", 
      end: "2023-05", 
      hours: "5", 
      weeks: "30", 
      desc: "Actively participated in debates."
    }
  ]);

  // State for inline add forms:
  const [isAddingLanguage, setIsAddingLanguage] = useState(false);
  const [languageForm, setLanguageForm] = useState({ language: "", proficiency: "" });

  const [isAddingApIb, setIsAddingApIb] = useState(false);
  const [apIbForm, setApIbForm] = useState({ course: "", score: "", year: "" });

  const [isAddingAward, setIsAddingAward] = useState(false);
  const [awardForm, setAwardForm] = useState({ title: "", details: "" });

  const [isAddingActivity, setIsAddingActivity] = useState(false);
  const [activityForm, setActivityForm] = useState({
    name: "",
    type: "",
    position: "",
    org: "",
    start: "",
    end: "",
    hours: "",
    weeks: "",
    desc: ""
  });

  // Handlers for Languages
  const handleLanguageChange = (e) => {
    const { name, value } = e.target;
    setLanguageForm({ ...languageForm, [name]: value });
  };
  const saveLanguage = () => {
    if (languageForm.language && languageForm.proficiency) {
      setLanguages([...languages, languageForm]);
      setLanguageForm({ language: "", proficiency: "" });
      setIsAddingLanguage(false);
    }
  };
  const cancelLanguage = () => {
    setLanguageForm({ language: "", proficiency: "" });
    setIsAddingLanguage(false);
  };
  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  // Handlers for AP/IB Scores
  const handleApIbChange = (e) => {
    const { name, value } = e.target;
    setApIbForm({ ...apIbForm, [name]: value });
  };
  const saveApIb = () => {
    if (apIbForm.course && apIbForm.score && apIbForm.year) {
      setApIbScores([...apIbScores, apIbForm]);
      setApIbForm({ course: "", score: "", year: "" });
      setIsAddingApIb(false);
    }
  };
  const cancelApIb = () => {
    setApIbForm({ course: "", score: "", year: "" });
    setIsAddingApIb(false);
  };
  const removeApIbScore = (index) => {
    setApIbScores(apIbScores.filter((_, i) => i !== index));
  };

  // Handlers for Awards
  const handleAwardChange = (e) => {
    const { name, value } = e.target;
    setAwardForm({ ...awardForm, [name]: value });
  };
  const saveAward = () => {
    if (awardForm.title) {
      setAwards([...awards, awardForm]);
      setAwardForm({ title: "", details: "" });
      setIsAddingAward(false);
    }
  };
  const cancelAward = () => {
    setAwardForm({ title: "", details: "" });
    setIsAddingAward(false);
  };
  const removeAward = (index) => {
    setAwards(awards.filter((_, i) => i !== index));
  };

  // Handlers for Extracurricular Activities
  const handleActivityChange = (e) => {
    const { name, value } = e.target;
    setActivityForm({ ...activityForm, [name]: value });
  };
  const saveActivity = () => {
    if (activityForm.name) {
      setActivities([...activities, activityForm]);
      setActivityForm({ name: "", type: "", position: "", org: "", start: "", end: "", hours: "", weeks: "", desc: "" });
      setIsAddingActivity(false);
    }
  };
  const cancelActivity = () => {
    setActivityForm({ name: "", type: "", position: "", org: "", start: "", end: "", hours: "", weeks: "", desc: "" });
    setIsAddingActivity(false);
  };
  const removeActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* No duplicate header; MainMenu is used in App.js */}
      <div className="container">
        <div className="signup-header">
          <h1>Create Your Profile</h1>
          <p>Tell us about yourself so we can provide personalized college admissions guidance tailored to your unique profile.</p>
        </div>
        
        <div className="progress-bar">
          <div className="progress-step">
            <div className="step-circle active">1</div>
            <div className="step-label">Basic Info</div>
          </div>
          <div className="progress-step">
            <div className="step-circle">2</div>
            <div className="step-label">Academics</div>
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
          {/* Personal Information Section */}
          <h2 className="form-section-title">Personal Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dob">Date of Birth *</label>
              <input type="date" id="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender">
                <option value="">Select an option</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Language Proficiency Section */}
          <h2 className="form-section-title">Language Proficiency</h2>
          <div className="form-group">
            <label>Languages Spoken</label>
            <div className="language-container">
              {languages.map((item, index) => (
                <div key={index} className="language-pill">
                  {item.language} - {item.proficiency} <span className="remove" onClick={() => removeLanguage(index)}>×</span>
                </div>
              ))}
            </div>
            {isAddingLanguage ? (
              <div className="inline-form">
                <input
                  type="text"
                  name="language"
                  placeholder="Enter language"
                  value={languageForm.language}
                  onChange={handleLanguageChange}
                />
                <select
                  name="proficiency"
                  value={languageForm.proficiency}
                  onChange={handleLanguageChange}
                >
                  <option value="">Please select</option>
                  <option value="Elementary proficiency">Elementary proficiency</option>
                  <option value="Limited working proficiency">Limited working proficiency</option>
                  <option value="Professional working proficiency">Professional working proficiency</option>
                  <option value="Full professional proficiency">Full professional proficiency</option>
                  <option value="Native or bilingual proficiency">Native or bilingual proficiency</option>
                </select>
                <div className="form-buttons">
                  <button type="button" className="btn-prev" onClick={cancelLanguage}>Cancel</button>
                  <button type="button" className="btn-next" onClick={saveLanguage}>Save Language</button>
                </div>
              </div>
            ) : (
              <button type="button" className="add-language-btn" onClick={() => setIsAddingLanguage(true)}>
                + Add Language
              </button>
            )}
          </div>

          {/* Education Section */}
          <h2 className="form-section-title">Education</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="highSchool">High School Name *</label>
              <input type="text" id="highSchool" required />
            </div>
            <div className="form-group">
              <label htmlFor="hsLocation">High School Location *</label>
              <input type="text" id="hsLocation" placeholder="City, State, Country" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gradYear">Expected Graduation Year *</label>
              <select id="gradYear" required>
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="schoolType">School Type</label>
              <select id="schoolType">
                <option value="">Select Type</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="charter">Charter</option>
                <option value="homeschool">Homeschool</option>
                <option value="international">International</option>
              </select>
            </div>
          </div>

          {/* Academic Performance */}
          <h2 className="form-section-title">Academic Performance</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gpa">Unweighted GPA *</label>
              <input type="number" id="gpa" min="0" max="4.0" step="0.01" placeholder="e.g., 3.75" />
              <span className="form-help">On a 4.0 scale</span>
            </div>
            <div className="form-group">
              <label htmlFor="weightedGpa">Weighted GPA (if applicable)</label>
              <input type="number" id="weightedGpa" min="0" max="5.0" step="0.01" placeholder="e.g., 4.2" />
            </div>
            <div className="form-group">
              <label htmlFor="classRank">Class Rank (if known)</label>
              <input type="text" id="classRank" placeholder="e.g., 5 out of 200" />
            </div>
          </div>

          {/* Standardized Test Scores */}
          <h2 className="form-section-title">Standardized Test Scores</h2>
          <div className="form-group">
            <label>Have you taken any standardized tests?</label>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="satTaken">SAT</label>
                <select id="satTaken">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  <option value="planning">Planning to take</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="actTaken">ACT</label>
                <select id="actTaken">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  <option value="planning">Planning to take</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="apTaken">AP Tests</label>
                <select id="apTaken">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  <option value="planning">Planning to take</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="satTotal">SAT Total Score</label>
              <input type="number" id="satTotal" min="400" max="1600" placeholder="Total Score (400-1600)" />
            </div>
            <div className="form-group quarter">
              <label htmlFor="satMath">Math</label>
              <input type="number" id="satMath" min="200" max="800" placeholder="200-800" />
            </div>
            <div className="form-group quarter">
              <label htmlFor="satEbrw">EBRW</label>
              <input type="number" id="satEbrw" min="200" max="800" placeholder="200-800" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="actComposite">ACT Composite Score</label>
              <input type="number" id="actComposite" min="1" max="36" placeholder="Composite (1-36)" />
            </div>
            <div className="form-group quarter">
              <label htmlFor="actEnglish">English</label>
              <input type="number" id="actEnglish" min="1" max="36" placeholder="1-36" />
            </div>
            <div className="form-group quarter">
              <label htmlFor="actMath">Math</label>
              <input type="number" id="actMath" min="1" max="36" placeholder="1-36" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group quarter">
              <label htmlFor="actReading">Reading</label>
              <input type="number" id="actReading" min="1" max="36" placeholder="1-36" />
            </div>
            <div className="form-group quarter">
              <label htmlFor="actScience">Science</label>
              <input type="number" id="actScience" min="1" max="36" placeholder="1-36" />
            </div>
          </div>

          {/* AP/IB Scores */}
          <h2 className="form-section-title">AP/IB Scores</h2>
          <div className="awards-container">
            {apIbScores.map((item, index) => (
              <div key={index} className="award-item">
                <div className="award-details">
                  <div className="award-name">{item.course}</div>
                  <div className="award-meta">Score: {item.score} | Year: {item.year}</div>
                </div>
                <button type="button" className="remove-award" onClick={() => removeApIbScore(index)}>Remove</button>
              </div>
            ))}
          </div>
          {isAddingApIb ? (
            <div className="inline-form">
              <input
                type="text"
                name="course"
                placeholder="Course Title"
                value={apIbForm.course}
                onChange={handleApIbChange}
              />
              <input
                type="text"
                name="score"
                placeholder="Score"
                value={apIbForm.score}
                onChange={handleApIbChange}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={apIbForm.year}
                onChange={handleApIbChange}
              />
              <div className="form-buttons">
                <button type="button" className="btn-prev" onClick={cancelApIb}>Cancel</button>
                <button type="button" className="btn-next" onClick={saveApIb}>Save Course</button>
              </div>
            </div>
          ) : (
            <button type="button" className="add-activity-btn" onClick={() => setIsAddingApIb(true)}>
              Add AP/IB Course
            </button>
          )}

          {/* Awards & Distinctions */}
          <h2 className="form-section-title">Awards & Distinctions</h2>
          <div className="awards-container">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-details">
                  <div className="award-name">{award.title}</div>
                  <div className="award-meta">{award.details}</div>
                </div>
                <button type="button" className="remove-award" onClick={() => removeAward(index)}>Remove</button>
              </div>
            ))}
          </div>
          {isAddingAward ? (
            <div className="inline-form">
              <input
                type="text"
                name="title"
                placeholder="Award Title"
                value={awardForm.title}
                onChange={handleAwardChange}
              />
              <textarea
                name="details"
                placeholder="Enter details or your story"
                value={awardForm.details}
                onChange={handleAwardChange}
              ></textarea>
              <div className="form-buttons">
                <button type="button" className="btn-prev" onClick={cancelAward}>Cancel</button>
                <button type="button" className="btn-next" onClick={saveAward}>Save Award</button>
              </div>
            </div>
          ) : (
            <button type="button" className="add-activity-btn" onClick={() => setIsAddingAward(true)}>
              Add Award or Distinction
            </button>
          )}

          {/* Extracurricular Activities */}
          <h2 className="form-section-title">Extracurricular Activities</h2>
          <div className="form-hint">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5.5V8.5M8 11V11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Include up to 10 activities that showcase your interests, skills, and leadership.
          </div>
          <div className="activity-card">
            {activities.map((activity, index) => (
              <div key={index}>
                <div className="activity-header">
                  <div className="activity-number">Activity {index + 1}</div>
                  <button type="button" className="remove-activity" onClick={() => removeActivity(index)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 2.5L11.5 11.5M2.5 11.5L11.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Remove
                  </button>
                </div>
                {/* For existing activities, show filled inputs (read-only for now) */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Activity Name *</label>
                    <input type="text" defaultValue={activity.name} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Activity Type *</label>
                    <input type="text" defaultValue={activity.type} readOnly />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Position/Role *</label>
                    <input type="text" defaultValue={activity.position} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Organization</label>
                    <input type="text" defaultValue={activity.org} readOnly />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date *</label>
                    <input type="month" defaultValue={activity.start} readOnly />
                  </div>
                  <div className="form-group">
                    <label>End Date *</label>
                    <input type="month" defaultValue={activity.end} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Hours per Week *</label>
                    <input type="number" defaultValue={activity.hours} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Weeks per Year *</label>
                    <input type="number" defaultValue={activity.weeks} readOnly />
                  </div>
                </div>
                <div className="form-group">
                  <label>Description *</label>
                  <textarea defaultValue={activity.desc} readOnly></textarea>
                  <span className="form-help">150-250 words recommended.</span>
                </div>
              </div>
            ))}
          </div>
          {isAddingActivity ? (
            <div className="inline-form">
              <input
                type="text"
                name="name"
                placeholder="Activity Name"
                value={activityForm.name}
                onChange={handleActivityChange}
              />
              <input
                type="text"
                name="type"
                placeholder="Activity Type"
                value={activityForm.type}
                onChange={handleActivityChange}
              />
              <input
                type="text"
                name="position"
                placeholder="Position/Role"
                value={activityForm.position}
                onChange={handleActivityChange}
              />
              <input
                type="text"
                name="org"
                placeholder="Organization"
                value={activityForm.org}
                onChange={handleActivityChange}
              />
              <input
                type="month"
                name="start"
                placeholder="Start Date"
                value={activityForm.start}
                onChange={handleActivityChange}
              />
              <input
                type="month"
                name="end"
                placeholder="End Date"
                value={activityForm.end}
                onChange={handleActivityChange}
              />
              <input
                type="number"
                name="hours"
                placeholder="Hours per Week"
                value={activityForm.hours}
                onChange={handleActivityChange}
              />
              <input
                type="number"
                name="weeks"
                placeholder="Weeks per Year"
                value={activityForm.weeks}
                onChange={handleActivityChange}
              />
              <textarea
                name="desc"
                placeholder="Description of Activity and Your Contributions"
                value={activityForm.desc}
                onChange={handleActivityChange}
              ></textarea>
              <div className="form-buttons">
                <button type="button" className="btn-prev" onClick={cancelActivity}>Cancel</button>
                <button type="button" className="btn-next" onClick={saveActivity}>Save Activity</button>
              </div>
            </div>
          ) : (
            <button type="button" className="add-activity-btn" onClick={() => setIsAddingActivity(true)}>
              Add Extracurricular Activity
            </button>
          )}

          <div className="form-buttons">
            <button type="button" className="btn-prev">Back</button>
            <button type="button" className="btn-next">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
