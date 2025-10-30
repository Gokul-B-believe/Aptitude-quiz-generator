import React from 'react';
import './App.css';
import ContentLoader from './components/ContentLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import QuizSection from './components/QuizSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import QuizModal from './components/QuizModal';
import ResultsModal from './components/ResultsModal';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <ContentLoader />
        <div className="bg-animation">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        
        <Header />
        <Hero />
        <QuizSection />
        <AboutSection />
        <Footer />
        
        <QuizModal />
        <ResultsModal />
      </div>
    </QuizProvider>
  );
}

export default App;
