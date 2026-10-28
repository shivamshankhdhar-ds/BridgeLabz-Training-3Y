// Q4: Academic Performance Evaluator

// Marks obtained in five subjects.
const marks = [88, 76, 91, 82, 79];

// Maximum marks for each subject are 100.
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35.
const hasFailedSubject = marks.some(mark => mark < 35);

// Display marks and result.
console.log("Academic Performance Report");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

// A failed subject results in detention.
if (hasFailedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}