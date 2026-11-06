
// Get the HTML element
const html = document.documentElement;

// Load the previously saved theme from localStorage
// If no theme is saved, default to light mode
html.setAttribute("data-bs-theme", localStorage.getItem("theme") || "light");


// Listen for clicks on the dark mode toggle button
document.addEventListener("click", (event) => {

    if (event.target.id === "darkModeToggle") {

        // switches between light and dark mode
        const theme = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";

        // apply the new theme to the page
        html.setAttribute("data-bs-theme", theme);

        // aave the selected theme so it persists after refreshing
        localStorage.setItem("theme", theme);


    }
});
