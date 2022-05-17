class Enemy {
  constructor(x, y) {
    this.w = 20;
    this.h = 20;
    this.vel = createVector(-2, 2), (-2, 2);
    this.acc = createVector(0, 0.01);
    this.loc = createVector(x, y);
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 20, this.pLoc.y - 20);
    this.render();
    this.update();
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
      rGame.hero.loc.y < this.loc.y + this.h &&
      rGame.hero.loc.x + rGame.hero.heroH > this.loc.x &&
      rGame.hero.loc.x < this.loc.x + this.w
    ) {
      return true;
    }
  }
}
