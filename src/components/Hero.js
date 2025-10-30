import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToQuiz = () => {
    const element = document.getElementById('quiz');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Master Your</span>
            <span className="title-line highlight">Aptitude Skills</span>
          </h1>
          <p className="hero-description">
            Challenge yourself with our interactive aptitude quiz generator. 
            Test your logical reasoning, mathematical abilities, and problem-solving skills.
          </p>
          <button className="cta-button" onClick={scrollToQuiz}>
            <span>Start Quiz</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-visual">
          <div className="quiz-icon-container">
            <div className="quiz-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1"></div>
            <div className="pulse-ring delay-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
