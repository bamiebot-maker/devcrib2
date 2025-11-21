# Number Guessing Game 🎯

A simple and interactive number guessing game built with HTML, CSS, and JavaScript for the DevCrib Frontend Challenge (Task 2).

## 🎮 Features

- **Random Number Generation**: Generates a random number between 1-50 for each game
- **Attempts Counter**: Tracks how many guesses the player makes
- **Smart Feedback**: Provides "too high", "too low", or "correct" feedback
- **Input Validation**: Handles invalid inputs and empty submissions
- **Keyboard Support**: Press Enter to submit guesses
- **Reset Functionality**: Start a new game with fresh random number
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations

## 🚀 How to Play

1. Enter a number between 1 and 50 in the input field
2. Click "Submit Guess" or press Enter
3. Receive feedback if your guess is too high, too low, or correct
4. Keep guessing until you find the right number!
5. Use the "Reset Game" button to start a new game

## 🛠️ Technical Implementation

### Game Logic
- **Random Number**: Generated using `Math.random()` with range 1-50
- **Input Validation**: Checks for numbers within valid range
- **Attempt Tracking**: Increments counter on each valid guess
- **Game State Management**: Tracks when game is active/completed

### Key Functions
- `initializeGame()`: Sets up game state and event listeners
- `generateRandomNumber(min, max)`: Creates random number for guessing
- `handleGuess()`: Processes user input and validates
- `checkGuess(guess)`: Compares guess against target number
- `resetGame()`: Resets all game state and UI

### Event Listeners
- Submit button click
- Enter key press in input field
- Reset button click

## 📁 Project Structure
project/
├── index.html
├── README.md
└── assets/
├── css/
│ └── style.css
└── js/
└── script.js