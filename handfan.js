class handfan{
  constructor(b,t){
    this.bool=b;
    this.trpr=constrain(t,0,255);
  }
  display(){
    if (this.bool==1){
      tint(255, this.trpr); 
      image(bc,25,120,100,125);
      tint(255,255);  
    }
  }

  Tr_up(){
    this.trpr+=10;
    this.display(); 
  }
}