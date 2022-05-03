class Platform {
  constructor(x, y) {
    this.loc = createVector(x,y);
    this.acc = createVector(0, 0.1);
    this.vel = createVector(0,0);

  }

  run() {
    this.update();
    this.render();
    this.move();
  }
//+++++++++++++++++++++++++++++++++++++++Teleport the platforms to the other side
  update(){
    this.loc.add(this.vel);

    this.vel.limit(10);
    if(this.loc.x + 50 < 10){
      this.loc.x = width + random(25);
      this.loc.y = random(height);
    }
  }
//++++++++++++++++++++++++++++++++++++++++++++Color and Location
  render() {
    fill(0, 100, 240);
    rect(this.loc.x, this.loc.y, 40, 10);
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
