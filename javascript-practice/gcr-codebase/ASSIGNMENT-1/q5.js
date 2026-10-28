// Q5: Weather Activity Planner

// Weather details.
const temperature = 12;
const isRaining = false;
const windSpeed = 25;

// Suggest an activity based on the weather.
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Additional logical condition using OR.
if (isRaining || (temperature < 15 && windSpeed > 20)) {
    console.log("Carry out indoor activities today.");
}