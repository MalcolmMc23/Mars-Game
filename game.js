class Game {
  constructor(heroImg, bgImg) {
    this.gameState = 1;
    this.lvl = 1;

    this.bg;
    this.bgImg = bgImg;
    this.hero;
    this.heroImg = heroImg;
    this.platforms =[];
    //this.platform;

    this.initGame();
  }



  initGame() {
    //$$$$$ add platforms
    this.bg = new Bg(this.bgImg);
    this.hero = new Hero(this.heroImg);
    //this.platform = new Platform();
    this.loadPlatforms(6);
  }

  loadPlatforms(n){


      this.platforms.push(new Platform(x, y, r))



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
    this.platform.run();
  }
}
