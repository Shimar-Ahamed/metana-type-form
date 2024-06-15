import React from 'react';
import './RightSection.css';
import googleLogo from '../../assets/google.png';
import ibmLogo from '../../assets/IBM.png';
import nikeLogo from '../../assets/Nike.png';
import ebayLogo from '../../assets/ebay.png';

const RightSection = () => {
  return (
    <div className="right-section">
      <p className="section-title">
        <span className="watermark">4.8</span> <span className="highlight">Rated on</span> <br/><span className="highlight">Course Report</span>
      </p>
      <p className="section-description">Our students <span className="bold">used to work at</span></p>
      <div className="logo-container">
        <img src={googleLogo} alt="Google" className="logo" />
        <img src={ibmLogo} alt="IBM" className="logo" />
        <img src={nikeLogo} alt="Nike" className="logo" />
        <img src={ebayLogo} alt="Ebay" className="logo" />
      </div>
    </div>
  );
};

export default RightSection;
