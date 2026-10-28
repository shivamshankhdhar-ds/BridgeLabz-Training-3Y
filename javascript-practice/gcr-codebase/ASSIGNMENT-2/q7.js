
 // Q7: Customer Feedback Processor

const feedback =
    "Great product! Fast delivery and amazing sound quality!";

const normalizedFeedback = feedback.toLowerCase();

const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

const hasBad = normalizedFeedback.includes("bad");
const hasPoor = normalizedFeedback.includes("poor");

console.log("Customer Feedback Report");
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

if (!hasBad && !hasPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
