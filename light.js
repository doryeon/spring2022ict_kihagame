class Light{
  constructor(x,y,d){
    this.x=x;
    this.y=y;
    this.d=d;
    this.angle = random(0,255);
  }
  display(){
    fill(127+127*sin(this.angle), 127+127*sin(this.angle), 127, 100);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }
  oscillate(){
    this.angle += 0.1;
  }
}