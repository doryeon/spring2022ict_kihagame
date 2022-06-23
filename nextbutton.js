class Next {
  constructor() {}

  display() {
    noStroke();
    imageMode(CORNER);
    image(nextButton, 677, 408, 40, 40);
    textFont(gangwon);

    fill(0);
    stroke(255);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    if (mouseX >= 685 && mouseX <= 780 && mouseY >= 415 && mouseY <= 438) {
      textSize(50);
    } else {
      textSize(40);
    }
    text("NEXT", 750, 420);
  }

  nexted() {
    stage++;
  }
  
  isNext() {
  if (mouseX >= 685 && mouseX <= 780 && mouseY >= 415 && mouseY <= 438)
    return true
  return false 
}
}
