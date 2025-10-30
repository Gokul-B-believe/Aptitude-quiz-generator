import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Quiz Data
export const quizData = {
  mathematical: {
    title: "Mathematical Aptitude Quiz",
    duration: 15, // minutes
    questions: [
      {
        question: "What is 15% of 240?",
        options: ["36", "32", "40", "28"],
        correct: 0
      },
      {
        question: "If a train travels 300 km in 4 hours, what is its average speed?",
        options: ["75 km/h", "80 km/h", "70 km/h", "85 km/h"],
        correct: 0
      },
      {
        question: "What is the next number in the sequence: 2, 6, 12, 20, ?",
        options: ["28", "30", "32", "24"],
        correct: 1
      },
      {
        question: "If 3x + 7 = 22, what is the value of x?",
        options: ["5", "4", "6", "3"],
        correct: 0
      },
      {
        question: "What is the area of a circle with radius 7 cm? (π = 22/7)",
        options: ["154 cm²", "44 cm²", "88 cm²", "22 cm²"],
        correct: 0
      },
      {
        question: "If 2/3 of a number is 18, what is the number?",
        options: ["27", "24", "30", "21"],
        correct: 0
      },
      {
        question: "What is the value of 5² + 3³?",
        options: ["52", "34", "28", "45"],
        correct: 0
      },
      {
        question: "If a rectangle has length 12 cm and width 8 cm, what is its perimeter?",
        options: ["40 cm", "96 cm", "20 cm", "32 cm"],
        correct: 0
      },
      {
        question: "What is the square root of 144?",
        options: ["12", "14", "16", "10"],
        correct: 0
      },
      {
        question: "If 4 workers can complete a job in 6 days, how many days will 6 workers take?",
        options: ["4 days", "3 days", "5 days", "2 days"],
        correct: 0
      }
    ]
  },
  logical: {
    title: "Logical Reasoning Quiz",
    duration: 20,
    questions: [
      {
        question: "If all roses are flowers and some flowers are red, which statement is definitely true?",
        options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"],
        correct: 3
      },
      {
        question: "What comes next in the pattern: A, C, E, G, ?",
        options: ["H", "I", "J", "K"],
        correct: 1
      },
      {
        question: "If Monday is the 1st, what day of the week is the 15th?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correct: 0
      },
      {
        question: "Which number should replace the question mark: 2, 4, 8, 16, ?",
        options: ["24", "32", "20", "28"],
        correct: 1
      },
      {
        question: "If RED is coded as 185, how is BLUE coded?",
        options: ["212", "213", "214", "215"],
        correct: 0
      },
      {
        question: "In a group of 30 people, 18 like coffee and 12 like tea. How many like both?",
        options: ["0", "6", "12", "Cannot be determined"],
        correct: 3
      },
      {
        question: "What is the missing number: 1, 4, 9, 16, ?",
        options: ["20", "25", "24", "21"],
        correct: 1
      },
      {
        question: "If A is taller than B, and B is taller than C, who is the shortest?",
        options: ["A", "B", "C", "Cannot be determined"],
        correct: 2
      },
      {
        question: "What comes next: 2, 5, 10, 17, ?",
        options: ["24", "26", "28", "30"],
        correct: 1
      },
      {
        question: "If today is Wednesday, what day will it be 100 days from now?",
        options: ["Thursday", "Friday", "Saturday", "Sunday"],
        correct: 0
      }
    ]
  },
  verbal: {
    title: "Verbal Aptitude Quiz",
    duration: 18,
    questions: [
      {
        question: "What is the synonym of 'Ubiquitous'?",
        options: ["Rare", "Everywhere", "Hidden", "Ancient"],
        correct: 1
      },
      {
        question: "What is the antonym of 'Benevolent'?",
        options: ["Kind", "Generous", "Malicious", "Helpful"],
        correct: 2
      },
      {
        question: "Which word does not belong: Apple, Orange, Banana, Carrot",
        options: ["Apple", "Orange", "Banana", "Carrot"],
        correct: 3
      },
      {
        question: "What is the meaning of 'Ephemeral'?",
        options: ["Lasting forever", "Very short-lived", "Extremely large", "Completely silent"],
        correct: 1
      },
      {
        question: "Complete the analogy: Book is to Library as Car is to ?",
        options: ["Road", "Garage", "Driver", "Engine"],
        correct: 1
      },
      {
        question: "What is the plural of 'Crisis'?",
        options: ["Crises", "Crisises", "Crisis", "Crisi"],
        correct: 0
      },
      {
        question: "Which sentence is grammatically correct?",
        options: ["She don't like apples", "She doesn't like apples", "She not like apples", "She no like apples"],
        correct: 1
      },
      {
        question: "What is the meaning of 'Serendipity'?",
        options: ["Bad luck", "Good fortune by accident", "Hard work", "Intelligence"],
        correct: 1
      },
      {
        question: "Which word is misspelled?",
        options: ["Accommodate", "Occasion", "Embarrass", "All are correct"],
        correct: 3
      },
      {
        question: "What is the meaning of 'Pragmatic'?",
        options: ["Theoretical", "Practical", "Artistic", "Religious"],
        correct: 1
      }
    ]
  },
  spatial: {
    title: "Spatial Reasoning Quiz",
    duration: 12,
    questions: [
      {
        question: "If you fold a square paper diagonally twice, how many triangles do you get?",
        options: ["2", "4", "6", "8"],
        correct: 1
      },
      {
        question: "Which shape has the most sides?",
        options: ["Triangle", "Square", "Pentagon", "Hexagon"],
        correct: 3
      },
      {
        question: "If you rotate a rectangle 90 degrees clockwise, what happens?",
        options: ["It becomes a square", "It becomes a diamond", "It stays the same", "It becomes a line"],
        correct: 1
      },
      {
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        correct: 1
      },
      {
        question: "What is the next shape in the pattern: Circle, Square, Triangle, Circle, ?",
        options: ["Square", "Triangle", "Circle", "Diamond"],
        correct: 0
      },
      {
        question: "If you cut a cube in half, what shape do you get?",
        options: ["Two cubes", "Two rectangles", "Two squares", "Two triangles"],
        correct: 1
      },
      {
        question: "Which 3D shape has no edges or vertices?",
        options: ["Cube", "Cylinder", "Sphere", "Pyramid"],
        correct: 2
      },
      {
        question: "If you fold a paper in half and cut a triangle, how many triangles do you get?",
        options: ["1", "2", "3", "4"],
        correct: 1
      },
      {
        question: "What is the mirror image of the letter 'E'?",
        options: ["E", "Ǝ", "3", "M"],
        correct: 0
      },
      {
        question: "If you have 4 squares, how many rectangles can you make?",
        options: ["1", "2", "4", "6"],
        correct: 3
      }
    ]
  }
};

