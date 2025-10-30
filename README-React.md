# Aptitude Quiz Generator - React.js Version

A beautiful and interactive aptitude quiz generator built with React.js. This modern web application allows users to test their aptitude skills across different categories with engaging animations, real-time feedback, and a responsive design.

## 🚀 Features

### 🎯 Quiz Categories
- **Mathematical Aptitude**: Test numerical reasoning and problem-solving abilities
- **Logical Reasoning**: Challenge analytical thinking and pattern recognition
- **Verbal Aptitude**: Evaluate language comprehension and communication skills
- **Spatial Reasoning**: Test 3D visualization and spatial manipulation abilities

### ✨ Modern React Features
- **React Context API** for state management
- **Custom Hooks** for timer and quiz logic
- **Component-based architecture** for maintainability
- **Responsive design** with CSS Grid and Flexbox
- **Smooth animations** and transitions
- **Real-time timer** with automatic quiz completion
- **Progress tracking** with visual indicators
- **Keyboard navigation** support (arrow keys, escape)

### 🎮 Interactive Features
- Real-time timer for each quiz
- Progress tracking with visual indicators
- Answer selection with visual feedback
- Detailed results with performance feedback
- Retake quiz functionality
- Modal-based quiz interface
- Smooth scrolling navigation

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project files**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ContentLoader.js     # Loading screen component
│   ├── Header.js            # Navigation header
│   ├── Hero.js              # Hero section
│   ├── QuizSection.js       # Quiz categories section
│   ├── QuizModal.js         # Quiz modal component
│   ├── ResultsModal.js      # Results modal component
│   ├── AboutSection.js      # About section
│   ├── Footer.js            # Footer component
│   └── *.css               # Component-specific styles
├── context/
│   └── QuizContext.js       # React Context for state management
├── App.js                   # Main App component
├── App.css                  # App-specific styles
├── index.js                 # React entry point
└── index.css                # Global styles
```

## 🎯 How to Use

1. **Choose a Category**: Click on any quiz category card to start
2. **Take the Quiz**: Answer questions within the time limit
3. **Navigate**: Use Previous/Next buttons or arrow keys
4. **View Results**: Get detailed feedback on your performance
5. **Retake or Try Another**: Practice with different categories

## 🔧 Technical Details

### State Management
- Uses React Context API for global state
- Reducer pattern for complex state updates
- Custom hooks for timer and quiz logic

### Key Components
- **QuizContext**: Manages all quiz-related state
- **QuizModal**: Handles quiz interface and navigation
- **ResultsModal**: Displays quiz results and feedback
- **ContentLoader**: Provides loading animations

### Styling
- CSS modules for component isolation
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Modern gradient backgrounds

## 🎨 Customization

### Adding New Questions
Edit the `quizData` object in `src/context/QuizContext.js`:

```javascript
{
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correct: 0 // Index of correct answer (0-3)
}
```

### Adding New Categories
1. Add new category data to `quizData` object
2. Update the categories array in `QuizSection.js`
3. Add corresponding CSS styles if needed

### Styling Modifications
- Colors: Modify CSS custom properties in component CSS files
- Animations: Adjust keyframe animations and transition durations
- Layout: Change grid and flexbox properties
- Typography: Update font families and sizes

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- Efficient DOM manipulation with React
- Optimized re-renders with proper state management
- CSS animations using transform and opacity
- Minimal external dependencies
- Responsive images and assets

## 🔮 Future Enhancements

- User accounts and progress tracking
- More question categories
- Difficulty levels
- Social sharing of results
- Offline functionality with PWA
- Analytics and reporting
- Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Enjoy testing your aptitude skills with QuizMaster React!** 🧠✨
