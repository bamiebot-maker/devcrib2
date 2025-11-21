// Game variables
let randomNumber;
let attempts;
let gameActive;

// DOM elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const attemptsCount = document.getElementById('attemptsCount');
const feedbackMessage = document.getElementById('feedbackMessage');

/**
 * Initialize the game
 * Sets up initial state and event listeners
 */
function initializeGame() {
    // Initialize game state
    resetGame();
    
    // Add event listeners
    submitBtn.addEventListener('click', handleGuess);
    resetBtn.addEventListener('click', resetGame);
    
    // Allow Enter key to submit guess
    guessInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleGuess();
        }
    });
    
    // Focus on input field when page loads
    guessInput.focus();
}

/**
 * Generate a random number between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Handle the guess submission
 * Validates input and provides feedback
 */
function handleGuess() {
    // Check if game is active
    if (!gameActive) {
        showFeedback('Game over! Please reset to play again.', 'error');
        return;
    }
    
    // Get and validate input
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        showFeedback('Please enter a valid number between 1 and 50!', 'error');
        guessInput.value = '';
        guessInput.focus();
        return;
    }
    
    // Increment attempts
    attempts++;
    updateAttemptsDisplay();
    
    // Check the guess
    checkGuess(userGuess);
    
    // Clear input and focus for next guess
    guessInput.value = '';
    guessInput.focus();
}

/**
 * Check the user's guess against the random number
 * @param {number} guess - User's guess
 */
function checkGuess(guess) {
    if (guess === randomNumber) {
        // Correct guess
        gameActive = false;
        showFeedback(`🎉 Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`, 'success');
        submitBtn.disabled = true;
    } else if (guess < randomNumber) {
        // Too low
        showFeedback('📈 Too low! Try a higher number.', 'info');
    } else {
        // Too high
        showFeedback('📉 Too high! Try a lower number.', 'info');
    }
}

/**
 * Show feedback message to the user
 * @param {string} message - Feedback message
 * @param {string} type - Message type (success, error, info)
 */
function showFeedback(message, type) {
    feedbackMessage.textContent = message;
    
    // Reset classes
    feedbackMessage.className = 'feedback-message';
    
    // Add type-specific class
    switch (type) {
        case 'success':
            feedbackMessage.classList.add('feedback-success');
            break;
        case 'error':
            feedbackMessage.classList.add('feedback-error');
            break;
        case 'info':
            feedbackMessage.classList.add('feedback-info');
            break;
    }
}

/**
 * Update the attempts counter display
 */
function updateAttemptsDisplay() {
    attemptsCount.textContent = attempts;
}

/**
 * Reset the game to initial state
 */
function resetGame() {
    // Generate new random number between 1 and 50
    randomNumber = generateRandomNumber(1, 50);
    
    // Reset game state
    attempts = 0;
    gameActive = true;
    
    // Reset UI
    updateAttemptsDisplay();
    showFeedback('New game started! Guess a number between 1 and 50.', 'info');
    guessInput.value = '';
    submitBtn.disabled = false;
    
    // Focus on input field
    guessInput.focus();
    
    // Log the random number for testing (remove in production)
    console.log('Random number (for testing):', randomNumber);
}

/**
 * Add CSS classes for different feedback types
 * This is added dynamically to the style element
 */
function addFeedbackStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .feedback-success {
            background: rgba(76, 175, 80, 0.2) !important;
            border-color: #4CAF50 !important;
            color: #4CAF50 !important;
        }
        
        .feedback-error {
            background: rgba(244, 67, 54, 0.2) !important;
            border-color: #f44336 !important;
            color: #f44336 !important;
        }
        
        .feedback-info {
            background: rgba(33, 150, 243, 0.2) !important;
            border-color: #2196F3 !important;
            color: #2196F3 !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    addFeedbackStyles();
    initializeGame();
});