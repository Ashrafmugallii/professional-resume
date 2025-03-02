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
const textOptions = [
    "Cybersecurity Analyst", "Network Engineer", "Educator", "Technology Enthusiast", 
    "Problem Solver", "Defender", "Leader", "Student"];
const quotes = [
    '"Security is not a product, but a process." – Bruce Schneier',
    '"The best way to predict the future is to create it." – Peter Drucker',
    '"The quieter you become, the more you can hear."',
    '"Technology is best when it brings people together."',
    '"Amateurs hack systems, professionals hack people." – Bruce Schneier',
    '"Cybersecurity is much more than a matter of IT." – Stephane Nappo',
    '"Knowing is not enough; we must apply. Willing is not enough; we must do." – Johann Wolfgang von Goethe',
    '"If you put a key under the mat for the cops, a burglar can find it too." – Tim Cook',
    '"It’s not the tools you have faith in. Tools are just tools." – Steve Jobs',
    '"The only way to do great work is to love what you do." – Steve Jobs',
    '"Simplicity is the ultimate sophistication." – Leonardo da Vinci',
    '"Privacy is not for the passive." – Jeffrey Rosen',
    '"First, solve the problem. Then, write the code." – John Johnson',
    '"Cybercrime is the greatest threat to every company in the world." – Ginni Rometty',
    '"Information security is about managing risk, not eliminating it."',
    '"A good programmer is someone who looks both ways before crossing a one-way street." – Doug Linder',
    '"Opportunities multiply as they are seized." – Sun Tzu',
    '"Hackers are the immune system of the internet." – Anonymous',
    '"Don’t let yesterday take up too much of today." – Will Rogers',
    '"An investment in knowledge pays the best interest." – Benjamin Franklin',
    '"A journey of a thousand miles begins with a single step." – Lao Tzu',
    '"It takes 20 years to build a reputation and a few minutes of cyber-incident to ruin it." – Stéphane Nappo',
    '"We are all apprentices in a craft where no one ever becomes a master." – Ernest Hemingway',
    '"The more you know, the more you realize you don’t know." – Aristotle',
    '"Security is like an onion, it has layers." – Unknown',
    '"There are two types of companies: those that have been hacked and those that will be." – Robert Mueller',
    '"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer',
    '"It’s not that we use technology, we live technology." – Godfrey Reggio',
    '"Passwords are like underwear: don’t share them, don’t leave them lying around, and change them often." – Unknown',
    '"Do or do not. There is no try." – Yoda',
    '"Learning never exhausts the mind." – Leonardo da Vinci',
    '"A computer is like a violin. You can imagine that you’re playing a symphony, but reality is that you’re just playing Twinkle, Twinkle, Little Star." – Mitch Ratcliffe',
    '"Hope is not a strategy." – Vince Lombardi',
    '"Data is a precious thing and will last longer than the systems themselves." – Tim Berners-Lee',
    '"You don’t have to see the whole staircase, just take the first step." – Martin Luther King Jr.',
    '"Intelligence is the ability to adapt to change." – Stephen Hawking',
    '"With great power comes great responsibility." – Uncle Ben, *Spider-Man*'
];


let quoteIndex = 0;
const quoteElement = document.querySelector('.dynamic-quote');

setInterval(() => {
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}, 4000);

let index = 0;

setInterval(() => {
    textElement.textContent = textOptions[index];
    index = (index + 1) % textOptions.length;
}, 1500);
