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
const roverImg = [];
let startImg;
let endImg;
let platImg;
let oxImg;
let bigOxImg;
let fuelImg;
let rockImg;
let hRocketImg;

let buttPlay;
let playInst;
let buttAgain;
let back;

//TODO  ######## ask for largger ox png  ########

function preload() {
  for (let i = 0; i < 6; i++) {
    hWImg[i] = loadImage("hero/walk/h" + i + ".png");
  }

  for (let i = 0; i < 3; i++) {
    hJImg[i] = loadImage("hero/jump/h" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    hIdleImg[i] = loadImage("hero/idle/h" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    sleepImg[i] = loadImage("hero/sleep/h" + i + ".png");
  }
  for (let i = 0; i < 2; i++) {
    roverImg[i] = loadImage("rover/r" + i + ".png");
  }

  for (let i = 0; i < 4; i++) {
    bgImg[i] = loadImage("background/b" + i + ".png");
  }

  startImg = loadImage("splash/start.png");

  endImg = loadImage("splash/end.png");

  platImg = loadImage("platform/p0.png");

  oxImg = loadImage("util/ox.png");

  bigOxImg = loadImage("util/bigOx.png");

  fuelImg = loadImage("util/fuel.png");

  rockImg = loadImage("util/rock.png");

  hRocketImg = loadImage("hero/jump/rocket/hRocket.png");
}

function setup() {
  var cnv = createCanvas(900, 600);
  cnv.position((windowWidth - width) / 2, 10);
  rGame = new Game(hWImg, hJImg, hIdleImg, bgImg, platImg, sleepImg);
  frameRate(30);
  gameState = 1;

  buttPlay = new Button("Play", 290, 190, 300, 275, 500);
  playInst = new Button("Instructions", 590, 410, 137, 125, 300);
  buttAgain = new Button("Play Again", 290, 190, 300, 275, 500);
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
  } else if (gameState === 5) {
    winGame();
  }
}

function startGame() {
  //  rGame.run();
  image(startImg, 0, 0);
  playInst.run();
  buttPlay.run();
}

function playGame() {
  rGame.run();
}

function endGame() {
  background(0, 0, 0);
  image(endImg, 0, 0);
  buttAgain.run();
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
  text("COLLET ALL ROCKS TO ESCAPE", 100, 200);
  textSize(25);
  text("WATCH OUT FOR TRAPS AND ENEMIES", 100, 400);
}

function winGame() {
  background(20);
  textSize(50);
  text("you won :)", width / 2, height / 2);
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    //maybe add a new function for fuel so you jump higher
    if (
      (rGame.hero.fuelCount >= 1 && rGame.hero.jumpCount === 1) ||
      (rGame.hero.fuelCount >= 1 && rGame.hero.isJumping === true)
    ) {
      rGame.hero.fuelCount--;
      rGame.hero.rocket();
    }
    if (rGame.hero.jumpCount < 1 && rGame.hero.isColliding()) {
      rGame.hero.jumpCount++;
      rGame.hero.jump();
    }
  }
}

function mousePressed() {
  if (gameState === 1) {
    if (buttPlay.mouseOverButton()) {
      gameState = 2;
    }
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
  if (gameState === 3) {
    if (buttAgain.mouseOverButton()) {
      window.location.reload();
    }
  }
}
