import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LeftSection.css';

const LeftSection = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/questions'); // Navigate to '/questions' route
  };

  return (
    <div className="left-section">
      <h1 className="section-title">Launch your Data Career in Weeks, not Years</h1>
      <p className="section-description">
        What to expect:
        <br />
        - <strong>Short-answer</strong> questions & <strong>No</strong> cover letter
        <br />
        - Takes 4 mins on average
      </p>
      <button className="start-button" onClick={handleStartJourney}>
        Start Your Journey
      </button>
      <p className="info-text">press Enter</p>
    </div>
  );
};

export default LeftSection;
