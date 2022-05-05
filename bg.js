class Bg {
  constructor(bgImg) {
    this.bgImg = bgImg;
    this.loc1 = createVector(0, 0);
    this.loc2 = createVector(width, 0);
    this.loc3 = createVector(0 - width, 0);

    this.loc4 = createVector(0, 0);
    this.loc5 = createVector(width, 0);
    this.loc6 = createVector(0 - width, 0);

    this.loc7 = createVector(0, 0);
    this.loc8 = createVector(width, 0);
    this.loc9 = createVector(0 - width, 0);

    this.loc10 = createVector(0, 0);
    this.loc11 = createVector(width, 0);
    this.loc12 = createVector(0 - width, 0);

    this.loc13 = createVector(0, 0);
    this.loc14 = createVector(width, 0);
    this.loc15 = createVector(0 - width, 0);

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
      image(this.bgImg[0], this.loc3.x, 0);

      image(this.bgImg[1], this.loc4.x, height - this.bgImg[1].height);
      image(this.bgImg[1], this.loc5.x, height - this.bgImg[1].height);
      image(this.bgImg[1], this.loc6.x, height - this.bgImg[1].height);

      image(this.bgImg[2], this.loc7.x, height - this.bgImg[2].height);
      image(this.bgImg[2], this.loc8.x, height - this.bgImg[2].height);
      image(this.bgImg[2], this.loc9.x, height - this.bgImg[2].height);

      image(this.bgImg[3], this.loc10.x, height - this.bgImg[3].height);
      image(this.bgImg[3], this.loc11.x, height - this.bgImg[3].height);
      image(this.bgImg[3], this.loc12.x, height - this.bgImg[3].height);

      image(this.bgImg[4], this.loc13.x, height - this.bgImg[4].height);
      image(this.bgImg[4], this.loc14.x, height - this.bgImg[4].height);
      image(this.bgImg[4], this.loc15.x, height - this.bgImg[4].height);
    }
  }

  update() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.loc1.sub(this.vel1);
      this.loc2.sub(this.vel1);
      this.loc3.sub(this.vel1);

      this.loc4.sub(this.vel2);
      this.loc5.sub(this.vel2);
      this.loc6.sub(this.vel2);

      this.loc7.sub(this.vel3);
      this.loc8.sub(this.vel3);
      this.loc9.sub(this.vel3);

      this.loc10.sub(this.vel4);
      this.loc11.sub(this.vel4);
      this.loc12.sub(this.vel4);

      this.loc13.sub(this.vel5);
      this.loc14.sub(this.vel5);
      this.loc15.sub(this.vel5);
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.loc1.add(this.vel1);
      this.loc2.add(this.vel1);
      this.loc3.add(this.vel1);

      this.loc4.add(this.vel2);
      this.loc5.add(this.vel2);
      this.loc6.add(this.vel2);

      this.loc7.add(this.vel3);
      this.loc8.add(this.vel3);
      this.loc9.add(this.vel3);

      this.loc10.add(this.vel4);
      this.loc11.add(this.vel4);
      this.loc12.add(this.vel4);

      this.loc13.add(this.vel5);
      this.loc14.add(this.vel5);
      this.loc15.add(this.vel5);
    }
    if (this.loc1.x <= -width) {
      this.loc1.x = width;
    }
    if (this.loc2.x <= -width) {
      this.loc2.x = width;
    }

    if (this.loc3.x < -width) {
      this.loc3.x = width * 2;
    }
    if (this.loc3.x > width * 2) {
      this.loc3.x = -width;
    }

    if (this.loc4.x <= -width) {
      this.loc4.x = width;
    }

    if (this.loc5.x <= -width) {
      this.loc5.x = width;
    }
    if (this.loc6.x < -width) {
      this.loc6.x = width * 2;
    }

    if (this.loc7.x <= -width) {
      this.loc7.x = width;
    }
    if (this.loc8.x <= -width) {
      this.loc8.x = width;
    }

    if (this.loc9.x < -width) {
      this.loc9.x = width * 2;
    }
    if (this.loc10.x <= -width) {
      this.loc10.x = width;
    }
    if (this.loc11.x <= -width) {
      this.loc11.x = width;
    }
    if (this.loc12.x < -width) {
      this.loc12.x = width * 2;
    }
    if (this.loc13.x <= -width) {
      this.loc13.x = width;
    }
    if (this.loc14.x <= -width) {
      this.loc14.x = width;
    }
    if (this.loc15.x < -width) {
      this.loc15.x = width * 2;
    }
  }
}
