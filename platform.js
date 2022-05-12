//Mars Game
class Platform {
  constructor(x, y, r, o, t, f, e) {
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.loc = createVector(x, y);
    this.h = 10;
    this.w = 60;
    this.trap = t;
  }

  run() {
    this.update();
    this.render();
    this.move();
    this.runTrap();
  }

  update() {
    this.vel.limit(10);
  }
  //++++++++++++++++++++++++++++++++++++++++++++Color and Location
  render() {
    fill(0, 100, 240);
    rect(this.loc.x, this.loc.y, this.w, this.h);
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

  runTrap() {
    rGame.trap.run();
    //TODO ### add a trap that deleats the patform when the hero steps on it.
  }
}
