
"use strict";

// Q5: Hoisting Lab

// Original code would print undefined, then "Game started",
// then throw ReferenceError when reading status inside startGame().
// let status is in the temporal dead zone until its declaration runs.

var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Hoisting observations:
// var score is hoisted and initialized to undefined.
// Function declarations are hoisted with their function body.
// let status is hoisted but unavailable before initialization.

// Arrow functions are not hoisted like function declarations.
const announceArrow = () => {
    console.log("Game started using arrow function");
};

announceArrow();
