//Mars Game
class Platform {
  constructor(x, y, r, o, t, f, e) {
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.loc = createVector(x, y);
    this.h = 10;
    this.w = 60;
    this.trap = t;
    this.rock = r;
  }

  run() {
    this.update();
    this.render();
    this.runTrap();
    this.runRock();
    this.move();
  }

  update() {
    this.vel.limit(10);
  }
  //++++++++++++++++++++++++++++++++++++++++++++Color and Location
  render() {
    fill(0, 100, 240);
    rect(this.loc.x, this.loc.y, this.w, this.h);

    image(platImg, this.loc.x, this.loc.y);
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
    if (this.trap === true) {
      rGame.trap.run(this.loc.x, this.loc.y);
    }
    //TODO ### add a trap image
  }

  runRock() {
    if (this.rock === true) {
      rGame.rock.run(this.loc.x, this.loc.y);
    }
  }
}
