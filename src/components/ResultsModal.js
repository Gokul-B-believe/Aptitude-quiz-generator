import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import './ResultsModal.css';

const ResultsModal = () => {
  const {
    isResultsModalOpen,
    results,
    formatTime,
    closeResults,
    retakeQuiz
  } = useQuiz();

  if (!isResultsModalOpen || !results) return null;

  const getPerformanceFeedback = (score) => {
    if (score >= 90) {
      return {
        title: 'Outstanding Performance!',
        message: 'You have demonstrated exceptional aptitude skills. Keep up the excellent work!'
      };
    } else if (score >= 80) {
      return {
        title: 'Excellent Work!',
        message: 'You have demonstrated strong aptitude skills. Keep practicing to maintain your edge!'
      };
    } else if (score >= 70) {
      return {
        title: 'Good Job!',
        message: 'You have shown solid aptitude skills. Continue practicing to improve further!'
      };
    } else if (score >= 60) {
      return {
        title: 'Not Bad!',
        message: 'You have basic aptitude skills. More practice will help you improve significantly!'
      };
    } else {
      return {
        title: 'Keep Practicing!',
        message: "Don't worry, aptitude skills can be improved with practice. Try again!"
      };
    }
  };

  const feedback = getPerformanceFeedback(results.score);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isResultsModalOpen) return;

      switch (event.key) {
        case 'Escape':
          closeResults();
          break;
        case 'Enter':
          retakeQuiz();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isResultsModalOpen, closeResults, retakeQuiz]);

  return (
    <div className="modal" onClick={closeResults}>
      <div className="modal-content results-content" onClick={(e) => e.stopPropagation()}>
        <div className="results-header">
          <div className="result-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <h2>Quiz Completed!</h2>
        </div>

        <div className="results-stats">
          <div className="stat-item">
            <div className="stat-value">{results.score}%</div>
            <div className="stat-label">Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{results.correctAnswers}/{results.totalQuestions}</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{formatTime(Math.floor(results.timeTaken / 1000))}</div>
            <div className="stat-label">Time</div>
          </div>
        </div>

        <div className="performance-feedback">
          <h3>{feedback.title}</h3>
          <p>{feedback.message}</p>
        </div>

        <div className="results-actions">
          <button className="btn-primary" onClick={retakeQuiz}>
            Retake Quiz
          </button>
          <button className="btn-secondary" onClick={closeResults}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
