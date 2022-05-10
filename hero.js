//Mars Game
class Hero {
  constructor(heroImg) {
    this.loc = createVector(100, 100);
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.pLevel;
    this.hCount = 0; //image number
    this.fCount = 0; //frame counter
    this.jumpcount = 0; //jump counter
    this.heroImg = heroImg;
  }

  run() {
    this.update();
    this.render();
  }
  //+++++++++++++++++++++++++++++++++++++++++Loading the hero sprite
  render() {
    // fill(225, 20, 100);
    // ellipse(this.loc.x, this.loc.y, 15, 15);

    this.fCount++;
    for (let i = 0; i < this.heroImg.length; i++) {
      image(
        heroImg[this.hCount],
        this.loc.x - 15,
        this.loc.y - this.heroImg[i].height
      );
    }
    //adds one hero image every 10 frame
    if (this.isColliding()) {
      if (this.fCount >= 10) {
        if (++this.hCount >= 5) {
          this.hCount = 0;
        }
        this.fCount = 0;
      }
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
        this.vel.y > 0 &&
        this.loc.y > rGame.platform[i].loc.y &&
        this.loc.y < rGame.platform[i].loc.y + 10 &&
        this.loc.x > rGame.platform[i].loc.x &&
        this.loc.x < rGame.platform[i].loc.x + 40
      ) {
        this.pLevel = rGame.platform[i].loc.y;
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
