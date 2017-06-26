let bubbles = [];

class Bubble {
  constructor() {
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.x = random(displayWidth);
    this.y = random(displayHeight);
    this.diameter = random(20, 30);
    this.speed = 1;
  }
  display() {
    stroke(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(this.r, this.g, this.b);
    this.r += random(1, 20);
    this.g += random(1, 20);
    this.b += random(1, 20);
    if (this.r > 255) {
      this.r = 0;
    }
    if (this.g > 255) {
      this.g = 0;
    }
    if (this.b > 255) {
      this.b = 0;
    }
  }
  move() {
    if (this.y > 0) {
      this.y -= this.speed;
      this.x += random(-this.speed, this.speed);
    } else {
      this.y = height;
    }
  }
  augment() {
    if (this.diameter < 15) {
      this.diameter = random(20, 30);
    } else if (this.diameter > 42) {
      this.diameter = random(20, 30);
    } else {
      this.diameter += random(-2, 2);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(255);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
    bubbles[i].augment();
  }
}

function windowResized() {
  const h = displayHeight - 100;
  const w = displayWidth;
  height = h;
  width = h;
  resizeCanvas(w, h);
}
