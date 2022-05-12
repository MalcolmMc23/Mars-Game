class Button {
  constructor(msg,x,y,w,h,c) {
    this.msg = msg;
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = c;
  }

  run() {
    this.render();
    this.mouseOverButton();
  }

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    fill(200, 0, 255);
    textSize(30);
  }

  mouseOverButton() {
    if( mouseX > this.loc.x 		 &&
      mouseX < this.loc.x + this.w &&
      mouseY > this.loc.y     &&
      mouseY < this.loc.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
}
