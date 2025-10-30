import React from 'react';
import { useQuiz } from '../context/QuizContext';
import './Footer.css';

const Footer = () => {
  const { startQuiz } = useQuiz();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>QuizMaster</h3>
            <p>Master your aptitude skills with our interactive quiz platform.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#quiz">Quiz</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); startQuiz('mathematical'); }}>Mathematical</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); startQuiz('logical'); }}>Logical</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); startQuiz('verbal'); }}>Verbal</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); startQuiz('spatial'); }}>Spatial</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 QuizMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
