class Enemy {
  constructor(x, y) {
    this.w = 30;
    this.h = 25;
    this.vel = createVector(0, 0);
    this.acc = createVector(0.5, 0);
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 20, this.pLoc.y - 25);
    this.update();
    this.render();
    this.checkEdges();
  }

  render() {
    // fill(0, 200, 0);
    // rect(this.loc.x, this.loc.y, this.w, this.h);
    if (this.acc.x <= 0) {
      for (let i = 0; i < eImg.length; i++) {
        image(eImg[0], this.loc.x - 5, this.loc.y - 5);
      }
    } else if (this.acc.x >= 0) {
      for (let i = 0; i < eImg.length; i++) {
        image(eImg[1], this.loc.x - 5, this.loc.y - 5);
      }
    }
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.limit(1);

    if (this.isHitting()) {
      rGame.hero.runSleep();
      // gameState = 3;
    }
  }

  checkEdges() {
    if (this.loc.x <= this.pLoc.x) {
      this.acc.x = -this.acc.x;
    }
    if (this.loc.x + this.w >= this.pLoc.x + 80) {
      this.acc.x = -this.acc.x;
    }
  }

  isHitting() {
    // if the hero is hitting the trap it returns true
    if (
      rGame.hero.loc.y + rGame.hero.heroH > this.loc.y &&
      rGame.hero.loc.y < this.loc.y + this.h &&
      rGame.hero.loc.x + rGame.hero.heroH > this.loc.x &&
      rGame.hero.loc.x < this.loc.x + this.w
    ) {
      return true;
    }
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
