/* ====================================
   PARTICLE BACKGROUND
==================================== */

document.addEventListener(
"DOMContentLoaded",
() => {

const canvas =
document.createElement("canvas");

canvas.id = "particles-canvas";

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-2";

document.body.prepend(canvas);

const ctx =
canvas.getContext("2d");

let particles = [];

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

/* ====================================
   PARTICLE CLASS
==================================== */

class Particle{

constructor(){

this.x =
Math.random() *
canvas.width;

this.y =
Math.random() *
canvas.height;

this.radius =
Math.random() * 2 + 1;

this.speedX =
(Math.random() - .5) * .4;

this.speedY =
(Math.random() - .5) * .4;

this.opacity =
Math.random() * .6 + .2;

}

update(){

this.x += this.speedX;

this.y += this.speedY;

if(this.x < 0)
this.x = canvas.width;

if(this.x > canvas.width)
this.x = 0;

if(this.y < 0)
this.y = canvas.height;

if(this.y > canvas.height)
this.y = 0;

}

draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI * 2
);

ctx.fillStyle =
`rgba(
124,
58,
237,
${this.opacity}
)`;

ctx.fill();

}

}

/* ====================================
   CREATE PARTICLES
==================================== */

function createParticles(){

particles = [];

for(let i = 0; i < 120; i++){

particles.push(
new Particle()
);

}

}

createParticles();

/* ====================================
   CONNECT LINES
==================================== */

function connectParticles(){

for(let a = 0;
a < particles.length;
a++){

for(let b = a;
b < particles.length;
b++){

let dx =
particles[a].x -
particles[b].x;

let dy =
particles[a].y -
particles[b].y;

let distance =
Math.sqrt(
dx * dx +
dy * dy
);

if(distance < 120){

ctx.beginPath();

ctx.strokeStyle =
`rgba(
6,
182,
212,
${0.12 -
distance/1200}
)`;

ctx.lineWidth = 1;

ctx.moveTo(
particles[a].x,
particles[a].y
);

ctx.lineTo(
particles[b].x,
particles[b].y
);

ctx.stroke();

}

}

}

}

/* ====================================
   ANIMATION LOOP
==================================== */

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p => {

p.update();

p.draw();

});

connectParticles();

requestAnimationFrame(
animate
);

}

animate();

/* ====================================
   MOUSE GLOW
==================================== */

let mouseX =
canvas.width / 2;

let mouseY =
canvas.height / 2;

window.addEventListener(
"mousemove",
e => {

mouseX =
e.clientX;

mouseY =
e.clientY;

}
);

setInterval(() => {

ctx.beginPath();

ctx.arc(
mouseX,
mouseY,
120,
0,
Math.PI * 2
);

ctx.fillStyle =
"rgba(124,58,237,.03)";

ctx.fill();

},30);

});
