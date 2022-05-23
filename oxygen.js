class Oxygen {
  constructor() {
    this.w = 15;
    this.h = 15;
    this.done = false;
    this.oxygen = true;
    this.oxImg = oxImg;
  }
  run(x, y) {
    if (this.oxygen === true) {
      this.pLoc = createVector(x, y);
      this.loc = createVector(this.pLoc.x + 40, this.pLoc.y - 30);
      this.render();
      this.update();
    }
  }
  render() {
    if (this.done === false) {
      // fill(0, 200, 0);
      // rect(this.loc.x, this.loc.y, this.w, this.h);
      image(this.oxImg, this.loc.x, this.loc.y);
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
  if(keyPressed = 8) {
    this.oxygen = false;
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
