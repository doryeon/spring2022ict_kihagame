class Home {
  constructor() {}

  display() {
    noStroke();
    imageMode(CORNER);
    if(mouseX<=50 && mouseY>=395) {
      image(blackHome, 10, 400, 40, 40)
    }else{
      image(whiteHome, 10, 400, 40, 40);
    }
    
  }

  homed() {
    stage=0;
    mini1 = 99;
    intro = true;
minigame1 = false;
minigame2 = false;
minigame3 = false;
ending = false;
    
     timer12 = 59 - int((millis() - timer11) / 1000);
        for (let i = 0; i < 10; i++) {
          trashes[i] = new Trash(
            200,
            280 + i,
            random(-2, 3),
            random(1, 3),
            color(random(255), random(255), random(255))
          );
        }
        count = 0;
        tutTimer = 9;
        tutTimer2 = 9;
        startTimer = 4;

        gameTimer1 = 9;
        gameTimer2 = 9;
         gameTimer3 = 9;
         gameTimer4 = 9;
         gameTimer5 = 9;
         gameTimer6 = 9;
         clapcount1 = 0;
         clapcount2 = 0;
         clapcount3 = 0;
         clapcount_tut = 0;
        num_tut = int(random(0, randomArray.length));
        num1 = int(random(0, randomArray.length));
        num2 = int(random(0, randomArray.length));
        num3 = int(random(0, randomArray.length));
        text_xpos = 0;
        myText_tut = "";
        stuff_tut = "";
        myText = "";
        stuff = "";
        myText2 = "";
        stuff2 = "";
        myText3 = "";
        stuff3 = "";
        micSize = 100;
        micX = 655;
        ment = 700;
        hand = 700;
        clothes = 720;
        g1.y = 400;
        g1.h = 0;
        htowel.x = 285;
        htowel.y = 185;
        sweat_timing = 60;
        g2.y = 400;
        g2.h = 0;
        limit_s = 3;
        success1 = false;
        success2 = false;
        success3 = false;
    newsong.stop();
    testMP3.stop();
    minigame1song.stop();
    ost.stop();
    game3bgm.stop();
    newsong.play();
  }
  
  isHome() {
  if (mouseX<=50 && mouseY>=395)
    return true
  return false 
}
}