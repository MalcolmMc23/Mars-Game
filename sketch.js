//Mars Game
// Coders: Malcolm McDoanld and Shane Frey
// Artists: Keana, Isaiah, and Lucas
// 5/2/22

// globals
let rGame;
const heroImg = [];
const bgImg = [];

function preload() {
  //   for(let i = 0 ; i < 5 ; i++) {
  //     bgImg[i] = loadImage("images/background/b" + i + ".png")
  //   }

  for (let i = 0; i < 5; i++) {
    heroImg[i] = loadImage("hero/h" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    bgImg[i] = loadImage("background/b" + i + ".png");
  }
}

function setup() {
  var cnv = createCanvas(900, 600);
  cnv.position((windowWidth - width) / 2, 10);
  rGame = new Game(heroImg, bgImg);
  frameRate(30);
}

function draw() {
  background(20);
  rGame.run();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    if (rGame.hero.jumpcount < 2) {
      rGame.hero.jump();
    }
  }
}
