//Mars Game
class Platform {
  constructor(x, y, r, o, f, e) {
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.loc = createVector(x, y);
  }

  run() {
    this.update();
    this.render();
    this.move();
  }

  update() {
    this.vel.limit(10);
  }
  //++++++++++++++++++++++++++++++++++++++++++++Color and Location
  render() {
    fill(0, 100, 240);
    rect(this.loc.x, this.loc.y, 40, 10);
  }
  //++++++++++++++++++++++++++++++++++++++++++Platforms move with arrow keys
  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.loc.x = this.loc.x - 10;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.loc.x = this.loc.x + 10;
    }
  }
}
