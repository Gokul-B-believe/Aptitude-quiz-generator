import React from 'react';
import { useQuiz } from '../context/QuizContext';
import './ContentLoader.css';

const ContentLoader = () => {
  const { isLoading, showLoader } = useQuiz();

  if (!isLoading && !showLoader) return null;

  return (
    <div className={`content-loader ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader-container">
        <div className="loader-logo">
          <i className="fas fa-brain"></i>
          <span>QuizMaster</span>
        </div>
        <div className="loader-animation">
          <div className="loader-circle">
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </div>
        </div>
        <div className="loader-text">
          <span className="loading-text">Loading Amazing Quizzes...</span>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLoader;
