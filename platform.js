//Mars Game
class Platform {
  constructor(x, y) {
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0,0);
    this.platform = []

  }

  run() {
    this.update();
    this.render();
    this.move();
  }

  update() {
    this.vel.limit(10);

  }
//++++++++++++++++++++++++++++++++++++++++++++Color and Location
  render() {
    for (let i = 0 ; i < 16 ; i++) {
      platform === rect + (i)
    }

    fill(0, 100, 240);
    rect0(50, 150, 40, 10);

    fill(0, 100, 240);
    rect1(100, 200, 40, 10);

    fill(0, 100, 240);
    rect2(150, 250, 40, 10);

    fill(0, 100, 240);
    rect3(200, 300, 40, 10);

    fill(0, 100, 240);
    rect4(250, 350, 40, 10);

    fill(0, 100, 240);
    rect5(300, 400, 40, 10);

    fill(0, 100, 240);
    rect6(350, 450, 40, 10);

    fill(0, 100, 240);
    rect7(400, 500, 40, 10);

    fill(0, 100, 240);
    rect8(450, 150, 40, 10);

    fill(0, 100, 240);
    rect9(500, 200, 40, 10);

    fill(0, 100, 240);
    rect10(550, 250, 40, 10);

    fill(0, 100, 240);
    rect11(600, 300, 40, 10);

    fill(0, 100, 240);
    rect12(650, 350, 40, 10);

    fill(0, 100, 240);
    rect13(700, 400, 40, 10);

    fill(0, 100, 240);
    rect14(750, 450, 40, 10);

    fill(0, 100, 240);
    rect15(800, 500, 40, 10);
  }
//++++++++++++++++++++++++++++++++++++++++++Platforms move with arrow keys
  move() {
    if(keyIsDown(LEFT_ARROW)) {
      this.vel.x = 4;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.vel.x = -4;
    }else{
      this.vel.x = 0;
      }

    }

}
