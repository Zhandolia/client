// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Empower Your College Journey</h1>
          <p>
            AI-powered guidance to navigate the college admissions process with confidence. 
            From profile analysis to personalized roadmaps, we're with you every step of the way.
          </p>
          <div className="hero-cta">
            <a href="#" className="btn">Get Started</a>
            <a href="#demo" className="btn btn-secondary">Watch Demo</a>
          </div>
          <div className="hero-image">
            [Hero Animation: Students on journey with AI guidance elements]
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <h2>Personalized Guidance at Your Fingertips</h2>
            <p>
              Our AI-powered platform analyzes your unique profile to provide tailored recommendations 
              that maximize your chances of admission.
            </p>
          </div>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Profile Analysis</h3>
              <p>
                Get a comprehensive assessment of your academic profile, extracurriculars, and achievements 
                benchmarked against historical admission data.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Personalized Roadmap</h3>
              <p>
                Receive a customized step-by-step plan that guides you through the entire application process 
                with timelines and milestones.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✏️</div>
              <h3>Essay Assistance</h3>
              <p>
                Our AI provides real-time feedback on your essays and personal statements, helping you craft 
                compelling narratives.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Activity Recommendations</h3>
              <p>
                Discover extracurricular activities that align with your interests and strengthen your application 
                based on your target schools.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎤</div>
              <h3>Interview Simulation</h3>
              <p>
                Practice with our AI-powered interview simulator that provides feedback to help you improve your 
                communication skills.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Scholarship Guidance</h3>
              <p>
                Find scholarship opportunities matched to your profile and get assistance with applications 
                to maximize financial aid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How AdmissionsElevate Works</h2>
            <p>
              Our streamlined process helps you navigate the complex college application journey with confidence and clarity.
            </p>
          </div>
          <div className="step-cards">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>
                Enter your academic information, test scores, activities, and college preferences to build your comprehensive profile.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Get Your Analysis</h3>
              <p>
                Our AI analyzes your profile against admission data to provide insights on strengths, improvement areas, and college matches.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Follow Your Roadmap</h3>
              <p>
                Access your personalized timeline with actionable steps, deadlines, and resources for each stage of the application process.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Improve & Submit</h3>
              <p>
                Use our tools to refine essays, practice interviews, and enhance your application before submitting to your target schools.
              </p>
            </div>
          </div>
          <div id="demo" className="demo-section">
            <div className="demo-video">
              [Interactive Demo Video]
            </div>
            <div className="demo-content">
              <h3>See AdmissionsElevate in Action</h3>
              <p>
                Watch how our platform guides students through each step of the college application process, from profile creation to acceptance letter.
              </p>
              <p>
                Our interactive tools provide real-time feedback and data-driven insights to help you make informed decisions about your academic future.
              </p>
              <a href="#" className="btn">Try it Yourself</a>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard">
        <div className="container">
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Your Personalized Dashboard</h2>
              <p>
                Track your progress, manage tasks, and visualize your journey with our intuitive dashboard.
              </p>
            </div>
            <div className="dashboard-preview">
              [Dashboard Preview: Progress trackers, task manager, analytics visuals]
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community">
        <div className="container">
          <div className="section-header">
            <h2>Join Our Community</h2>
            <p>
              Connect with peers, mentors, and college admission experts to enhance your application journey.
            </p>
          </div>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-card-icon">👥</div>
              <h3>Peer Network</h3>
              <p>
                Connect with students who share your aspirations and learn from those who have successfully navigated the admissions process.
              </p>
              <a href="#" className="btn btn-secondary">Join Discussions</a>
            </div>
            <div className="community-card">
              <div className="community-card-icon">🎓</div>
              <h3>Expert Mentorship</h3>
              <p>
                Access one-on-one guidance from college admissions experts, counselors, and current students at your target schools.
              </p>
              <a href="#" className="btn btn-secondary">Meet Mentors</a>
            </div>
            <div className="community-card">
              <div className="community-card-icon">🏆</div>
              <h3>Success Stories</h3>
              <p>
                Read inspiring stories from students who used AdmissionsElevate to achieve their college dreams and learn from their experiences.
              </p>
              <a href="#" className="btn btn-secondary">Read Stories</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Simple, Transparent Pricing</h2>
            <p>
              Choose the plan that fits your needs and start your journey toward college success.
            </p>
          </div>
          <div className="pricing-plans">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">Free</div>
              <ul className="pricing-features">
                <li>✓ Basic Profile Analysis</li>
                <li>✓ College Matching</li>
                <li>✓ Application Checklist</li>
                <li>✓ Community Access</li>
                <li>✗ Essay Feedback</li>
                <li>✗ Interview Preparation</li>
                <li>✗ Personalized Roadmap</li>
              </ul>
              <a href="#" className="btn btn-secondary">Sign Up Free</a>
            </div>
            <div className="pricing-card featured">
              <h3>Premium</h3>
              <div className="price">$29<span>/month</span></div>
              <ul className="pricing-features">
                <li>✓ Advanced Profile Analysis</li>
                <li>✓ Comprehensive College Matching</li>
                <li>✓ Detailed Application Roadmap</li>
                <li>✓ Community Access</li>
                <li>✓ Essay Feedback & Analysis</li>
                <li>✓ Interview Preparation</li>
                <li>✓ Personalized Activity Recommendations</li>
              </ul>
              <a href="#" className="btn">Get Started</a>
            </div>
            <div className="pricing-card">
              <h3>Ultimate</h3>
              <div className="price">$79<span>/month</span></div>
              <ul className="pricing-features">
                <li>✓ Everything in Premium</li>
                <li>✓ 1-on-1 Expert Consultations</li>
                <li>✓ Priority Essay Review</li>
                <li>✓ Advanced Interview Training</li>
                <li>✓ Scholarship Application Support</li>
                <li>✓ Parent/Guardian Dashboard</li>
                <li>✓ Direct Messaging with Experts</li>
              </ul>
              <a href="#" className="btn">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Resources & Insights</h2>
            <p>
              Stay informed with the latest trends, tips, and strategies in college admissions.
            </p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">[Blog Image: Essay Writing Tips]</div>
              <div className="blog-content">
                <div className="blog-meta">March 10, 2025 • Admissions Tips</div>
                <h3>5 Common Mistakes to Avoid in Your College Essay</h3>
                <p className="blog-excerpt">
                  Learn how to craft compelling personal statements that capture admissions officers' attention...
                </p>
                <a href="#" className="btn btn-secondary">Read More</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">[Blog Image: Interview Preparation]</div>
              <div className="blog-content">
                <div className="blog-meta">March 5, 2025 • Interview Tips</div>
                <h3>Mastering the College Interview: A Comprehensive Guide</h3>
                <p className="blog-excerpt">
                  Prepare for your interviews with confidence using these expert strategies and techniques...
                </p>
                <a href="#" className="btn btn-secondary">Read More</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">[Blog Image: Financial Aid]</div>
              <div className="blog-content">
                <div className="blog-meta">March 1, 2025 • Financial Aid</div>
                <h3>Maximizing Your Scholarship Opportunities</h3>
                <p className="blog-excerpt">
                  Discover strategies to secure scholarships and financial aid for your college education...
                </p>
                <a href="#" className="btn btn-secondary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">AdmissionsElevate</div>
              <div className="footer-description">
                Empowering students with AI-driven insights for their college journey.
              </div>
              <div className="social-icons">
                <a href="#" className="social-icon">F</a>
                <a href="#" className="social-icon">T</a>
                <a href="#" className="social-icon">I</a>
              </div>
            </div>
            <div>
              <div className="footer-heading">Product</div>
              <ul className="footer-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Demo</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Company</div>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Support</div>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="footer-bottom">
            &copy; 2025 AdmissionsElevate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
