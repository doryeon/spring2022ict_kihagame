class bc_lr{
  constructor(b){
    this.b=b;
  }
  show(){
    if (this.b==0)
      image(bc_l,50,250,160,130);
    else if (this.b==1)
      image(bc_r,590,250,160,130);
  }
}