class Whitecap {
  constructor() {}

  display(textInput) {
 
    
    rectMode(CORNER);
        noStroke();
        fill(255, 230);
        rect(0,350, width, 100)
        textFont(gangwon);
        textAlign(CENTER, CENTER);
        fill(0)
        textSize(30)
        text(textInput, width/2, 395)
  }
}