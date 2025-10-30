import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import './QuizModal.css';

const QuizModal = () => {
  const {
    isQuizModalOpen,
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    timeLeft,
    formatTime,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    closeQuiz
  } = useQuiz();

  if (!isQuizModalOpen || !currentQuiz) return null;

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isQuizModalOpen) return;

      switch (event.key) {
        case 'ArrowLeft':
          if (currentQuestionIndex > 0) {
            previousQuestion();
          }
          break;
        case 'ArrowRight':
          if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            nextQuestion();
          } else {
            nextQuestion(); // This will finish the quiz
          }
          break;
        case 'Escape':
          closeQuiz();
          break;
        case '1':
        case '2':
        case '3':
        case '4':
          const optionIndex = parseInt(event.key) - 1;
          if (optionIndex >= 0 && optionIndex < currentQuestion.options.length) {
            selectAnswer(optionIndex);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQuizModalOpen, currentQuestionIndex, currentQuiz, previousQuestion, nextQuestion, closeQuiz, selectAnswer, currentQuestion]);

  return (
    <div className="modal" onClick={closeQuiz}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="quiz-header">
          <div className="quiz-info">
            <h3>{currentQuiz.title}</h3>
            <div className="quiz-timer">
              <i className="fas fa-clock"></i>
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <button className="close-btn" onClick={closeQuiz}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="quiz-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
          </span>
        </div>

        <div className="quiz-content">
          <div className="question-container">
            <h4>{currentQuestion.question}</h4>
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                  onClick={() => selectAnswer(index)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="quiz-controls">
          <button 
            className="btn-secondary" 
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button 
            className="btn-primary" 
            onClick={nextQuestion}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
