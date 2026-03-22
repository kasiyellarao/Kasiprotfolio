import React from 'react';
import './WhatWeDo.css';
import teamImage from '../../assets/team.jpg'; // replace with your actual image path
import visionIcon from '../../assets/vision.png'; // replace with your icon paths
import goalIcon from '../../assets/goal.png';

const WhatWeDo = () => {
  return (
    <section className="whatwedo-section">
      <div className="container">
        <div className="image-container">
          <img src={teamImage} alt="Team working" />
        </div>
        <div className="content-container">
          <p className="subtitle">What We Do</p>
          <h2 className="title">We Develop Product That People Love to Use.</h2>
          <p className="description">
             NEXFROX Tech, led by Mr Akshay Kumar, excels in creating user-friendly websites and innovative cybersecurity solutions. Our flagship product, PhishShield, uses advanced machine learning to protect against phishing attacks. We are dedicated to education, offering internships and online learning to nurture future tech leaders.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <img src={visionIcon} alt="Vision" />
              <div>
                <p className="info-title">Our Vision</p>
                <p className="info-text">To be the global leader in cybersecurity and technological innovation, creating a safer digital world for everyone.</p>
              </div>
            </div>
            <div className="info-card">
              <img src={goalIcon} alt="Goal" />
              <div>
                <p className="info-title">Our Goal</p>
                <p className="info-text">To provide cutting-edge technological solutions while fostering education and innovation in the tech community.</p>
              </div>
            </div>
          </div>

          <button className="view-more-btn">View More</button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
