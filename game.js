class Game {
  constructor(hWImg, hJImg, hIdleImg, bgImg, platImg, sleepImg) {
    this.gameState = 1;
    this.lvl = 1;
    this.rScore = 0;

    this.bg;
    this.bgImg = bgImg;
    this.hero;
    this.hWImg = hWImg;
    this.hJImg = hJImg;
    this.hIdleImg = hIdleImg;
    this.sleepImg = sleepImg;
    this.platform = [];
    //this.enemy = e;
    //this.oxygen = o;
    //this.fuel = f;
    //this.platform;

    this.initGame();
  }

  initGame() {
    //$$$$$ add platforms
    this.bg = new Bg(this.bgImg);
    this.hero = new Hero(this.hWImg, this.hJImg, this.hIdleImg, this.sleepImg);
    //this.platform = new Platform();
    this.loadPlatform(16);
  }

  loadPlatform(n) {
    for (let i = 0; i < 1; i++) {
      //this.platforms.push(new Platform(x, y,   r,    o,     t,     f,     e))
      this.platform[0] = new Platform(75, 275, false, false, false, false, false);

      this.platform.push(
        new Platform(150, 100, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(225, 175, false, false, false, false, true)
      );
      this.platform.push(
        new Platform(250, 500, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(175, 575, true, true, false, false, false)
      );
      this.platform.push(
        new Platform(400, 300, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(350, 450, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(400, 500, false, false, true, false, false)
      );
      this.platform.push(
        new Platform(450, 50, true, false, false, false, false)
      );
      this.platform.push(
        new Platform(550, 550, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(600, 100, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(300, 300, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(650, 500, true, false, false, false, false)
      );
      this.platform.push(
        new Platform(700, 400, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(700, 200, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(800, 500, false, true, false, false, true)
      );
      this.platform.push(
        new Platform(1000, 100, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(900, 550, false, false, false, false, true)
      );
      this.platform.push(
        new Platform(1100, 300, false, false, false, false, true)
      );
      this.platform.push(
        new Platform(1200, 500, false, false, true, false, false)
      );
      this.platform.push(
        new Platform(1500, 100, true, false, false, false, false)
      );
      this.platform.push(
        new Platform(1450, 350, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(1300, 500, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(1400, 400, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(1450, 550, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(1600, 200, false, false, false, false, true)
      );
      this.platform.push(
        new Platform(1800, 400, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(2000, 300, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(2200, 400, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(2300, 500, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(2500, 300, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(2500, 550, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(2700, 250, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(3700, 250, true, false, false, false, false)
      );
    }
  }

  run() {
    this.updateGame();
    this.renderGame();
  }

  updateGame() {}

  renderGame() {
    // if (this.gameState === 1) {
    //   this.sGame();
    // } else if (this.gameState === 2) {
    //   this.pGame();
    // } else if (this.gameState === 3) {
    //   eGame();
    // }
    this.pGame();
  }

  sGame() {
    //start screen
  }

  pGame() {
    //maybe we add a VERY basic lvl select here
    if (this.lvl === 1) {
      this.lvl1();
    }
  }

  eGame() {
    // end screen
  }

  lvl1() {
    this.bg.run();
    for (let i = 0; i < this.platform.length; i++) {
      this.platform[i].run();
    }
    this.hero.run();

    fill(10);
    textSize(20);
    text(this.rScore + " out of 5 Rocks Collected", 50, 50);
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
