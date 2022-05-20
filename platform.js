//Mars Game
class Platform {
  constructor(x, y, r, o, t, f, e) {
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.loc = createVector(x, y);
    this.h = 10;
    this.w = 80;
    this.makeRock = r;
    this.makeOxygen = o;
    this.makeTrap = t;
    this.makeFuel = f;
    this.makeEnemy = e;
    if (r) {
      this.rock = new Rock();
    }
    if (t) {
      this.trap = new Trap();
    }
    if (f) {
      this.fuel = new Fuel();
    }
    if (e) {
      this.enemy = new Enemy();
    }
    if (o) {
      this.oxygen = new Oxygen();
    }
  }

  run() {
    this.update();
    this.render();
    this.runTrap();
    this.runRock();
    this.runOxygen();
    this.runFuel();
    this.runEnemy();
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
      this.loc.x = this.loc.x - 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.loc.x = this.loc.x + 5;
    }
  }

  runTrap() {
    if (this.makeTrap === true) {
      this.trap.run(this.loc.x, this.loc.y);
    }
    //TODO ### add a trap image
  }

  runRock() {
    if (this.makeRock === true) {
      this.rock.run(this.loc.x, this.loc.y);
    }
  }

  runOxygen() {
    if (this.makeOxygen === true) {
      this.oxygen.run(this.loc.x, this.loc.y);
    }
  }

  runFuel() {
    if (this.makeFuel === true) {
      this.fuel.run(this.loc.x, this.loc.y);
    }
  }

  runEnemy() {
    if (this.makeEnemy === true) {
      this.enemy.run(this.loc.x, this.loc.y);
    }
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
