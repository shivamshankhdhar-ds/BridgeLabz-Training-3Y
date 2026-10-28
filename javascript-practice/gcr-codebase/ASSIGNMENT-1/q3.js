// Q3: Monthly Expense Tracker

// Monthly expenses for five categories.
const expenses = [
    { category: "Food", amount: 5000 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

// Calculate the total expense.
let totalExpense = 0;

for (const expense of expenses) {
    totalExpense += expense.amount;
}

// Calculate the average expense across five categories.
const averageExpense = totalExpense / expenses.length;

// Add 10% tax to the total.
const taxRate = 10;
let taxAmount = totalExpense * taxRate / 100;
let finalAmount = totalExpense;
finalAmount += taxAmount;

// Display formatted results.
console.log("Monthly Expense Report");
console.log("----------------------");
console.log(`Total Expense: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);