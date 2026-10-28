
"use strict";

// Q2: Event Loop — Microtasks vs Macrotasks

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected output:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// Timeout callback (macrotask)
//
// Explanation:
// Synchronous statements run first.
// Promise.then callbacks enter the microtask queue.
// setTimeout callbacks enter the task/macrotask queue.
// After synchronous execution, microtasks are processed before
// the next timer task is run.
