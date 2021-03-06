class Rock {
  constructor(x, y) {
    this.w = 10;
    this.h = 10;
    this.done = false; // if rock is collectes, done = true
    this.rockImg = rImg;
  }
  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 30, this.pLoc.y - 20);

    this.render();
    this.update();
  }

  render() {
    if (this.done === false) {
      // fill(255, 215, 0);
      // rect(this.loc.x, this.loc.y, this.w, this.h);
      image(this.rockImg, this.loc.x, this.loc.y);
    }
  }

  update() {
    if (this.isGrabbing()) {
      rGame.rScore++;
      // console.log("we got one");
      this.done = true;
    }
  }

  isGrabbing() {
    //  test for collision between player and rock
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
} //******************************************************* class */
