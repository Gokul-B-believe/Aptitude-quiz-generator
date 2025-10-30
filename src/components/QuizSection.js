import React from 'react';
import { useQuiz } from '../context/QuizContext';
import './QuizSection.css';

const QuizSection = () => {
  const { startQuiz, isLoading } = useQuiz();

  const categories = [
    {
      id: 'mathematical',
      icon: 'fas fa-calculator',
      title: 'Mathematical Aptitude',
      description: 'Test your numerical reasoning and mathematical problem-solving abilities',
      duration: '15 min',
      questions: '20 questions'
    },
    {
      id: 'logical',
      icon: 'fas fa-puzzle-piece',
      title: 'Logical Reasoning',
      description: 'Challenge your analytical thinking and pattern recognition skills',
      duration: '20 min',
      questions: '25 questions'
    },
    {
      id: 'verbal',
      icon: 'fas fa-comments',
      title: 'Verbal Aptitude',
      description: 'Evaluate your language comprehension and communication skills',
      duration: '18 min',
      questions: '22 questions'
    },
    {
      id: 'spatial',
      icon: 'fas fa-cube',
      title: 'Spatial Reasoning',
      description: 'Test your ability to visualize and manipulate 3D objects',
      duration: '12 min',
      questions: '15 questions'
    }
  ];

  return (
    <section id="quiz" className="quiz-section">
      <div className="container">
        <div className="section-header">
          <h2>Choose Your Challenge</h2>
          <p>Select from various aptitude categories to test your skills</p>
        </div>

        <div className="quiz-categories">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="category-card skeleton-card">
                <div className="skeleton skeleton-circle"></div>
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton-stats">
                  <div className="skeleton skeleton-chip"></div>
                  <div className="skeleton skeleton-chip"></div>
                </div>
                <div className="skeleton skeleton-button"></div>
              </div>
            ))
          ) : (
            categories.map((category) => (
              <div key={category.id} className={`category-card`} data-category={category.id}>
                <div className="card-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="card-stats">
                  <span><i className="fas fa-clock"></i> {category.duration}</span>
                  <span><i className="fas fa-question"></i> {category.questions}</span>
                </div>
                <button
                  className="start-quiz-btn"
                  onClick={() => startQuiz(category.id)}
                >
                  Start Quiz
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
