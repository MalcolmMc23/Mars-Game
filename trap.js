class Trap {
  constructor(x, y) {
    this.loc = createVector(x, y)
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    fill(255,0,0);
    triangle(x1, y1, x2, y2, x3, y3)
  }
  update() {
    if(this.hero.loc === this.trap.loc){
      gameState === 3;
    }
  }
}
