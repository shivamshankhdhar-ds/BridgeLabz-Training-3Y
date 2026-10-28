
"use strict";

// Q5: First, demonstrate nested callbacks.

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Celebration time!");
        if (callback) callback();
    }, 1000);
}

function runWithCallbacks() {
    console.log("Starting nested callback pipeline...");

    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate(() => {
                        console.log("Callback pipeline finished.");
                    });
                });
            });
        });
    });
}

// Promise-based stage for the async/await version.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${stageName} completed`);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Starting async/await pipeline...");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Async pipeline finished.");
}

// Run one pipeline at a time to keep output clear.
// Uncomment ONE of the following:
runWithCallbacks();
// runWithAsyncAwait();

// async/await improves readability by expressing asynchronous steps
// in a top-to-bottom sequence without deeply nested callbacks.
