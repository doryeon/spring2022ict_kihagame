class drop{
  constructor(x,y,t,b){
    this.x=x;
    this.y=y;
    this.t=t;
    this.r=13;
    this.bool=b;
  }
  
  display(){
    if (this.bool==1){
      noStroke();
      fill(194, 209, 254,this.t);
      triangle(this.x,this.y,this.x+5,this.y+10,this.x-5,this.y+10);
      circle(this.x,this.y+15,this.r);
      this.y++;
    }
  }
}