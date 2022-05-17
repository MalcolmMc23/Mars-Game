class Game {
  constructor(heroImg, bgImg, platImg) {
    this.gameState = 1;
    this.lvl = 1;
    this.rScore = 0;

    this.bg;
    this.bgImg = bgImg;
    this.hero;
    this.heroImg = heroImg;
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
    this.hero = new Hero(this.heroImg);
    //this.platform = new Platform();
    this.loadPlatform(16);
  }

  loadPlatform(n) {
    for (let i = 0; i < 1; i++) {
      //this.platforms.push(new Platform(x, y,   r,    o,     t,     f,     e))
      this.platform[0] = new Platform(
        50,
        150,
        true,
        false,
        false,
        false,
        false
      );
      this.platform.push(
        new Platform(75, 200, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(150, 250, false, false, true, false, false)
      );
      this.platform.push(
        new Platform(200, 300, false, false, true, false, false)
      );
      this.platform.push(
        new Platform(250, 350, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(300, 400, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(350, 450, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(400, 500, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(450, 150, true, false, false, false, false)
      );
      this.platform.push(
        new Platform(500, 200, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(550, 250, false, false, false, true, false)
      );
      this.platform.push(
        new Platform(600, 300, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(650, 350, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(700, 400, false, false, false, false, false)
      );
      this.platform.push(
        new Platform(750, 450, false, true, false, false, false)
      );
      this.platform.push(
        new Platform(800, 500, false, false, false, false, true)
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
    text("you have " + this.rScore + " out of # rocks", 50, 50);
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ class
