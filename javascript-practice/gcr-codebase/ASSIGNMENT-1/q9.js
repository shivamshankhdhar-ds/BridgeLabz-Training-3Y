// Q9: Random Math Quiz Generator

// Generate two random numbers between 1 and 20.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator.
const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let correctAnswer;

// Calculate the answer using a switch statement.
switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;

    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;

    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;

    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;

    default:
        console.log("Invalid operator.");
}

// Format division answers to two decimal places.
if (operator === "/") {
    correctAnswer = correctAnswer.toFixed(2);
}

// Display the question and answer.
console.log("Random Math Quiz");
console.log(`${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);