// Initial State
const initialState = {
  isLoading: true,
  currentQuiz: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  startTime: null,
  timeLeft: 0,
  isQuizModalOpen: false,
  isResultsModalOpen: false,
  results: null,
  showLoader: true
};

// Action Types
const QUIZ_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  START_QUIZ: 'START_QUIZ',
  SELECT_ANSWER: 'SELECT_ANSWER',
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREVIOUS_QUESTION: 'PREVIOUS_QUESTION',
  UPDATE_TIMER: 'UPDATE_TIMER',
  FINISH_QUIZ: 'FINISH_QUIZ',
  OPEN_QUIZ_MODAL: 'OPEN_QUIZ_MODAL',
  CLOSE_QUIZ_MODAL: 'CLOSE_QUIZ_MODAL',
  OPEN_RESULTS_MODAL: 'OPEN_RESULTS_MODAL',
  CLOSE_RESULTS_MODAL: 'CLOSE_RESULTS_MODAL',
  RESET_QUIZ: 'RESET_QUIZ'
};

// Reducer
const quizReducer = (state, action) => {
  switch (action.type) {
    case QUIZ_ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload };
    
    case QUIZ_ACTIONS.START_QUIZ:
      return {
        ...state,
        currentQuiz: action.payload.quiz,
        currentQuestionIndex: 0,
        userAnswers: [],
        startTime: new Date(),
        timeLeft: action.payload.quiz.duration * 60,
        isQuizModalOpen: true,
        isLoading: false
      };
    
    case QUIZ_ACTIONS.SELECT_ANSWER:
      const newAnswers = [...state.userAnswers];
      newAnswers[state.currentQuestionIndex] = action.payload;
      return { ...state, userAnswers: newAnswers };
    
    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          state.currentQuiz.questions.length - 1
        )
      };
    
    case QUIZ_ACTIONS.PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      };
    
    case QUIZ_ACTIONS.UPDATE_TIMER:
      return { ...state, timeLeft: action.payload };
    
    case QUIZ_ACTIONS.FINISH_QUIZ:
      const results = calculateResults(state);
      return {
        ...state,
        results,
        isQuizModalOpen: false,
        isResultsModalOpen: true,
        isLoading: false
      };
    
    case QUIZ_ACTIONS.OPEN_QUIZ_MODAL:
      return { ...state, isQuizModalOpen: true };
    
    case QUIZ_ACTIONS.CLOSE_QUIZ_MODAL:
      return { ...state, isQuizModalOpen: false };
    
    case QUIZ_ACTIONS.OPEN_RESULTS_MODAL:
      return { ...state, isResultsModalOpen: true };
    
    case QUIZ_ACTIONS.CLOSE_RESULTS_MODAL:
      return { ...state, isResultsModalOpen: false };
    
    case QUIZ_ACTIONS.RESET_QUIZ:
      return {
        ...state,
        currentQuiz: null,
        currentQuestionIndex: 0,
        userAnswers: [],
        startTime: null,
        timeLeft: 0,
        results: null,
        isQuizModalOpen: false,
        isResultsModalOpen: false
      };
    
    default:
      return state;
  }
};

