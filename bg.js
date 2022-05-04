class Bg {
  constructor(bgImg) {
    this.bgImg = bgImg;
    this.loc1 = createVector(0, 0);
    this.loc2 = createVector(width, 0);

    this.loc3 = createVector(0, 0);
    this.loc4 = createVector(width, 0);

    this.loc5 = createVector(0, 0);
    this.loc6 = createVector(width, 0);

    this.loc7 = createVector(0, 0);
    this.loc8 = createVector(width, 0);

    this.loc9 = createVector(0, 0);
    this.loc10 = createVector(width, 0);

    this.vel1 = createVector(2, 0);
    this.vel2 = createVector(5, 0);
    this.vel3 = createVector(7, 0);
    this.vel4 = createVector(9, 0);
    this.vel5 = createVector(10, 0);
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    for (let i = 0; i < this.bgImg.length; i++) {
      image(this.bgImg[0], this.loc1.x, 0);
      image(this.bgImg[0], this.loc2.x, 0);

      image(this.bgImg[1], this.loc3.x, height - this.bgImg[1].height);
      image(this.bgImg[1], this.loc4.x, height - this.bgImg[1].height);

      image(this.bgImg[2], this.loc5.x, height - this.bgImg[2].height);
      image(this.bgImg[2], this.loc6.x, height - this.bgImg[2].height);

      image(this.bgImg[3], this.loc7.x, height - this.bgImg[3].height);
      image(this.bgImg[3], this.loc8.x, height - this.bgImg[3].height);

      image(this.bgImg[4], this.loc9.x, height - this.bgImg[4].height);
      image(this.bgImg[4], this.loc10.x, height - this.bgImg[4].height);
    }
  }

  update() {}
}
