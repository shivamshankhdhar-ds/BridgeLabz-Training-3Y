
 // Q4: Array Performance Analyzer

const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const totalScore = scores.reduce(
    (total, score) => total + score, 0
);

const averageScore = totalScore / scores.length;

const passedScores = scores.filter(score => score >= 50);

const scoreReport = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Status: score >= 50 ? "Pass" : "Fail"
}));

console.log("Student Performance Report");
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedScores.length}`);
console.log(`Students Failed: ${scores.length - passedScores.length}`);

console.table(scoreReport);
