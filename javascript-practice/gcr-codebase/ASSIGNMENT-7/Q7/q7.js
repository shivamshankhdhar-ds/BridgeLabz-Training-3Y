
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");
const clearButton = document.getElementById("clearButton");

// Display live mouse coordinates
trackingBox.addEventListener("mousemove", function (event) {
    coordinates.textContent =
        `clientX: ${event.clientX} | clientY: ${event.clientY}`;
});

// Reset coordinates when mouse leaves the box
trackingBox.addEventListener("mouseleave", function () {
    coordinates.textContent = "clientX: — | clientY: —";
});

// Place a red dot where the user double-clicks
trackingBox.addEventListener("dblclick", function (event) {
    const boxPosition = trackingBox.getBoundingClientRect();

    // Convert viewport coordinates into box-relative coordinates
    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    const redDot = document.createElement("span");
    redDot.className = "dot";

    redDot.style.left = `${x}px`;
    redDot.style.top = `${y}px`;

    trackingBox.appendChild(redDot);
});

// Remove all dots
clearButton.addEventListener("click", function () {
    const dots = trackingBox.querySelectorAll(".dot");

    dots.forEach(function (dot) {
        dot.remove();
    });
});
