class gage{
  constructor(x,y,h){
    this.x=x;
    this.y=constrain(y,100,400);
    this.h=constrain(h,0,300);
    this.w=50;
  }
  
  display(){
    fill(137, 184, 254);
    
    rect(this.x,this.y,this.w,this.h);
  }
}