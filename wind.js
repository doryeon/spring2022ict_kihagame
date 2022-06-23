class Wind{
  constructor(x,y,b){
    this.x=x;
    this.y=y;
    this.bool=b;
  }
  
  display(){
    if (this.bool==1){
      image(wind,this.x,this.y,80,40);
    }
  }
}