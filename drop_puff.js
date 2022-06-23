class dropPuff{
  constructor(x,y,b){
    this.x=x;
    this.y=y;
    this.bool=b;
  }
  
  display(){
    if (this.bool==1){
      image(Puff,this.x,this.y,40,40);
      this.y++;
    }
  }
}