class Oxygen {
  constructor() {
    this.w = 15;
    this.h = 15;
    this.done = false;
  }

  run(x, y) {
    this.pLoc = createVector(x, y);
    this.loc = createVector(this.pLoc.x + 20, this.pLoc.y - 20);
    this.render();
    this.update();
  }
  render() {
    fill(0, 200, 0);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  update() {}
}
