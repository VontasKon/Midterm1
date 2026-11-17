// Get today's date
const today = new Date().toISOString().split("T")[0];

// Select the date input
const taskDate = document.querySelector("#taskDate");

// Set today's date as the minimum allowed date
taskDate.setAttribute("min", today);