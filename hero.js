//Mars Game
class Hero {
  constructor(hWImg, hJImg, hIdleImg, sleepImg) {
    this.loc = createVector(100, 100);
    this.acc = createVector(0, 0.2);
    this.vel = createVector(0, 0);
    this.hCount = 0; //image number
    this.fCount = 0; //frame counter

    this.iFCount = 0;
    this.iHCount = 0;

    this.jFCount = 0;
    this.jHCount = 0;

    this.sFCount = 0;
    this.sHCount = 0;

    this.jumpCount = 0; //jump counter

    this.fuelCount = 1; // fuel counter

    this.oxFCount = 0; // oxygen frame counter
    this.ox = 100; // oxygen %

    this.hWImg = hWImg;
    this.hJImg = hJImg;
    this.hIdleImg = hIdleImg;
    this.sleepImg = sleepImg;
    for (let i = 0; i < this.hWImg.length; i++) {
      this.heroW = this.hWImg[i].width - 25;
      this.heroH = this.hWImg[i].height;
    }

    this.isSleeping = false;
    this.sleepTime = 0;

    this.isJumping = true;
  }
  run() {
    this.update();
    this.render();
    this.checkEdges();
    this.showFuel();
    this.showOx();
  }
  //+++++++++++++++++++++++++++++++++++++++++Loading the hero sprite
  render() {
    // for (let i = 0; i < this.hWImg.length; i++) {
    //   fill(225, 20, 100);
    //   rect(
    //     this.loc.x,
    //     this.loc.y,
    //     this.hWImg[i].width - 25,
    //     this.hWImg[i].height
    //   );
    // }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% jumping \/
    if (this.isJumping === true && this.isSleeping === false) {
      this.jFCount++;
      for (let i = 0; i < this.hJImg.length; i++) {
        image(this.hJImg[this.jHCount], this.loc.x, this.loc.y);
      }
      if (this.jFCount >= 15) {
        if (this.jHCount === 2) {
          this.jHCount = 2;
        } else {
          this.jHCount++;
        }
        this.jFCount = 0;
      }
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% jumping ^

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% walking \/
    if (this.isColliding() && this.isSleeping === false) {
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
        (this.isColliding() &&
          keyIsDown(RIGHT_ARROW) == false &&
          this.isSleeping === false) ||
        (keyIsDown(LEFT_ARROW) == false &&
          this.isColliding() &&
          this.isSleeping === false)
      ) {
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% idle \/
        this.iFCount++;
        for (let i = 0; i < this.hIdleImg.length; i++) {
          image(this.hIdleImg[this.iHCount], this.loc.x, this.loc.y);
        }
        if (this.iFCount >= 10) {
          if (++this.iHCount >= this.hIdleImg.length) {
            this.iHCount = 0;
          }
          this.iFCount = 0;
          //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% idle ^
        }
      }
    }
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++Colliding code
  update() {
    if (this.isSleeping === true) {
      if (++this.sleepTime >= 15) {
        this.sleepTime = 0;
        gameState = 3;
      }
    }
    if (this.isColliding()) {
      this.vel.y = 0;
      // this.loc.add(this.vel);
      // this.vel.add(this.acc);
      this.jumpCount = 0;
    } else {
      this.loc.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(5);
    }
    //TODO add the number of rocks on x
    if (rGame.rScore === 5) {
      gameState = 5;
    }
  }

  //this will show how much fuel you have
  showFuel() {
    image(bigFuelImg, 810, 20);
    fill(10);
    textSize(25);
    text(this.fuelCount, 817, 65);
  }

  showOx() {
    // fill(0, 200, 0);
    // rect(width - 100, 150, 60, 40);
    image(bigOxImg, 825, 100);
    fill(10);
    textSize(15);
    text(this.ox + "%", 828, 160);
    this.oxFCount++;
    if (this.oxFCount === 60) {
      this.ox = this.ox - 10;
      this.oxFCount = 0;
    }
    if (this.ox <= 0) {
      this.runSleep();
      // gameState = 3;
    }
  }
  //++++++++++++++++++++++++++++++When the hero hits the platform from above or below
  isColliding() {
    for (let i = 0; i < rGame.platform.length; i++) {
      if (
        this.vel.y >= -this.vel.y &&
        this.loc.y + this.heroH > rGame.platform[i].loc.y &&
        this.loc.y < rGame.platform[i].loc.y + 10 &&
        this.loc.x + this.heroW > rGame.platform[i].loc.x &&
        this.loc.x < rGame.platform[i].loc.x + 80
      ) {
        this.isJumping = false;
        return true;
      }
    }
    this.isJumping = true;
    return false;
  }
  checkEdges() {
    // if (this.loc.x < 0) this.isSleeping();
    // if (this.loc.x > width) this.isSleeping();
    //  if (this.loc.y < 0) this.isSleeping();
    if (this.loc.y > height) this.runSleep();
    //gameState = 3;
  }
  //++++++++++++++++++++++++++++++ jump callback
  jump() {
    this.loc.y = this.loc.y - 2;
    this.vel.y = -3.5;
    this.acc.y = 0.1;
  }

  rocket() {
    this.loc.y = this.loc.y - 2;
    this.vel.y = -3.5;
    this.acc.y = 0.1;
    // image(hRocketImg, this.loc.x - 20, this.loc.y);
    // console.log("hello world");
  }

  runSleep() {
    // runs sleep animation
    this.sFCount++;
    if (this.sHCount >= 3) {
      gameState = 3;
    }
    for (let i = 0; i < rGame.sleepImg.length; i++) {
      image(this.sleepImg[this.sHCount], this.loc.x - 30, this.loc.y + 5);

      if (this.sFCount >= 5) {
        if (++this.sHCount >= rGame.sleepImg.length) {
          gameState = 3;
        }
        this.sFCount = 0;
      }
    }
    this.isSleeping = true;
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
