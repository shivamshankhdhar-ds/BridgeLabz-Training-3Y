
 // Q1: Scope Conflict Resolver

let bonus = 5000; // Global scope

function calculateSalary(isPermanent) {
    let salary = 40000; // Local scope

    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ₹${salary}`);
}

calculateSalary(true);
calculateSalary(false);

console.log(`Global Bonus: ₹${bonus}`);
