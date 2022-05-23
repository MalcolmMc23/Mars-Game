//Mars Game
// Coders: Malcolm McDoanld and Shane Frey
// Artists: Keana, Isaiah, and Lucas
// 5/2/22

// globals
let rGame;
const hWImg = [];
const bgImg = [];
const hJImg = [];
const hIdleImg = [];
const sleepImg = [];
let startImg;
let endImg;
let platImg;
let oxImg;
let buttPlay;
let playInst;
let buttAgain;
let back;

function preload() {
  for (let i = 0; i < 6; i++) {
    hWImg[i] = loadImage("hero/walk/h" + i + ".png");
  }
  for (let i = 0; i < 3; i++) {
    hJImg[i] = loadImage("hero/jump/h" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    hIdleImg[i] = loadImage("hero/idle/h" + i + ".png"); //TODO this should be the idle file not the jump
  }

  for (let i = 0; i < 4; i++) {
    sleepImg[i] = loadImage("hero/sleep/h" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    bgImg[i] = loadImage("background/b" + i + ".png");
  }

  startImg = loadImage("splash/start.png");

  endImg = loadImage("splash/end.png");

  platImg = loadImage("platform/p0.png");

  oxImg = loadImage("util/ox.png");
}

function setup() {
  var cnv = createCanvas(900, 600);
  cnv.position((windowWidth - width) / 2, 10);
  rGame = new Game(hWImg, hJImg, hIdleImg, bgImg, platImg, sleepImg);
  frameRate(30);
  gameState = 1;

  buttPlay = new Button("Play", width - 455, 330, 300, 275, 500);
  playInst = new Button("Instructions", 150, 450, 150, 50, 180);
  buttAgain = new Button("Play Again", 400, 150, 200, 300, 450, 50, 200);
  back = new Button("Back", 500, 500, 100, 50, 180);
}

function draw() {
  if (gameState === 1) {
    startGame();
  } else if (gameState === 2) {
    playGame();
  } else if (gameState === 3) {
    endGame();
  } else if (gameState === 4) {
    intGame();
    //console.log("incorrect game state");
  }
}

function startGame() {
  //  rGame.run();
  background(0);
  image(startImg, 0, 0);
  playInst.run();
  buttPlay.run();

  fill(0);
  text("Instructions", 150, 485);
}

function playGame() {
  rGame.run();
}

function endGame() {
  background(0, 0, 0);
  image(endImg, 0, 0);
  buttAgain.run();
  fill(0);
  text("Play Again", 450, 300);
}

function intGame() {
  background(0);
  back.run();
  fill(0);
  textSize(25);
  text("BACK", 510, 540);
  fill(244, 63, 25);
  rect(95, 150, 600, 60);
  fill(244, 63, 25);
  rect(95, 350, 575, 100);
  fill(0);
  textSize(20);
  text("USE ARROW KEYS TO MOVE AROUND AND COLLECT ROCKS", 100, 200);
  textSize(25);
  text("WATCH OUT FOR TRAPS AND ENEMIES", 100, 400);
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    //maybe add a new function for fuel so you jump higher
    if (
      (rGame.hero.fuelCount >= 1 && rGame.hero.jumpCount === 1) ||
      (rGame.hero.fuelCount >= 1 && rGame.hero.isJumping === true)
    ) {
      rGame.hero.fuelCount--;
      rGame.hero.jump();
    }
    if (rGame.hero.jumpCount < 1 && rGame.hero.isColliding()) {
      rGame.hero.jumpCount++;
      rGame.hero.jump();
    }
  }
}

function mouseMoved() {
  if (buttPlay.mouseOverButton()) {
    buttPlay.clr = color(25, 175, 244);
  } else {
    buttPlay.clr = color(244, 63, 25);
  }
  if (back.mouseOverButton()) {
    back.clr = color(25, 175, 244);
  } else {
    back.clr = color(244, 63, 25);
  }

  if (playInst.mouseOverButton()) {
    playInst.clr = color(25, 175, 244);
  } else {
    playInst.clr = color(244, 63, 25);
  }
  if (buttAgain.mouseOverButton()) {
    buttAgain.clr = color(25, 175, 244);
  } else {
    buttAgain.clr = color(244, 63, 25);
  }
}

function mousePressed() {
  if (buttPlay.mouseOverButton()) {
    gameState = 2;
  }
  if (gameState === 1) {
    if (playInst.mouseOverButton()) {
      gameState = 4;
      console.log("show Instructions");
    }
  }
  if (back.mouseOverButton()) {
    gameState = 1;
  }
  if (gameState === 3)
    if (buttAgain.mouseOverButton()) {
      window.location.reload();
    }
}
