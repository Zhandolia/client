import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [languages, setLanguages] = useState([
    { language: "English", proficiency: "Native or bilingual proficiency" }
  ]);
  const [isAddingLanguage, setIsAddingLanguage] = useState(false);
  const [languageForm, setLanguageForm] = useState({ language: "", proficiency: "" });

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

  return (
    <div>
      {/* Phase 1 – Basic Info (Personal Info & Language Proficiency) */}
      <div className="container">
        <div className="signup-header">
          <h1>Create Your Profile</h1>
          <p>
            Tell us about yourself so we can provide personalized college admissions guidance tailored to your unique profile.
          </p>
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
                  {item.language} - {item.proficiency}{" "}
                  <span className="remove" onClick={() => removeLanguage(index)}>×</span>
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

          <div className="form-buttons">
            <button type="button" className="btn-next" onClick={() => navigate('/signup/academics')}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
