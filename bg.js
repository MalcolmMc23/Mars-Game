class Bg {
  //TODO add a vel for every image
  constructor(bgImg) {
    this.bgImg = bgImg;
    this.loc1 = createVector(0, 0);
    this.loc2 = createVector(width, 0);

    this.vel1 = createVector(5, 0);
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    background(20);
    for (let i = 0; i < this.bgImg.length; i++) {
      image(this.bgImg[0], this.loc1.x, 0);
      image(this.bgImg[0], this.loc2.x, 0);

      image(this.bgImg[1], this.loc1.x, 170);
      image(this.bgImg[1], this.loc2.x, 170);

      image(this.bgImg[2], this.loc1.x, 300);
      image(this.bgImg[2], this.loc2.x, 300);

      image(this.bgImg[3], this.loc1.x, height - this.bgImg[3].height);
      image(this.bgImg[3], this.loc2.x, height - this.bgImg[3].height);
    }
  }

  update() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.loc1.sub(this.vel1);
      this.loc2.sub(this.vel1);
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.loc1.add(this.vel1);
      this.loc2.add(this.vel1);
    }

    if (this.loc1.x < -width) {
      this.loc1.x = width;
    }
    if (this.loc2.x < -width) {
      this.loc2.x = width;
    }

    if (this.loc1.x > width) {
      this.loc1.x = -width;
    }
    if (this.loc2.x > width) {
      this.loc2.x = -width;
    }
  }
}
