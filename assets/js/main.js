// ROLE AUTO CHANGE
const roles = [
    "Lead Generative AI Engineer",
    "Full Stack Developer",
    "AI Agent Architect",
    "RAG Systems Expert"
];

let index = 0;
const roleText = document.getElementById("role-text");

setInterval(() => {
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];
}, 2500);


// DARK/LIGHT MODE (FULLY WORKING)
const toggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "🌙";
    }
});


// SKILL BAR ANIMATION
window.addEventListener("load", () => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});