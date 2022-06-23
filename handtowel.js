class Towel{
  constructor(b){
    this.x = 280;
    this.y = 185;

    this.xmove = 1;
    this.ymove = 0; 
    
    this.current = b;
  }
  
  direction(x,y){
    this.xmove = x;
    this.ymove = y;
  }
  
  update(){
    this.x = constrain(this.x,0,800);
    this.y = constrain(this.y,0,450);
    
    this.x = this.x + this.xmove;
    this.y = this.y + this.ymove;
  }

  show(){
    if (this.current==1){
      image(towel,this.x, this.y,50,50);
    }
  }
  
  stop(){
    image(towel,20,100,100,100);
  }
}