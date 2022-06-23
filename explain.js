class explain{
  show(){
    strokeWeight(3);
    fill(229, 172, 32, 100);
    stroke(180);
    rect(10, 260, 300, 170, 30);
    stroke(255);
    strokeWeight(1);
    image(directionkey, 60, 300, 210, 140);
    fill(0);
    textSize(25);
    text("방향키(상하좌우)로 손수건을 움직여", 40, 275);
    text("가수님의 땀을 닦아 주세요!", 65, 297);
  }
}