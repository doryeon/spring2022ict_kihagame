class timer{
  constructor(){
    this.bx=350;
    this.by=200;
    this.bw=100;
    this.bh=50;
    this.current=0;
    this.limit=60;
  }
  
  button_display(){ //아직!
    fill(150,150,255);
    strokeWeight(3);
    stroke(255);
    rect(this.bx,this.by,this.bw,this.bh);
    text("start!",this.bx+40,this.by+10);
    if (mouseX>=350 && mouseX<=450 && mouseY>=200 && mouseY<=250){
      rect(this.bx-10,this.by-10,this.bw+20,this.bh+20);
    }
  } //true false 로 조정하자!
  
  timer_display(){
    if (this.limit>=60){
      text("다음 공연까지",50,50);
      text("00:"+this.limit+" 남았습니다~",50,80);
    }
    if (this.limit<=60){
      text("다음 공연까지",50,50);
      text("00:"+this.limit+" 남았습니다~",50,80);
    }
    if (this.limit==0){
      text("다음 공연까지",50,50);
      text("00:"+this.limit+" 남았습니다~",50,80);
    }
  }
  
}