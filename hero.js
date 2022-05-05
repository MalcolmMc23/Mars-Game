//Mars Game
class Hero {
  constructor(heroImg) {
    this.loc = createVector(100, 100);
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.pLevel;
    this.hCount = 0;
    this.jumpcount = 0;
  }

  run() {
    this.render();
    this.update();
  }
  //+++++++++++++++++++++++++++++++++++++++++Loading the hero sprite
  render() {
    fill(225, 20, 100);
    ellipse(this.loc.x, this.loc.y, 15, 15);
    image(heroImg[this.hCount], this.loc.x - 13, this.loc.y - 20);
    if (++this.hCount >= 5) {
      this.hCount = 0;
    }
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++Colliding code
  update() {
    if (this.isColliding()) {
      this.vel.y = 0;
      // this.loc.y = this.pLevel - 10;
      this.jumpcount = 0;
    } else if (this.isColliding() === false) {
      this.loc.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(10);
    }
  }

  //++++++++++++++++++++++++++++++When the hero hits the platform from above or below
  isColliding() {
    for (let i = 0; i < 20; i++) {
      if (
        // this.loc.y + 7.6 > rGame.platforms[i].loc.y &&
        // this.loc.y + 7.6 < rGame.platforms[i].loc.y + 10 &&
        // this.loc.x + 7.6 > rGame.platforms[i].loc.x &&
        // this.loc.x + 7.6 < rGame.platforms[i].loc.x + 40
        this.loc.x === 1
      ) {
        // this.pLevel = rGame.platforms[i].loc.y;
        return true;
      }
    }

    return false;
  }

  jump() {
    this.vel.y = -4;
    this.acc.y = 0.1;
    this.jumpcount++;
  }
}
