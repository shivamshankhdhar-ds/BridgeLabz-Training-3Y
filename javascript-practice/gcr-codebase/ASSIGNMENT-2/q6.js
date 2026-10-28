
 // Q6: Event-Based Counter

let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

function counterDemo() {
    // Nested function accesses the outer function's local variable
    let localCount = count;

    function showCount() {
        console.log(`Local counter value: ${localCount}`);
    }

    localCount++;
    showCount();
}

console.log(`Initial Count: ${count}`);

increment();
increment();
decrement();

counterDemo();

console.log(`Final Global Count: ${count}`);
