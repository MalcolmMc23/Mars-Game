//Mars Game
//Malcolm McDoanld, Shane, other group members
// 5/2/22

// globals
let rGame;
const heroImg = [];
const bgImg = [];

function preload() {
  // for (let i = 0; i < @@ number of images @@; i++) {
  //     bgImg[i] = loadImage("@@ file name @@" + 1 + ".png")
  // }
  // for (let i = 0; i < @@ number of imiages @@; i++) {
  //     heroImg[i] = loadImage("@@ file name @@" + 1 + ".png")
  // }
}

function setup() {
  var cnv = createCanvas(900, 600);
  cnv.position((windowWidth - width) / 2, 10);
  rGame = new Game(heroImg, bgImg);
}

function draw() {
  background(20);
  rGame.run();
}

function keyPressed() {
  if (keyCode === 32)
    [
      // @@ add jump function
    ];
}
