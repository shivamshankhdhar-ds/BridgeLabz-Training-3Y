
"use strict";

// Q5: Validate and store a movie ticket booking.

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const message = document.getElementById("message");
    const ticket = document.getElementById("ticket");

    if (!namePattern.test(name)) {
        message.textContent = "Name must contain alphabets only.";
        ticket.textContent = "";
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        ticket.textContent = "";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        message.textContent = "Seats must be a whole number from 1 to 10.";
        ticket.textContent = "";
        return;
    }

    const booking = { name, email, seats };

    message.textContent = "Booking successful!";
    ticket.textContent =
        `Movie Ticket\nName: ${booking.name}\n` +
        `Email: ${booking.email}\nSeats: ${booking.seats}`;

    console.log("Booking Details:", booking);
});
