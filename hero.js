class Hero {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.isColliding = false;
    this.pLevel;
    this.hCount = 0;
    this.jumpcount = 0;
  }

  run() {
    this.update();
    this.render();
    this.isColliding = this.collisions();
  }
  //+++++++++++++++++++++++++++++++++++++++++Loading the hero sprite
  render() {
    //  fill(225, 20, 100);
    //  ellipse(this.loc.x, this.loc.y, 15, 15);
    image(heroImgs[this.hCount], this.loc.x, this.loc.y);
    if (++this.hCount >= 5) {
      this.hCount = 0;
    }
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++Colliding code
  update() {
    if (this.isColliding === true) {
      this.vel.y = 0;
      this.loc.y = this.pLevel - 10;
      jumpcount = 0;
    } else {
      this.isColliding === false;
    }
    if (this.isColliding === false) {
      this.loc.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(10);
    }
  }

  //++++++++++++++++++++++++++++++When the hero hits the platform from above or below
  collisions() {
    for (let i = 0; i < 20; i++) {
      if (
        this.loc.y + 7.6 > game.platforms[i].loc.y &&
        this.loc.y + 7.6 < game.platforms[i].loc.y + 10 &&
        this.loc.x + 7.6 > game.platforms[i].loc.x &&
        this.loc.x + 7.6 < game.platforms[i].loc.x + 40
      ) {
        this.pLevel = game.platforms[i].loc.y;
        return true;
      }
    }

    return false;
  }

  jump() {
     if (keyCode(UP_ARROW)) {
      this.vel.y = -4;
      this.acc.y = 0.1;
      this.jumpcount++;
    }
  }
}
