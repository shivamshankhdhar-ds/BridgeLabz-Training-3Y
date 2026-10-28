
"use strict";

// Q2: Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const employee of employees) {
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error(`Invalid numeric data for ${employee.name}`);
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log("\nEmployee:", employee.name);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary: ₹${totalSalary.toFixed(2)}`);
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Strict mode prevents accidental assignment to undeclared variables.
// Conversion and missing-property errors are handled by try...catch.
