class Trash  {
  constructor(x,y,xspeed,yspeed,c){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this. c = c;
  }
  move(){
    this.x = this.x+this.xspeed;
    this.y = this.y+this.yspeed;
    if(this.y>350){
      this.y =350;
      if(this.y >= 350){
        this.xspeed = 0;
      }
    }
    if(this.x<200){
      this.x = 200;
    }
  }
  display(){
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y,50,50);
    fill(0);
    ellipse(this.x-10,this.y-5,4,4);
    ellipse(this.x+10,this.y-5,4,4);
    triangle(this.x-7,this.y+2,this.x+7,this.y+2,this.x,this.y+7);
  }
}