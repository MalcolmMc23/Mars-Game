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
    for (let i = 0; i < this.heroImg.length; i++) {
      this.heroW = this.heroImg[i].width;
      this.heroH = this.heroImg[i].height;
    }
  }
  run() {
    this.update();
    this.render();
  }
  //+++++++++++++++++++++++++++++++++++++++++Loading the hero sprite
  render() {
    for (let i = 0; i < this.heroImg.length; i++) {
      fill(225, 20, 100);
      rect(
        this.loc.x,
        this.loc.y,
        this.heroImg[i].width,
        this.heroImg[i].height
      );
    }
    this.fCount++;
    for (let i = 0; i < this.heroImg.length; i++) {
      image(heroImg[this.hCount], this.loc.x, this.loc.y);
    }
    //adds one hero image every 10 frame
    if (this.isColliding()) {
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) {
        if (this.fCount >= 3) {
          if (++this.hCount >= 5) {
            this.hCount = 0;
          }
          this.fCount = 0;
        }
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
        this.loc.y + this.heroH > rGame.platform[i].loc.y &&
        this.loc.y < rGame.platform[i].loc.y + 10 &&
        this.loc.x + this.heroW > rGame.platform[i].loc.x &&
        this.loc.x < rGame.platform[i].loc.x + 60
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
