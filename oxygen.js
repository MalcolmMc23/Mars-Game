class Oxygen {
  constructor() {
    this.w = 15;
    this.h = 15;
    this.done = false;
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 20, this.pLoc.y - 20);
    this.render();
    this.update();
  }
  render() {
    if (this.done === false) {
      fill(0, 200, 0);
      rect(this.loc.x, this.loc.y, this.w, this.h);
    }
  }

  update() {
    if (this.isGrabbing()) {
      rGame.hero.ox = 100;
      rGame.hero.oxFCount = 0;
      this.done = true;
    }
  }

  isGrabbing() {
    //  test for collision between player and the ox
    if (this.done === false) {
      if (
        rGame.hero.loc.y + rGame.hero.heroH > this.loc.y &&
        rGame.hero.loc.y < this.loc.y + this.h + 10 &&
        rGame.hero.loc.x + rGame.hero.heroH > this.loc.x &&
        rGame.hero.loc.x < this.loc.x + this.w
      ) {
        return true;
      }
    }
    return false;
  }
}
