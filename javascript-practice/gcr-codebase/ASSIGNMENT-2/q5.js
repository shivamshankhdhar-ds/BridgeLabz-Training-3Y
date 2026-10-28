
 // Q5: Boolean Logic Access System

const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

const isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Testing OR (||) and NOT (!) operators
const isDoorUnlocked = !isDoorLocked;
const isWindowOpen = !isWindowClosed;

if (isDoorUnlocked || isWindowOpen || !isAlarmOn) {
    console.log("Warning: Security Risk Detected!");
} else {
    console.log("No Door, Window, or Alarm Risk.");
}

// Test with an unsafe condition
const testWindowClosed = false;

if (
    isAlarmOn &&
    isDoorLocked &&
    testWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
