class Rock {
  constructor(x, y) {}
  run(x, y) {
    this.rLoc = createVector(x, y);
    this.loc = createVector(this.rLoc.x + 30, this.rLoc.y - 20);

    this.render();
    this.update();
  }

  render() {
    fill(255, 215, 0);
    ellipse(this.loc.x, this.loc.y, 20);
  }

  update() {}
}
