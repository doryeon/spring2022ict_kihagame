class Flashlight {
  constructor(_xpos, _ypos, _circleSize) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.angle = random(-5, 5);
    this.circleSize = _circleSize;
    this.go = true;
    this.a = random(180, 230);
    this.b = random(130, 180);
    this.c = random(24, 37);
  }

  display() {
    push();
    translate(this.xpos, this.ypos);
    rotate(degrees(this.angle / 900));
    fill(this.a, this.b, this.c, random(80, 120));
    noStroke();
    circle(0, -20, this.circleSize + random(1, 5));
    strokeWeight(3);
    stroke(this.a, this.b, this.c);
    line(0, 0, 0, -20);
    pop();
  }

  move() {
    if (this.go) {
      this.angle++;
    } else {
      this.angle--;
    }

    if ((this.go && this.angle > 20) || (!this.go && this.angle < -20)) {
      this.go = !this.go;
    }
  }
}