class Fuel {
  constructor() {
    this.w = 15;
    this.h = 10;
    this.done = false;
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 30, this.pLoc.y - 20);
    this.render();
    this.update();
  }

  render() {
    if (this.done === false) {
      fill(25, 175, 244);
      rect(this.loc.x, this.loc.y, this.w, this.h);
    }
  }

  update() {
    if (this.isGrabbing()) {
      rGame.hero.fuelCount++;
      this.done = true;
    }
  }

  isGrabbing() {
    //  test for collision between player and fuel
    if (this.done === false) {
      if (
        rGame.hero.loc.y + rGame.hero.heroH > this.loc.y &&
        rGame.hero.loc.y < this.loc.y + this.h &&
        rGame.hero.loc.x + rGame.hero.heroH > this.loc.x &&
        rGame.hero.loc.x < this.loc.x + this.w
      ) {
        return true;
      }
    }
    return false;
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
