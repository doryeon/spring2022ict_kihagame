class explain2{
  show(){
    strokeWeight(3);
    fill(204, 219, 254, 100);
    stroke(180);
    rect(250, 295, 300, 115, 30);
    stroke(255);
    fill(0);
    textSize(40);
    text("부채를 좌우로", 330, 325);
    text("크게 부쳐주세요!",310, 370);
    console.log(mouseX+","+mouseY);
  }
}