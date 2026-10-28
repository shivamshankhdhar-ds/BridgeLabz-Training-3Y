
"use strict";

// Q10: Asynchronous food delivery pipeline.

function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            // Each step has a 10% chance of failure.
            if (Math.random() < 0.1) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Debug detail:", error.message);
    }
}

runPipeline();

// Each step returns a Promise. await pauses this async function
// until the current step resolves or rejects. A rejection jumps to
// catch, so later steps are skipped. Other event-loop tasks can run
// while the Promise is waiting for its timer.
