// ===== ROLE AUTO CHANGE =====
const roles = [
    "Lead Generative AI Engineer",
    "Full Stack Developer",
    "AI Agent",
    "Agentic AI",
    "RAG Systems",
    "AWS Cloud",
    "DevOps"
];

let index = 0;
const roleText = document.getElementById("role-text");

setInterval(() => {
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];
}, 2500);


// ===== DARK MODE =====
const toggle = document.getElementById("themeToggle");

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


// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));


// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.getAttribute("data-width");
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});