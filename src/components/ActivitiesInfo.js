import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ActivitiesInfo.css';

const ActivitiesInfo = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "Robotics Team",
      position: "Team Captain & Lead Programmer",
      type: "Research/Academic",
      participation: "School",
      start: "2022-09",
      end: "2025-05",
      hours: 12,
      weeks: 32,
      description: "Led a team of 12 students in designing, building, and programming a competitive robot. Coordinated technical strategy and implemented vision tracking algorithms that improved autonomous performance by 40%. Mentored 5 new members in programming fundamentals. Placed 2nd at State Championship and qualified for National competition.",
      impact: "State",
      tags: ["STEM", "Leadership", "Teamwork", "Competition", "Technical"]
    },
    {
      id: 2,
      name: "Community Food Bank",
      position: "Volunteer Coordinator",
      type: "Community Service/Volunteer",
      participation: "School",
      start: "2021-06",
      end: "2023-08",
      hours: 8,
      weeks: 20,
      description: "Organized and managed volunteer shifts, coordinated food drives, and improved distribution logistics.",
      impact: "District",
      tags: ["Community", "Leadership"]
    }
  ]);

  const duplicateActivity = (index) => {
    const activityToDuplicate = activities[index];
    const newActivity = { ...activityToDuplicate, id: Date.now() };
    setActivities([...activities, newActivity]);
  };

  const removeActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <div className="signup-header">
          <h1>Extracurricular Activities</h1>
          <p>Share the activities that showcase your interests, leadership, and impact outside the classroom.</p>
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
            <div className="step-circle active">3</div>
            <div className="step-label active">Activities</div>
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
          <h2 className="form-section-title">Your Activities</h2>
          <div className="section-help">
            Our AI will analyze your activities to identify strengths in your profile and suggest ways to enhance your application.
          </div>
          
          {activities.map((activity, index) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-header">
                <div className="activity-number">
                  <span>{index + 1}</span> Activity Information
                </div>
                <div className="activity-actions">
                  <button type="button" className="duplicate-activity" onClick={() => duplicateActivity(index)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M16 8V16M8 16H16H8ZM8 8H16H8ZM8 8V16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Duplicate
                  </button>
                  <button type="button" className="remove-activity" onClick={() => removeActivity(index)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`activityName${activity.id}`}>Activity Name/Organization *</label>
                  <input type="text" id={`activityName${activity.id}`} defaultValue={activity.name} />
                </div>
                <div className="form-group">
                  <label htmlFor={`activityPosition${activity.id}`}>Position/Leadership Role *</label>
                  <input type="text" id={`activityPosition${activity.id}`} defaultValue={activity.position} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`activityType${activity.id}`}>Activity Type *</label>
                  <select id={`activityType${activity.id}`} defaultValue={activity.type}>
                    <option value="">Select Type</option>
                    <option value="academic-team">Academic Club/Team</option>
                    <option value="arts">Arts</option>
                    <option value="athletics">Athletics</option>
                    <option value="career">Career-Oriented</option>
                    <option value="community">Community Service/Volunteer</option>
                    <option value="cultural">Cultural</option>
                    <option value="family">Family Responsibilities</option>
                    <option value="environmental">Environmental</option>
                    <option value="leadership">Student Government/Leadership</option>
                    <option value="research">Research/Academic</option>
                    <option value="stem">STEM</option>
                    <option value="work">Work Experience</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`activityParticipation${activity.id}`}>Participation Level *</label>
                  <select id={`activityParticipation${activity.id}`} defaultValue={activity.participation}>
                    <option value="">Select Level</option>
                    <option value="school">School</option>
                    <option value="district">District/Regional</option>
                    <option value="state">State/Provincial</option>
                    <option value="national">National</option>
                    <option value="international">International</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`activityStart${activity.id}`}>Start Date *</label>
                  <input type="month" id={`activityStart${activity.id}`} defaultValue={activity.start} />
                </div>
                <div className="form-group">
                  <label htmlFor={`activityEnd${activity.id}`}>End Date *</label>
                  <input type="month" id={`activityEnd${activity.id}`} defaultValue={activity.end} />
                </div>
                <div className="form-group">
                  <label htmlFor={`activityTiming${activity.id}`}>When did you participate? *</label>
                  <select id={`activityTiming${activity.id}`} defaultValue={activity.participation}>
                    <option value="">Select Time Period</option>
                    <option value="school">During School Year</option>
                    <option value="summer">Summer Only</option>
                    <option value="both">Year-Round</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor={`activityHours${activity.id}`}>Hours Per Week *</label>
                  <input type="number" id={`activityHours${activity.id}`} min="1" max="40" defaultValue={activity.hours} />
                  <div className="hours-week-visual">
                    <div className="hours-bar">
                      <div className="hours-fill" style={{ width: `${(activity.hours / 40) * 100}%` }}></div>
                    </div>
                    <div className="hours-label">{activity.hours} hrs/week</div>
                  </div>
                </div>
                <div className="form-group half">
                  <label htmlFor={`activityWeeks${activity.id}`}>Weeks Per Year *</label>
                  <input type="number" id={`activityWeeks${activity.id}`} min="1" max="52" defaultValue={activity.weeks} />
                </div>
              </div>
              
              <div className="form-divider"></div>
              
              <div className="form-group">
                <label htmlFor={`activityDescription${activity.id}`}>Description of Activity and Your Contributions *</label>
                <textarea id={`activityDescription${activity.id}`} defaultValue={activity.description}></textarea>
                <div className="word-count">Word count: {activity.description.split(" ").length}/150</div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Recognition Level</label>
                  <div className="impact-rating">
                    <div className="impact-option">
                      <input type="radio" id={`impact${activity.id}-1`} name={`impact${activity.id}`} value="None" />
                      <label htmlFor={`impact${activity.id}-1`}>None</label>
                    </div>
                    <div className="impact-option">
                      <input type="radio" id={`impact${activity.id}-2`} name={`impact${activity.id}`} value="School" />
                      <label htmlFor={`impact${activity.id}-2`}>School</label>
                    </div>
                    <div className="impact-option">
                      <input type="radio" id={`impact${activity.id}-3`} name={`impact${activity.id}`} value="Regional" />
                      <label htmlFor={`impact${activity.id}-3`}>Regional</label>
                    </div>
                    <div className="impact-option">
                      <input type="radio" id={`impact${activity.id}-4`} name={`impact${activity.id}`} value="State" defaultChecked />
                      <label htmlFor={`impact${activity.id}-4`}>State</label>
                    </div>
                    <div className="impact-option">
                      <input type="radio" id={`impact${activity.id}-5`} name={`impact${activity.id}`} value="National" />
                      <label htmlFor={`impact${activity.id}-5`}>National</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Tags (Select all that apply)</label>
                <div className="tag-chips">
                  <div className="tag-chip">STEM <span className="remove">×</span></div>
                  <div className="tag-chip">Leadership <span className="remove">×</span></div>
                  <div className="tag-chip">Teamwork <span className="remove">×</span></div>
                  <div className="tag-chip">Competition <span className="remove">×</span></div>
                  <div className="tag-chip">Technical <span className="remove">×</span></div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="form-buttons">
            <button type="button" className="btn-prev" onClick={() => navigate('/signup/academics')}>Back</button>
            <button type="button" className="btn-next" onClick={() => navigate('/signup/essays')}>Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ActivitiesInfo;
