import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './QuestionPage.css';

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div className="question-page" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="question-container">
        {submitted ? (
          <>
            <h1>Thank you for applying</h1>
            <p>An admissions team member will contact you shortly.</p>
            <div className="social-media-logos">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <p>
              <button className="typeform-button" onClick={() => window.location.href = "https://www.typeform.com"}>
                Create a Typeform
              </button>
            </p>
            <p>press <strong>Enter ↵</strong></p>
          </>
        ) : (
          <>
            <h1 className="question-title">
              {currentQuestion} <span className="arrow">→</span>
              {currentQuestion === 1 && "Before we start, what is your name?"}
              {currentQuestion === 2 && "What's your email address?"}
              {currentQuestion === 3 && "Which country you are from? 🏡🏡🏡"}
              {currentQuestion === 4 && "What is your phone number?"}
              {currentQuestion === 5 && "What languages and frameworks are you familiar with?"}
              {currentQuestion === 6 && "How would you describe your current level of coding experience?"}
              {currentQuestion === 7 && "What is your current annual compensation? (Optional)"}
              {currentQuestion === 8 && "Certifying Statement *"}
              {currentQuestion === 9 && "LinkedIn URL (optional)"}
            </h1>
            {currentQuestion === 1 && (
              <>
                <div className="form-group">
                  <label>First name:</label>
                  <input type="text" name="firstName" className="input-field" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label>Last name:</label>
                  <input type="text" name="lastName" className="input-field" placeholder="Smith" />
                </div>
              </>
            )}
            {currentQuestion === 2 && (
              <>
                <p>This is how we'll contact you.</p>
                <div className="form-group">
                  <label>Email address:</label>
                  <input type="email" name="email" className="input-field" placeholder="name@example.com" />
                </div>
              </>
            )}
            {currentQuestion === 3 && (
              <>
                <p>Type or select an option</p>
                <div className="form-group">
                  <label>Select country:</label>
                  <input type="text" name="country" className="input-field" placeholder="Country" />
                </div>
              </>
            )}
            {currentQuestion === 4 && (
              <div className="form-group">
                <label>Phone number:</label>
                <input type="tel" name="phoneNumber" className="input-field" placeholder="0551 23 45 67" />
              </div>
            )}
            {currentQuestion === 5 && (
              <>
                <p>Select all the languages you know.</p>
                <div className="form-group">
                 
                  <div className="checkbox-options">
                    <label><input type="checkbox" name="languages" value="JavaScript" /> JavaScript</label>
                    <label><input type="checkbox" name="languages" value="Python" /> Python</label>
                    <label><input type="checkbox" name="languages" value="Solidity" /> Solidity</label>
                    <label><input type="checkbox" name="languages" value="Rust" /> Rust</label>
                    <label><input type="checkbox" name="languages" value="Node.js" /> Node.js</label>
                    <label><input type="checkbox" name="languages" value="TypeScript" /> TypeScript</label>
                    <label><input type="checkbox" name="languages" value="C" /> C</label>
                    <label><input type="checkbox" name="languages" value="C++" /> C++</label>
                    <label><input type="checkbox" name="languages" value="C#" /> C#</label>
                    <label><input type="checkbox" name="languages" value="SQL" /> SQL</label>
                    <label><input type="checkbox" name="languages" value="Assembly Language" /> Assembly Language</label>
                    <label><input type="checkbox" name="languages" value="Haskell" /> Haskell</label>
                    <label><input type="checkbox" name="languages" value="R" /> R</label>
                    <label><input type="checkbox" name="languages" value=".NET" /> .NET</label>
                    <label><input type="checkbox" name="languages" value="Other" /> Other</label>
                  </div>
                </div>
              </>
            )}
            {currentQuestion === 6 && (
              <div className="form-group">
                
                <div className="radio-options">
                  <label><input type="radio" name="experience" value="No experience" /> No experience</label>
                  <label><input type="radio" name="experience" value="Beginner" /> Beginner</label>
                  <label><input type="radio" name="experience" value="Intermediate" /> Intermediate</label>
                  <label><input type="radio" name="experience" value="Advanced" /> Advanced</label>
                  <label><input type="radio" name="experience" value="Professional" /> Professional</label>
                </div>
              </div>
            )}
            {currentQuestion === 7 && (
              <>
                <p>Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</p>
                <div className="form-group">
                  <div className="scrollable-content">
                    <p>+$26,500 Average salary increase Metana Students who provided pre-and post-course salaries.</p>
                  </div>
                  <div className="salary-choices">
                    <label><input type="radio" name="salary" value="<30,000" /> &lt;$30,000</label>
                    <label><input type="radio" name="salary" value="30,000-50,000" /> $30,000 - $50,000</label>
                    <label><input type="radio" name="salary" value="50,000-80,000" /> $50,000 - $80,000</label>
                    <label><input type="radio" name="salary" value="80,000-120,000" /> $80,000 - $120,000</label>
                    <label><input type="radio" name="salary" value="120,000-250,000" /> $120,000 - $250,000</label>
                    <label><input type="radio" name="salary" value=">250,000" /> $250,000 or more</label>
                  </div>
                </div>
              </>
            )}
            {currentQuestion === 8 && (
              <>
                <p>
                   <span className="required"></span>
                </p>
                <p>
                  I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.
                </p>
                <div className="form-group">
                  <label><input type="radio" name="certify" value="accept" /> I accept</label>
                  <label><input type="radio" name="certify" value="dont_accept" /> I don’t accept</label>
                </div>
              </>
            )}
            {currentQuestion === 9 && (
              <>
                <p>Here's a sniper link to make your life easy - <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a> 🚀</p>
                <div className="form-group">
                  
                  <input type="text" name="linkedin" className="input-field" placeholder="LinkedIn URL" />
                </div>
              </>
            )}
            <button className="ok-button" onClick={handleNext}>
              {currentQuestion === 9 ? 'Submit' : 'OK'}
            </button>
            <span>press <strong>Enter ↵</strong></span>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
