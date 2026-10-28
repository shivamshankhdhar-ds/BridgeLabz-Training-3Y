// Q1: Personalized Login Greeting

// Store the user's name.
const userName = "Shivam";

// Get the current hour (0 to 23).
const currentHour = new Date().getHours();

// Display a greeting based on the current time.
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}