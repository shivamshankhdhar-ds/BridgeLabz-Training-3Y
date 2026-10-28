// Q10: Citizen Eligibility Validator

// Person's details.
const age = 19;
const isCitizen = true;

// Check eligibility using nested if-else.
if (isCitizen) {
    if (age >= 18) {
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}

// Additional condition using a logical operator.
if (isCitizen && age >= 18) {
    console.log("Voting eligibility criteria met.");
}