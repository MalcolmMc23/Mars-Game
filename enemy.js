class Enemy {
  constructor(x, y) {
    this.w = 10;
    this.h = 10;
    this.vel = createVector(0, 0);
    this.acc = createVector(0.5, 0);
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 20, this.pLoc.y - 10);
    this.update();
    this.render();
    this.checkEdges();
  }

  render() {
    fill(100, 0, 100);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.limit(1);

    if (this.isHitting()) {
      gameState = 3;
    }
  }

  checkEdges() {
    if (this.loc.x <= this.pLoc.x) {
      this.acc.x = -this.acc.x;
    }
    if (this.loc.x + this.w >= this.pLoc.x + 60) {
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
