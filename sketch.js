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

  //   for(let i = 0 ; i < 5 ; i++) {
  //     heroImg[i] = loadImage("images/hero/h" + i + ".png")
  //   }

  for (let i = 0; i < 5; i++) {
    bgImg[i] = loadImage("img_place_holder" + i + ".png");
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
  if (keyCode(UP_ARROW)) {
    game.hero.vel.y = -4;
    game.hero.acc.y = 0.1;
  }
}
