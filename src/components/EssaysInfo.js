import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EssaysInfo.css';

const EssaysInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-header">
        <h1>Your College Essays</h1>
        <p>Draft and review your essays with AI-powered guidance to strengthen your application narrative.</p>
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
          <div className="step-circle active">4</div>
          <div className="step-label active">Essays</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">5</div>
          <div className="step-label">Goals</div>
        </div>
      </div>
      
      <div className="instructions-box">
        <h3>Essay Guidelines</h3>
        <p>Your essays give admissions officers insights into your personality, values, and writing skills that transcend your grades and test scores. They want to know the real you.</p>
        <ul>
          <li><strong>Be authentic</strong> – Share your genuine voice and perspective</li>
          <li><strong>Be specific</strong> – Use concrete details and examples rather than generalizations</li>
          <li><strong>Show, don't tell</strong> – Use storytelling to demonstrate your qualities</li>
          <li><strong>Focus on growth</strong> – Highlight how your experiences have shaped you</li>
          <li><strong>Proofread carefully</strong> – Ensure your writing is polished and error‑free</li>
        </ul>
      </div>
      
      <form className="signup-form">
        <h2 className="form-section-title">Personal Statement</h2>
        
        <div className="section-help">
          The personal statement is a critical component of your application. Our AI will analyze your draft and provide feedback to help you craft a compelling narrative.
        </div>
        
        {/* Essay Card */}
        <div className="essay-card">
          <div className="essay-header">
            <div>
              <div className="essay-title">Common App Personal Statement</div>
              <div className="essay-subtitle">Required for most colleges (650 word limit)</div>
            </div>
            <div className="essay-pill draft">Draft in Progress</div>
          </div>
          
          <div className="tab-container">
            <div className="tabs">
              <div className="tab active">Prompt</div>
              <div className="tab">Tips</div>
              <div className="tab">Example</div>
            </div>
            
            <div className="tab-content active">
              <p>Choose one of the following prompts for your personal statement:</p>
              <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
                <li>Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.</li>
                <li>The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?</li>
                <li>Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?</li>
                <li>Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?</li>
                <li>Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.</li>
                <li>Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?</li>
                <li>Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.</li>
              </ol>
            </div>
            
            <div className="tab-content">
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Choose a prompt that resonates with you</strong> – Select the one that allows you to tell your most authentic story</li>
                <li><strong>Start early</strong> – Give yourself plenty of time for drafting, feedback, and revision</li>
                <li><strong>Find your angle</strong> – Thousands of students write about similar topics; what makes your perspective unique?</li>
                <li><strong>Be mindful of scope</strong> – Focus on a specific story or experience rather than trying to cover your entire life</li>
                <li><strong>Use the first person</strong> – This is your personal story; embrace your voice</li>
                <li><strong>Avoid clichés</strong> – Challenge yourself to find fresh language and perspectives</li>
                <li><strong>End strong</strong> – Leave readers with insight into how this experience shapes your future</li>
              </ul>
            </div>
            
            <div className="tab-content">
              <div className="essay-example">
                "The rhythmic beeping of hospital monitors had become the soundtrack to my summer. While my friends sent pictures from beach vacations, I sat beside my grandmother's bed, watching nurses adjust her oxygen..."
              </div>
              <div className="analysis-points">
                <div className="analysis-point">
                  <div className="analysis-icon">1</div>
                  <div>This opening immediately establishes a specific setting and situation, drawing the reader in with sensory details.</div>
                </div>
                <div className="analysis-point">
                  <div className="analysis-icon">2</div>
                  <div>The contrast between typical summer activities and the writer's experience creates tension and interest.</div>
                </div>
                <div className="analysis-point">
                  <div className="analysis-icon">3</div>
                  <div>The example avoids clichés and presents a personal circumstance that will likely develop into a story of growth or perspective-shifting.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="commonAppPrompt">Which prompt are you responding to? *</label>
          <select id="commonAppPrompt" required>
            <option value="">Select a prompt</option>
            <option value="1" defaultValue="true">Prompt 1: Background, identity, interest, or talent</option>
            <option value="2">Prompt 2: Lessons from obstacles</option>
            <option value="3">Prompt 3: Questioned or challenged a belief</option>
            <option value="4">Prompt 4: Gratitude</option>
            <option value="5">Prompt 5: Personal growth</option>
            <option value="6">Prompt 6: Engaging topic</option>
            <option value="7">Prompt 7: Topic of choice</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="commonAppEssay">Your Essay *</label>
          <textarea id="commonAppEssay" required>{`For as long as I can remember, Saturdays have been synonymous with flour-dusted kitchen counters and the comforting aroma of my grandmother's pastries. In our household, baking was never just about making desserts—it was our family's language of love and resilience.

My grandmother, a self-taught baker from rural Armenia, arrived in America with little more than her recipes memorized. Unable to speak English, she found her voice through the baklava and gata she masterfully crafted. As a shy child often lost in translation between two cultures, I found that in the kitchen, no words were necessary. The precise folding of phyllo dough became our shared vocabulary.

In middle school, when I was struggling to fit in, I started a small baking business selling my grandmother's recipes at local farmers' markets. The first time I handed over a box of Armenian cookies to a customer, I realized I wasn't just selling pastries—I was sharing my heritage. Each interaction required me to explain the stories behind these traditional desserts, gradually pushing me out of my shell.

By tenth grade, what began as weekend baking sessions had evolved into "Aromatic Heritage," a YouTube channel where my grandmother and I showcase traditional Armenian recipes. With over 15,000 subscribers, we've created a virtual community that spans continents. Every comment from viewers rediscovering their own family traditions reminds me of food's unique power to preserve cultural identity.

Most unexpectedly, baking became my gateway to environmental activism. After researching the significant carbon footprint of commercial pastry production, I transformed our family recipes to prioritize local, seasonal ingredients. Through my channel, I now advocate for sustainable baking practices that honor both tradition and our planet.

Last month, when my grandmother suffered a minor stroke, our roles reversed. Suddenly, I became the one guiding her hands through familiar motions of kneading dough—a therapeutic exercise recommended by her doctors. In those quiet moments, as I helped her regain strength and confidence, I truly understood how our baking tradition had come full circle.

This journey has taught me that preserving heritage isn't about perfectly replicating the past but thoughtfully adapting it for the future. Whether I'm calculating the precise ratio for scaling a recipe or finding sustainable alternatives for ingredients, I've learned that innovation and tradition aren't mutually exclusive—they're interdependent.

As I prepare for college, I carry both my grandmother's resilience and the precision baking has instilled in me. I may not know exactly what the future holds, but I'm confident in my ability to measure, adjust, and create something meaningful from whatever ingredients life provides.`}</textarea>
          <div className="word-count">
            <span>Word count: <span className="word-count-number">419/650</span></span>
            <span>Last saved: 5 minutes ago</span>
          </div>
        </div>
        
        <div className="ai-assistance">
          <div className="ai-assistance-header">
            <div className="ai-icon">AI</div>
            <div className="ai-assistance-title">AI Writing Assistant</div>
          </div>
          <div className="ai-assistance-content">
            Would you like feedback on your essay draft? Our AI can analyze your writing and provide suggestions for improvement.
          </div>
          <div className="ai-assistance-actions">
            <button type="button" className="ai-btn">Check Grammar &amp; Style</button>
            <button type="button" className="ai-btn">Analyze Structure</button>
            <button type="button" className="ai-btn primary">Get Comprehensive Feedback</button>
          </div>
        </div>
        
        <div className="essay-feedback">
          <div className="feedback-header">
            <div className="feedback-score">85</div>
            <div>
              <div className="feedback-title">Strong Draft with Room for Improvement</div>
              <div className="feedback-subtitle">You have a compelling personal story with clear themes</div>
            </div>
          </div>
          
          <div className="feedback-metrics">
            <div className="feedback-metric">
              <div className="metric-label">Authenticity</div>
              <div className="metric-value">
                <div className="metric-fill high"></div>
              </div>
            </div>
            <div className="feedback-metric">
              <div className="metric-label">Clarity</div>
              <div className="metric-value">
                <div className="metric-fill medium"></div>
              </div>
            </div>
            <div className="feedback-metric">
              <div className="metric-label">Engagement</div>
              <div className="metric-value">
                <div className="metric-fill low"></div>
              </div>
            </div>
          </div>
          
          <div className="feedback-suggestions">
            <div className="feedback-suggestion">
              <div className="suggestion-icon">!</div>
              <div>Consider adding more personal anecdotes to deepen the authenticity of your narrative.</div>
            </div>
            <div className="feedback-suggestion">
              <div className="suggestion-icon">i</div>
              <div>Check the structure to ensure a smooth flow of ideas throughout the essay.</div>
            </div>
          </div>
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn-prev" onClick={() => navigate('/signup/activities')}>Back</button>
          <button type="button" className="btn-next" onClick={() => navigate('/signup/goals')}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default EssaysInfo;
