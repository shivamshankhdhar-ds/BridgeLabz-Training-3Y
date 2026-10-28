
"use strict";

// Q4: Compare Promise.all() and Promise.race().

function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed`));
            } else {
                resolve(`${serverName} deployment completed`);
            }
        }, delay);
    });
}

const serverA = () => deployServer("Server A", 2000);
const serverB = () => deployServer("Server B", 3000);

// Promise.all waits for all servers to succeed.
// If either rejects, Promise.all rejects.
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch(error => {
        console.log("Deployment error:", error.message);
    });

// Promise.race settles as soon as the first Promise settles.
// That first result can be a success OR a failure.
Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Race failed:", error.message);
    });

// These calls create separate server simulations, so their random
// outcomes can differ between Promise.all() and Promise.race().
