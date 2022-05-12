class Trap {
  constructor() {
    this.loc = createVector(0, 0);
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    fill(255, 0, 0);
    rect(100, 100, 50, 20);

    // console.log("i am here");
  }
  update() {
    // if (this.hero.loc === this.loc) {
    //   gameState === 3;
    // }
  }
}
