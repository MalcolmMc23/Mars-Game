class Trap {
  constructor() {
    this.loc = createVector(0, 0);
    this.w = 20;
    this.h = 20;
    this.pLoc;
  }

  run(x, y) {
    this.pLoc = createVector(x + 20, y - 20);
    this.render();
    this.update();
    // this.isHitting();
  }

  render() {
    fill(255, 0, 0);
    rect(this.pLoc.x, this.pLoc.y, this.w, this.h);
  }
  update() {
    // if (this.hero.loc === this.loc) {
    //   gameState === 3;
    // }
  }
  // isHitting() {// if the hero is hitting the trap it returns true
  //   if (
  //     rGame.hero.loc.y > this.pLoc.y &&
  //     rGame.hero.loc.y < this.pLoc.y + this.h + 10 &&
  //     rGame.hero.loc.x > this.pLoc.x &&
  //     rGame.hero.loc.x < this.pLoc.x + this.w
  //   ) {
  //     gameState = 3;
  //   }
  // }
}
