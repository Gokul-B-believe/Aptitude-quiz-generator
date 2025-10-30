import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: 'fas fa-brain',
      title: 'Smart Questions',
      description: 'Carefully crafted questions to test your abilities'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Progress Tracking',
      description: 'Monitor your improvement over time'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Friendly',
      description: 'Practice anywhere, anytime on any device'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About QuizMaster</h2>
            <p>
              QuizMaster is designed to help you improve your aptitude skills through 
              interactive quizzes and real-time feedback. Our platform offers a variety 
              of question types to challenge different aspects of your cognitive abilities.
            </p>
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <i className={feature.icon}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
