// Q8: Employee Salary Projection

// Current salary and annual increment rate.
const currentSalary = 30000;
const annualIncrementRate = 10;

let salary = currentSalary;
const salaryReport = [];

// Calculate salary for the next five years.
for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;

    // Round the salary to the nearest rupee.
    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

// Display the salary projection in a table.
console.log(`Starting Salary: ₹${currentSalary}`);
console.log(`Annual Increment: ${annualIncrementRate}%`);
console.table(salaryReport);