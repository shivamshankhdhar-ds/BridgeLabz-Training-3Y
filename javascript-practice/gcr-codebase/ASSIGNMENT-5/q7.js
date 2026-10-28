
"use strict";

// Q7: Closure example

function makeMultiplier(multiplier) {
    // The returned function remembers this multiplier.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const fiveTimes = makeMultiplier(5);

console.log("Triple of 5:", triple(5));
console.log("Double of 5:", double(5));
console.log("Five times 5:", fiveTimes(5));

// Output:
// Triple of 5: 15
// Double of 5: 10
// Five times 5: 25

// Closure explanation:
// Each returned function remembers the multiplier value
// from the scope in which it was created.
