//this was Remy
//p5 header
let img;
// let angle = 19.7;
let base = 18.5;
let angle = base;
let angleUp = 0;
let cam;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  draw();
  noLoop();
  cam = createCamera();
}
function draw() {
  background(200);
  noStroke();
  lights();
  translate(0, 250);
  rotateY(angle);
  cylinder(750, 2300);
  texture(img);
}
function preload() {
  img = loadImage("imgs/Penn-Banner.jpg");
}
function angler(id) {
  angle =
    base +
    Number(document.getElementById(id).getAttribute("data-h-angle")) / 60;
  redraw();
  angle = base;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
