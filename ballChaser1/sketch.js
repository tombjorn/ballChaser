//bouncer

let on = true;
var bubble1 = {
  x: 200,
  y: 200,
  d: 50,
  factor: 50,
  speed: 0.05,

  xSpeed: 3,
  ySpeed: -2,

  display: function () {
    stroke(255);
    strokeWeight(4);
    fill(200, 100, 150, 150);
    ellipse(this.x, this.y, this.d);
  },

  move: function () {
    if (this.x >= width - this.d / 2 || this.x < 0 + this.d / 2) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y >= height - this.d / 2 || this.y < 0 + this.d / 2) {
      this.ySpeed = this.ySpeed * -1;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  },
  trigger: function () {
    do {
      this.xSpeed = this.xSpeed * -1;
      this.ySpeed = this.ySpeed * -1;
    } while ((on = !on));
  },
};
// chaser
var bubble2 = {
  x: 0,
  y: 100,
  min: -10,
  max: 10,
  speed: 0.1,
  factor: 10,

  display: function () {
    stroke(255);
    strokeWeight(4);
    fill(150, 100, 200);
    ellipse(this.x, this.y, 50);
  },
  move: function () {
    for (let i = this.x; i <= bubble1.x; i += this.factor) {
      this.x += this.speed;
      for (let k = this.y; k <= bubble1.y; k += this.factor) {
        this.y += this.speed;
      }
    }
    for (let j = this.x; j > bubble1.x; j -= this.factor) {
      this.x -= this.speed;
      for (let l = this.y; l > bubble1.y; l -= this.factor) {
        this.y -= this.speed;
      }
    }
  },
};

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  bubble2.move();
  bubble2.display();
  bubble1.move();
  bubble1.display();
  bubble1.trigger();
}

function mouseClicked() {
  on = !on;
}
