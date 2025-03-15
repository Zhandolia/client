import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [essay, setEssay] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  // Check for authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');

    // Fetch extracurricular activities
    axios.get('http://localhost:5000/api/extracurricular')
      .then(res => setActivities(res.data.activities))
      .catch(err => console.error(err));
  }, [navigate]);

  const analyzeEssay = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/ai/analyze-essay', { essay });
      setAnalysis(res.data.analysis);
    } catch(err) {
      console.error(err);
      alert('Error analyzing essay.');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      
      <section>
        <h3>Essay Analysis</h3>
        <textarea 
          value={essay} 
          onChange={(e) => setEssay(e.target.value)} 
          rows="10" 
          cols="50" 
          placeholder="Paste your essay here"
        ></textarea>
        <br />
        <button onClick={analyzeEssay}>Analyze Essay</button>
        {analysis && (
          <div>
            <h4>Analysis Result:</h4>
            <p>{analysis}</p>
          </div>
        )}
      </section>
      
      <section>
        <h3>Extracurricular Activities</h3>
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              <a href={activity.link} target="_blank" rel="noopener noreferrer">
                {activity.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
