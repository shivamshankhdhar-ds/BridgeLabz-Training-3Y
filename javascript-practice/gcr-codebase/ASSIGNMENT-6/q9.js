
"use strict";

// Q9: Predict output before running.
//
// Predicted order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// The current synchronous script completes first.
// The resolved Promise schedules a microtask.
// setTimeout schedules a timer task, even with a delay of zero.
// The Promise microtask runs before the timer callback.
