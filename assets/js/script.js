/* ====================================
   LOADER
==================================== */

window.addEventListener("load", () => {

const loader =
document.getElementById("loader");

if(loader){

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},800);

}

});

/* ====================================
   HEADER SCROLL EFFECT
==================================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

if(!header) return;

if(window.scrollY > 50){

header.style.background =
"rgba(11,18,32,.85)";

header.style.borderColor =
"rgba(255,255,255,.12)";

}else{

header.style.background =
"rgba(11,18,32,.6)";

header.style.borderColor =
"rgba(255,255,255,.08)";

}

});

/* ====================================
   SMOOTH SCROLL
==================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

link.addEventListener("click", e => {

const targetId =
link.getAttribute("href");

if(targetId === "#") return;

const target =
document.querySelector(targetId);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});

/* ====================================
   REVEAL ANIMATION
==================================== */

const revealElements =
document.querySelectorAll(
".section, .project-card, .skill-card, .social-card, .achievement-card, .timeline-item"
);

const revealObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

revealElements.forEach(el => {

el.classList.add("reveal");

revealObserver.observe(el);

});

/* ====================================
   MOBILE MENU
==================================== */

const menuBtn =
document.querySelector(".mobile-menu-btn");

const navbar =
document.querySelector(".navbar");

if(menuBtn && navbar){

menuBtn.addEventListener("click", () => {

navbar.classList.toggle("mobile-active");

});

}

/* ====================================
   COUNTER ANIMATION
==================================== */

const counters =
document.querySelectorAll(
".stat-item h3, .achievement-card h3"
);

const counterObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const el = entry.target;

const text = el.innerText;

const number =
parseInt(text.replace(/\D/g,""));

if(!number) return;

let current = 0;

const step =
Math.ceil(number / 40);

const interval =
setInterval(() => {

current += step;

if(current >= number){

current = number;

clearInterval(interval);

}

if(text.includes("+")){

el.innerText = current + "+";

}else{

el.innerText = current;

}

},30);

counterObserver.unobserve(el);

}

});

},{
threshold:0.5
});

counters.forEach(counter => {

counterObserver.observe(counter);

});

/* ====================================
   FLOATING DOCK ACTIVE
==================================== */

const dockItems =
document.querySelectorAll(".dock-item");

dockItems.forEach(item => {

item.addEventListener("mouseenter", () => {

item.style.transform =
"translateX(-8px) scale(1.05)";

});

item.addEventListener("mouseleave", () => {

item.style.transform =
"translateX(0) scale(1)";

});

});

/* ====================================
   PARALLAX AVATAR
==================================== */

const avatar =
document.querySelector(".avatar-area");

window.addEventListener("mousemove", e => {

if(!avatar) return;

const x =
(window.innerWidth / 2 - e.clientX) / 40;

const y =
(window.innerHeight / 2 - e.clientY) / 40;

avatar.style.transform =
`translate(${x}px, ${y}px)`;

});

