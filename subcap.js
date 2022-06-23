class Subcap {
  constructor() {}

  display(capx, capy, capWidth, textInput) {
    this.capx = capx
    this.capy = capy
    this.capWidht = capWidth
    this.textInput = textInput
    noStroke();
    rectMode(CENTER);
    fill(255)
    rect(capx, capy + 5, capWidth, 35);
    circle(capx - capWidth / 2, capy + 5, 35);
    circle(capx + capWidth / 2, capy + 5, 35);
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(0)
    text(textInput, capx, capy);
  }
}
