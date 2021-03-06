class Trap {
  constructor() {
    this.w = 80;
    this.h = 30;
  }

  run(x, y) {
    this.pLoc = createVector(x, y); // passes in the platform location
    this.loc = createVector(this.pLoc.x, this.pLoc.y - 30);
    this.render();
    this.update();
  }

  render() {
    // fill(255, 0, 0);
    // noStroke();
    // rect(this.loc.x, this.loc.y, this.w, this.h);

    image(tImg, this.loc.x, this.loc.y);
  }
  update() {
    if (this.isHitting()) {
      gameState = 3;
    }
    // if (this.isLanding()) {
    //   for (let i = 0; i < rGame.platform.length; i++) {
    //     rGame.platfrom[i].loc.y++;
    //   }
    // }
  }

  // isLanding() {
  //   if (
  //     rGame.hero.loc.y + rGame.hero.heroH > this.pLoc.y &&
  //     rGame.hero.loc.y < this.pLoc.y + 10 &&
  //     rGame.hero.loc.x + rGame.hero.heroW > this.pLoc.x &&
  //     rGame.hero.loc.x < this.pLoc.y + 60
  //   ) {
  //     console.log("hello");
  //     return true;
  //   }
  //   return false;
  // }

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
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
