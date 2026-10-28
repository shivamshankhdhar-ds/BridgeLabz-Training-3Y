// Q7: Smart Guessing Game

// Generate a random secret number between 1 and 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess.
const userGuess = 27;

// Display values for testing.
console.log(`Your Guess: ${userGuess}`);
console.log(`Secret Number: ${secretNumber}`);

// Check the guess.
if (userGuess >= 1 && userGuess <= 50) {
    if (userGuess === secretNumber) {
        console.log("Correct guess!");
    } else if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
} else {
    console.log("Please enter a number between 1 and 50.");
}