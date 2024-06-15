import React from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import './MainContent.css'; // Create a new file for MainContent specific styles

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <RightSection />
        <LeftSection />
      </div>
    </main>
  );
};

export default MainContent;
