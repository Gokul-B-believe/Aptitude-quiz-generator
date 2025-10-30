# Aptitude Quiz Generator Website

A creative and animated aptitude quiz generator website built with HTML, CSS, and JavaScript. This interactive platform allows users to test their aptitude skills across different categories with engaging animations and modern UI design.

## Features

### 🎯 Quiz Categories
- **Mathematical Aptitude**: Test numerical reasoning and problem-solving abilities
- **Logical Reasoning**: Challenge analytical thinking and pattern recognition
- **Verbal Aptitude**: Evaluate language comprehension and communication skills
- **Spatial Reasoning**: Test 3D visualization and spatial manipulation abilities

### ✨ Creative Animations
- Floating background shapes with smooth animations
- Pulsing quiz icons with expanding rings
- Smooth page transitions and hover effects
- Parallax scrolling effects
- Modal animations with slide-in effects
- Progress bar animations
- Card hover animations with shimmer effects

### 🎮 Interactive Features
- Real-time timer for each quiz
- Progress tracking with visual indicators
- Answer selection with visual feedback
- Keyboard navigation support (arrow keys, escape)
- Responsive design for all devices
- Detailed results with performance feedback

### 📱 Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Adaptive layouts for different screen sizes

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Choose a Category**: Click on any quiz category card to start
3. **Take the Quiz**: Answer questions within the time limit
4. **View Results**: Get detailed feedback on your performance
5. **Retake or Try Another**: Practice with different categories

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technical Features

### CSS Animations
- Keyframe animations for floating shapes
- CSS transitions for smooth interactions
- Gradient backgrounds and modern styling
- Box shadows and backdrop filters
- Responsive grid layouts

### JavaScript Functionality
- Quiz data management
- Timer implementation
- Answer tracking
- Results calculation
- Modal management
- Keyboard event handling
- Scroll effects and parallax

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties

## Customization

### Adding New Questions
Edit the `quizData` object in `script.js` to add new questions:

```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0 // Index of correct answer (0-3)
}
```

### Styling Modifications
- Colors: Modify CSS custom properties in `styles.css`
- Animations: Adjust keyframe animations and transition durations
- Layout: Change grid and flexbox properties
- Typography: Update font families and sizes

### Adding New Categories
1. Add new category data to `quizData` object
2. Create new category card in HTML
3. Update the `startQuiz()` function calls

## Performance Optimizations

- Efficient DOM manipulation
- Event delegation for better performance
- CSS animations using transform and opacity
- Minimal external dependencies
- Optimized images and assets

## Future Enhancements

- User accounts and progress tracking
- More question categories
- Difficulty levels
- Social sharing of results
- Offline functionality
- Analytics and reporting

## License

This project is open source and available under the MIT License.

---

**Enjoy testing your aptitude skills with QuizMaster!** 🧠✨
