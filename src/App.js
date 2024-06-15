import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import QuestionPage from './components/QuestionPage/QuestionPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/questions" element={<QuestionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
