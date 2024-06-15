import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="circle bg-purple">
          <div className="inner-circle bg-yellow"></div>
        </div>
        <span className="logo-text">Buildform</span>
      </div>
    </header>
  );
};

export default Header;
