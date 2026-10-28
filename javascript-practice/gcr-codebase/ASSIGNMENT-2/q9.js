
 // Q9: Odd-Even Number Analyzer

const results = [];

for (let number = 1; number <= 30; number++) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        Number: number,
        Result: result
    });
}

console.table(results);
