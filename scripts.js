// Animated background with Canvas
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ["#00bcd4", "#ff5722", "#ffffff"];

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 3 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.dx = (Math.random() - 0.5) * 2;
    this.dy = (Math.random() - 0.5) * 2;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        this.draw();
    };
}

// Initialize particles
for (let i = 0; i < 100; i++) {
    particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
}
animate();

// JavaScript for Interactive Project Details Modal
function showDetails(projectName) {
    const projectDetails = {
        "Network Security Dashboard": "An interactive dashboard visualizing real-time network vulnerabilities, with detailed analytics and security recommendations.",
        "Packet Tracer Simulation": "Simulations of network setups using Cisco Packet Tracer, including VLANs, routing, and ACLs for small business environments.",
        "DNS Sinkhole": "A DNS-based ad and malicious content blocker configured with a Raspberry Pi, including custom whitelists and blacklists."
    };

    // Populate the modal with project details
    document.getElementById("project-title").textContent = projectName;
    document.getElementById("project-description").textContent = projectDetails[projectName];

    // Show the modal
    document.getElementById("project-details").style.display = "block";
    document.body.classList.add("modal-active");
}

function closeDetails() {
    // Hide the modal
    document.getElementById("project-details").style.display = "none";
    document.body.classList.remove("modal-active");
}
// JavaScript to hide/show the floating menu on scroll
let lastScrollPosition = 0;
const menu = document.querySelector(".floating-menu");

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset;

    // Hide menu when scrolling down, show when scrolling up
    if (currentScrollPosition > lastScrollPosition) {
        menu.style.transform = "translateY(-100%)"; // Slide menu up
        menu.style.opacity = "0";
    } else {
        menu.style.transform = "translateY(0)"; // Slide menu back
        menu.style.opacity = "1";
    }

    lastScrollPosition = currentScrollPosition;
});
const textElement = document.querySelector('.animated-text');
const textOptions = ["Cybersecurity Analyst", "Network Engineer", "Educator", "Technology Enthusiast", "Security+ Certified"];
let index = 0;

setInterval(() => {
    textElement.textContent = textOptions[index];
    index = (index + 1) % textOptions.length;
}, 800);
