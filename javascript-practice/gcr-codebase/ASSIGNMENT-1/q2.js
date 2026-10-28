// Q2: Multi-Type Data Summary

// Create variables with different data types.
const userName = "Shivam";
const userAge = 20;
const isStudent = true;
const subjects = ["JavaScript", "Java", "Python"];
const user = { name: "Shivam", city: "Budaun" };
const middleName = null;
let address;

// Prepare a report using typeof and Array.isArray().
const dataReport = [
    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "Age",
        Value: userAge,
        Type: typeof userAge
    },
    {
        Label: "Student",
        Value: isStudent,
        Type: typeof isStudent
    },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        Label: "User Object",
        Value: JSON.stringify(user),
        Type: typeof user
    },
    {
        Label: "Middle Name",
        Value: middleName,
        Type: middleName === null ? "null" : typeof middleName
    },
    {
        Label: "Address",
        Value: address,
        Type: typeof address
    }
];

// Display the complete report in one table.
console.table(dataReport);