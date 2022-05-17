class Enemy {
  constructor(x, y) {
    this.w = 10;
    this.h = 10;
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 10, this.pLoc.y - 10);
    this.render();
    this.update();
  }

  render() {
    fill(100, 0, 100);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  update() {}

  isHitting() {}
}
