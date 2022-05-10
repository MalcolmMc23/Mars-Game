class Enemie {
  constructor(x, y) {
    this.loc = createVector(x, y);
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    console.log("i am here");
  }

  update() {}
}
