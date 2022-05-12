//Mars Game
// Coders: Malcolm McDoanld and Shane Frey
// Artists: Keana, Isaiah, and Lucas
// 5/2/22

// globals
let rGame;
const heroImg = [];
const bgImg = [];
let buttPlay;
let playInst;
let buttAgain;
let back;

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
  gameState = 1;

  buttPlay = new Button("Play", width - 250, 450, 150, 50, 180);
  playInst = new Button("Instructions", 150, 450, 150, 50, 180 );
  buttAgain = new Button("Play Again", width, 350, 300, 150, 50, 180);
  back = new Button("Back", 500, 500, 100, 50, 180)
}

function draw(){
  if(gameState === 1){
    startGame();
  } else if(gameState === 2){
    playGame();
  } else if(gameState === 3){
    endGame();
  } else if(gameState === 4){
    intGame();
    //console.log("incorrect game state");
  }
}

function startGame(){
//  rGame.run();
  background(0);
  playInst.run();
  buttPlay.run();
  fill(0);
  text("Instructions", 150, 485);
  text("Play", 600, 485);
  fill(191,128,255)
  textSize(200)
  text("Mars Game", 130, 650)
}

function playGame() {
  rGame.run();
}

function endGame() {
  buttAgain.run();
  fill(230,191,0);
  text("Play Again", 400, 600);
  background(0, 0, 0);
}

function intGame(){
  background(0);
  back.run()
  fill(0);
  textSize(25);
  text("BACK", 510, 540)
  fill(230,191,0);
  rect(95, 150, 600, 60);
  fill(230,191,0);
  rect(95, 350, 575, 100);
  fill(0)
  textSize(20);
  text("USE ARROW KEYS TO MOVE AROUND AND COLLECT ROCKS", 100, 200)
  textSize(25);
  text("WATCH OUT FOR TRAPS AND ENEMIES", 100, 400)

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    if (rGame.hero.jumpcount < 2) {
      rGame.hero.jump();
    }
  }
}
