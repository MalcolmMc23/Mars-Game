//Mars Game
class Hero {
  constructor(hWImg, hJImg, hIdleImg) {
    this.loc = createVector(100, 100);
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0, 0);
    this.hCount = 0; //image number
    this.fCount = 0; //frame counter

    this.iFCount = 0;
    this.iHCount = 0;

    this.jFCount = 0;
    this.jHCount = 0;

    this.jumpCount = 0; //jump counter

    this.fuelCount = 1; // fuel counter

    this.oxFCount = 0; // oxygen frame counter
    this.ox = 100; // oxygen %

    this.hWImg = hWImg;
    this.hJImg = hJImg;
    this.hIdleImg = hIdleImg;
    for (let i = 0; i < this.hWImg.length; i++) {
      this.heroW = this.hWImg[i].width - 25;
      this.heroH = this.hWImg[i].height;
    }
  }
  run() {
    this.update();
    this.render();
    this.showFuel();
    this.showOx();
  }
  //+++++++++++++++++++++++++++++++++++++++++Loading the hero sprite
  render() {
    for (let i = 0; i < this.hWImg.length; i++) {
      fill(225, 20, 100);
      rect(
        this.loc.x,
        this.loc.y,
        this.hWImg[i].width - 25,
        this.hWImg[i].height
      );
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% walking \/
    if (this.isColliding()) {
      //adds one hero image every 10 frame
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) {
        this.fCount++;
        for (let i = 0; i < this.hWImg.length; i++) {
          image(hWImg[this.hCount], this.loc.x - 20, this.loc.y);
        }
        if (this.fCount >= 3) {
          if (++this.hCount >= this.hWImg.length) {
            this.hCount = 0;
          }
          this.fCount = 0;
        }
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% walking ^
      } else if (
        (this.isColliding() && keyIsDown(RIGHT_ARROW) == false) ||
        keyIsDown(LEFT_ARROW)
      ) {
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% idle \/
        this.iFCount++;
        for (let i = 0; i < this.hIdleImg.length; i++) {
          image(this.hIdleImg[this.iHCount], this.loc.x - 20, this.loc.y);
        }
        if (this.iFCount >= 3) {
          if (++this.iHCount >= this.hIdleImg.length) {
            this.iHCount = 0;
          }
          this.iFCount = 0;
        } else if (this.isColliding() === false) {
          this.jFCount++;
          for (let i = 0; i < this.hJImg.length; i++) {
            image(this.hJImg[this.jHCount], this.loc.x - 20, this.loc.y);
          }
          if (this.jFCount >= 3) {
            if (++this.jHCount >= this.hJImg.length) {
              this.jHCount = 0;
            }
            this.jFCount = 0;
          }
        }
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% idle ^
      }
    }
    // this.fCount2++;
    // for (let i = 0; i < this.hJImg.length; i++) {
    //   image(this.hJImg[this.hCount2], this.loc.x - 20, this.loc.y);
    // }
    // if (this.vel.y > 0) {
    //   if (this.fCount2 >= 3) {
    //     if (++this.hCount2 >= this.hJImg.length) {
    //       this.hCount2 = 0;
    //     }
    //     this.fCount2 = 0;
    //   }
    // }
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++Colliding code
  update() {
    if (this.isColliding()) {
      this.vel.y = 0;
      this.jumpCount = 0;
    } else {
      this.loc.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(10);
    }
  }

  //this will show how much fuel you have
  showFuel() {
    fill(25, 175, 244);
    rect(width - 100, 50, 60, 40);
    fill(10);
    textSize(25);
    text(this.fuelCount, width - 75, 80);
  }

  showOx() {
    fill(0, 200, 0);
    rect(width - 100, 150, 60, 40);
    fill(10);
    textSize(20);
    text(this.ox + "%", width - 95, 175);
    this.oxFCount++;
    if (this.oxFCount === 60) {
      this.ox = this.ox - 10;
      this.oxFCount = 0;
    }
    if (this.ox <= 0) {
      gameState = 3;
    }
  }
  //++++++++++++++++++++++++++++++When the hero hits the platform from above or below
  isColliding() {
    for (let i = 0; i < rGame.platform.length; i++) {
      if (
        // this.vel.y > 0 &&
        this.loc.y + this.heroH > rGame.platform[i].loc.y &&
        this.loc.y < rGame.platform[i].loc.y + 10 &&
        this.loc.x + this.heroW > rGame.platform[i].loc.x &&
        this.loc.x < rGame.platform[i].loc.x + 80
      ) {
        return true;
      }
    }

    return false;
  }
  //++++++++++++++++++++++++++++++ jump callback
  jump() {
    this.loc.y = this.loc.y - 3;
    this.vel.y = -4;
    this.acc.y = 0.1;
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
