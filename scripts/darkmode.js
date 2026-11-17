
// Get the HTML element
const html = document.documentElement;
// Load the previously saved theme from localStorage if there is one  otherwise set it to light with ||
html.setAttribute("data-bs-theme", localStorage.getItem("theme") || "light");
// Listends for clicks on the dark mode toggle button
document.addEventListener("click", (event) => {
    if (event.target.id === "darkModeToggle") {
        // switches between light and dark mode, so if dark go to light, otherwise go to dark
        const theme = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
        // apply the new theme to the page
        html.setAttribute("data-bs-theme", theme);
        // aave the selected theme so it persists after refreshing
        localStorage.setItem("theme", theme);
    }
});
