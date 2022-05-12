class Game {
  constructor(heroImg, bgImg) {
    this.gameState = 1;
    this.lvl = 1;

    this.bg;
    this.bgImg = bgImg;
    this.hero;
    this.heroImg = heroImg;
    this.platform = [];
    this.trap = new Trap();
    //this.enemy = e;
    //this.rock = r;
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
    for (let i = 0; i < n; i++) {
      // this.platforms.push(new Platform(x, y, r, o, t, f, e))
      this.platform[0] = new Platform(50, 150, 0, 0, 0, 0, 0);
      this.platform.push(new Platform(75, 200, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(150, 250, 0, 0, true, 0, 0));
      this.platform.push(new Platform(200, 300, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(250, 350, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(300, 400, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(350, 450, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(400, 500, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(450, 150, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(500, 200, 0, 0, 0, 1, 0));
      this.platform.push(new Platform(550, 250, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(600, 300, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(650, 350, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(700, 400, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(750, 450, 0, 0, 0, 0, 0));
      this.platform.push(new Platform(800, 500, 0, 0, 0, 0, 0));
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
    this.hero.run();
    for (let i = 0; i < this.platform.length; i++) {
      this.platform[i].run();
    }
  }
}
