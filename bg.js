class Bg {
  //TODO add a vel for every image
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

    this.vel1 = createVector(6, 0);
    this.vel2 = createVector(4, 0);
    this.vel3 = createVector(3, 0);
    this.vel4 = createVector(2, 0);
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

      image(this.bgImg[1], this.loc3.x, 170);
      image(this.bgImg[1], this.loc4.x, 170);

      image(this.bgImg[2], this.loc5.x, 300);
      image(this.bgImg[2], this.loc6.x, 300);

      image(this.bgImg[3], this.loc7.x, height - this.bgImg[3].height);
      image(this.bgImg[3], this.loc8.x, height - this.bgImg[3].height);
    }
  }

  update() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.loc1.sub(this.vel1);
      this.loc2.sub(this.vel1);

      this.loc3.sub(this.vel2);
      this.loc4.sub(this.vel2);

      this.loc5.sub(this.vel3);
      this.loc6.sub(this.vel3);

      this.loc7.sub(this.vel4);
      this.loc8.sub(this.vel4);
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.loc1.add(this.vel1);
      this.loc2.add(this.vel1);

      this.loc3.add(this.vel2);
      this.loc4.add(this.vel2);

      this.loc5.add(this.vel3);
      this.loc6.add(this.vel3);

      this.loc7.add(this.vel4);
      this.loc8.add(this.vel4);
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

    if (this.loc3.x < -width) {
      this.loc3.x = width;
    }
    if (this.loc4.x < -width) {
      this.loc4.x = width;
    }

    if (this.loc3.x > width) {
      this.loc3.x = -width;
    }
    if (this.loc4.x > width) {
      this.loc4.x = -width;
    }

    if (this.loc5.x < -width) {
      this.loc5.x = width;
    }
    if (this.loc6.x < -width) {
      this.loc6.x = width;
    }

    if (this.loc5.x > width) {
      this.loc5.x = -width;
    }
    if (this.loc6.x > width) {
      this.loc6.x = -width;
    }

    if (this.loc7.x < -width) {
      this.loc7.x = width;
    }
    if (this.loc8.x < -width) {
      this.loc8.x = width;
    }

    if (this.loc7.x > width) {
      this.loc7.x = -width;
    }
    if (this.loc8.x > width) {
      this.loc8.x = -width;
    }
  }
}