// Helper function to calculate results
const calculateResults = (state) => {
  let correctAnswers = 0;
  const totalQuestions = state.currentQuiz.questions.length;

  state.userAnswers.forEach((answer, index) => {
    if (answer === state.currentQuiz.questions[index].correct) {
      correctAnswers++;
    }
  });

  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const timeTaken = new Date() - state.startTime;

  return {
    score,
    correctAnswers,
    totalQuestions,
    timeTaken,
    percentage: score
  };
};

// Context
const QuizContext = createContext();

// Provider Component
export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Initialize app
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: QUIZ_ACTIONS.SET_LOADING, payload: false });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (state.isQuizModalOpen && state.timeLeft > 0) {
      interval = setInterval(() => {
        dispatch({ type: QUIZ_ACTIONS.UPDATE_TIMER, payload: state.timeLeft - 1 });
      }, 1000);
    } else if (state.timeLeft === 0 && state.isQuizModalOpen) {
      dispatch({ type: QUIZ_ACTIONS.FINISH_QUIZ });
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state.isQuizModalOpen, state.timeLeft]);

  // Actions
  const startQuiz = (category) => {
    dispatch({ type: QUIZ_ACTIONS.SET_LOADING, payload: true });
    
    setTimeout(() => {
      dispatch({
        type: QUIZ_ACTIONS.START_QUIZ,
        payload: { quiz: quizData[category] }
      });
    }, 1500);
  };

  const selectAnswer = (answerIndex) => {
    dispatch({ type: QUIZ_ACTIONS.SELECT_ANSWER, payload: answerIndex });
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex === state.currentQuiz.questions.length - 1) {
      dispatch({ type: QUIZ_ACTIONS.FINISH_QUIZ });
    } else {
      dispatch({ type: QUIZ_ACTIONS.NEXT_QUESTION });
    }
  };

  const previousQuestion = () => {
    dispatch({ type: QUIZ_ACTIONS.PREVIOUS_QUESTION });
  };

  const closeQuiz = () => {
    dispatch({ type: QUIZ_ACTIONS.CLOSE_QUIZ_MODAL });
  };

  const closeResults = () => {
    dispatch({ type: QUIZ_ACTIONS.CLOSE_RESULTS_MODAL });
  };

  const retakeQuiz = () => {
    dispatch({ type: QUIZ_ACTIONS.CLOSE_RESULTS_MODAL });
    dispatch({ type: QUIZ_ACTIONS.SET_LOADING, payload: true });
    
    setTimeout(() => {
      const category = Object.keys(quizData).find(key => quizData[key] === state.currentQuiz);
      startQuiz(category);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const value = {
    ...state,
    startQuiz,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    closeQuiz,
    closeResults,
    retakeQuiz,
    formatTime,
    quizData
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom Hook
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
