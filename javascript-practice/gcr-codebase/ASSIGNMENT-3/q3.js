
"use strict";

// Q3: Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        // Set a breakpoint here to inspect each transaction.
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("MISSING_FIELD");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        validTransactions.push(transaction);
        console.log("Valid transaction:", transaction);

    } catch (error) {
        let category;

        switch (error.message) {
            case "NULL_ENTRY":
                category = "Null entry";
                break;
            case "MISSING_FIELD":
                category = "Missing ID or amount";
                break;
            case "NEGATIVE_AMOUNT":
                category = "Negative amount";
                break;
            default:
                category = "Other error";
        }

        invalidTransactions.push({
            transaction,
            error: category
        });

        console.log("Invalid transaction:", category);
    }
}

console.log("\nTransaction Report");
console.log("Valid Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

// Debug tip: Watch transaction, error.message, and both arrays.
// The call stack shows the active execution path.
