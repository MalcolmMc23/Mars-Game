class Enemy {
  constructor(x, y) {
    this.w = 10;
    this.h = 10;
    this.vel = createVector(-2, 2), (-2, 2);
    this.acc = createVector(0, 0.01);
    this.loc = createVector(x, y);
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 10, this.pLoc.y - 10);
    this.render();
    this.update();
    this.isHitting();
  }

  render() {
    fill(100, 0, 100);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);


    if (this.isHitting()) {
      gameState = 3;
    }
  }

  isHitting() {
    // if the hero is hitting the trap it returns true
    if (
      rGame.hero.loc.y + rGame.hero.heroH > this.loc.y &&
      rGame.hero.loc.y < this.loc.y + this.h + 10 &&
      rGame.hero.loc.x + rGame.hero.heroH > this.loc.x &&
      rGame.hero.loc.x < this.loc.x + this.w
    ) {
      return true;
    }
  }
}
