//Mars Game
class Platform {
  constructor(x, y) {
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0,0);

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
    fill(0, 100, 240);
    rect(50, 150, 40, 10);

    fill(0, 100, 240);
    rect(100, 200, 40, 10);

    fill(0, 100, 240);
    rect(150, 250, 40, 10);

    fill(0, 100, 240);
    rect(200, 300, 40, 10);

    fill(0, 100, 240);
    rect(250, 350, 40, 10);

    fill(0, 100, 240);
    rect(300, 400, 40, 10);

    fill(0, 100, 240);
    rect(350, 450, 40, 10);

    fill(0, 100, 240);
    rect(400, 500, 40, 10);

    fill(0, 100, 240);
    rect(450, 150, 40, 10);

    fill(0, 100, 240);
    rect(500, 200, 40, 10);

    fill(0, 100, 240);
    rect(550, 250, 40, 10);

    fill(0, 100, 240);
    rect(600, 300, 40, 10);

    fill(0, 100, 240);
    rect(650, 350, 40, 10);

    fill(0, 100, 240);
    rect(700, 400, 40, 10);

    fill(0, 100, 240);
    rect(750, 450, 40, 10);

    fill(0, 100, 240);
    rect(800, 500, 40, 10);
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
