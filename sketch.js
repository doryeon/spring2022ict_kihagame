// image
let jang1;
let jeoncham;
let speaking;
let jang2;
let subtitle3;
let subtitle2;
let nextButton;
let introOutro;
let minigame1Intro;
let jangSad;
let todaysMisson;
let caution;
let testMP3;
let eye1;
let eye2;
let eye3;
let endingSet;
let whiteHome;
let blackHome;
let concert;
let flying;
let flyxpos;
let ending_jang;
let failending;
let happyending;

// 타이머
let timer11;
let timer12;
let timer31;
let timer32;
let timer41;
let timer42;
let timer51;
let timer52;

// 성공 여부 실패 불린
let success1 = false;
let success2 = false;
let success3 = false;

//폰트
let gmM;
let gangwon;

// 스테이지 변수
let stage = 0;
let mini1 = 99;

// 미니게임별 나누는 불린 변수
let intro = true;
let minigame1 = false;
let minigame2 = false;
let minigame3 = false;
let ending = false;

// 공통 클래스
let next;
let subcap1;
let subcap2;
let subcap3;
let whitecap1;
let home;

// minigame1 변수들
let trashes = [];
let micSize = 100;
let ment = 700; //아웃트로 멘트 변수
let hand = 700; //아웃트로 손 변수
let clothes = 720; //아웃트로 옷 변수
let micX = 655;

// minigame2 변수들
let count = 0; //미션 몇 개 성공했는지 확인함

//각각의 게임 타이머
let tutTimer = 9; //튜토리얼 타이머_마이크
let tutTimer2 = 9; //튜토리얼 타이머_타이핑
let startTimer = 4; // 인트로 타이머

let gameTimer1 = 9; // 1~3은 박수 미션
let gameTimer2 = 9;
let gameTimer3 = 9;
let gameTimer4 = 9; // 4~6번은 타이핑 미션
let gameTimer5 = 9;
let gameTimer6 = 9;

//박수기능
let input;
let analyzer;

let clapcount1 = 0;
let clapcount2 = 0;
let clapcount3 = 0;
let clapcount_tut = 0;

//타이핑기능
let randomArray = [
  "큐티뽀짝장기하",
  "날가져요장기하",
  "사랑해요장기하",
  "장기하콧대에베레스트산",
  "잘생겼다장기하",
  "우윳빛깔장기하",
  "최고존엄장기하",
  "멋있다장기하",
  "보고싶다장기하",
  "천하제일장기하",
  "남부럽지않은장기하",
  "세계제일귀요미장기하",
  "뇌가섹시한장기하",
]; // 응원구호 담는 어레이
//타이핑 버튼
let myInput, myInput2, myInput3, myInput_tut;
let myText, myText2, myText3, myText_tut;
let text_xpos;

//아웃트로
let flashlights = [];
let flashlights_fail = [];
//이미지
let introJang;
let happyJang;
let standJang;
let floatJang;
let heartJang;
let sadJang;

let sweat; //땀
let sigh; //한숨
let tutorial1; //튜토리얼 박수 이미지
let tutorial2; //튜토리얼 타이핑 이미지
let clap; //박수 이미지
let music; //오선보 이미지

// ending
let endingcap1;

//조명클래스
let lights = [];

// minigame3 변수들
let jang_intro; //intro 장기하 1
let jang_game3; //game3 장기하
let tu1, tu2;
let limit_s = 3; //after success
let towel; //손수건 이미지 변수
let Puff; //퍼프 이미지 변수
let bc; //부채 변수
let bc_l; //부채 왼
let bc_r; //부채 오
let bc_move;
let cbb; //말풍선 변수
let wind; // 바람 변수
let angry; //화남 변수
let hyu; //한숨 변수
let directionkey; // directionkey image

let htowel; //class 호출 : 손수건 움직이기
let g1; //class 호출: 게이지 높이기/낮추기
let g2;
let hf; //class 호출: 부채

let sweats = []; //손수건 게임 땀 어레이
let puffs = []; //퍼프 어레이
let winds = [];
let sweats2 = []; //부채 게임 땀 어레이
let xpos = []; //부채 x좌표
let idx = 1; // 부채 x좌표 어레이의 인덱스
let expl;
let expl2;
let heart;
let sweat_timing = 60;

let trpr = 0; //부채 투명도
let cam; //카메라 화면
let threshold = 100; //rgb 값 용

function setup() {
  createCanvas(800, 450);
  newsong.play();
  //testMP3.loop();
  for (let i = 0; i < 10; i++) {
    trashes[i] = new Trash(
      200,
      280 + i,
      random(-2, 3),
      random(1, 3),
      color(random(255), random(255), random(255))
    );
  }
  //setInterval(timeIt, 1000);

  //미니게임 3

  htowel = new Towel(1);
  g1 = new gage(700, 400, 0);
  g2 = new gage(700, 400, 0);

  cam = createCapture(VIDEO);
  cam.hide();

  xpos[0] = 0;
  expl = new explain();
  expl2 = new explain2();
  bc_move = new bc_lr(0);

  //박수
  input = new p5.AudioIn();
  input.start();

  //타이핑
  num_tut = int(random(0, randomArray.length));
  num1 = int(random(0, randomArray.length));
  num2 = int(random(0, randomArray.length));
  num3 = int(random(0, randomArray.length));

  myInput_tut = createInput("");
  myInput_tut.position(100, 350);
  myInput_tut.size(600, 30);
  myInput_tut.style("text-align", "center");
  myInput_tut.style("font-size", "20px");
  myInput_tut.style("font", "gangwon");
  myInput_tut.input(typing_tut);
  myText_tut = "";
  stuff_tut = "";

  myInput_tut.hide();

  myInput = createInput("");
  myInput.position(100, 350);
  myInput.size(600, 30);
  myInput.style("text-align", "center");
  myInput.style("font-size", "20px");
  myInput.input(typing);

  myText = "";
  stuff = "";

  myInput.hide();

  myInput2 = createInput("");
  myInput2.position(100, 350);
  myInput2.size(600, 30);
  myInput2.style("text-align", "center");
  myInput2.style("font-size", "20px");
  myInput2.input(typing2);

  myText2 = "";
  stuff2 = "";

  myInput2.hide();

  myInput3 = createInput("");
  myInput3.position(100, 350);
  myInput3.size(600, 30);
  myInput3.style("text-align", "center");
  myInput3.style("font-size", "20px");
  myInput3.input(typing3);

  myText3 = "";
  stuff3 = "";

  myInput3.hide();

  myInput_tut.id("myInput_tut");
  myInput.id("myInput");
  myInput2.id("myInput2");
  myInput3.id("myInput3");
  //조명, 손전등 클래스
  for (let i = 0; i < 10; i++) {
    lights[i] = new Light(50 + i * 100, 100, 500);
  }
  for (let j = 0; j < 20; j++) {
    flashlights_fail[j] = new Flashlight(
      random(width),
      random(50, height),
      random(10, 20)
    );
  }
  //글자움직임
  text_xpos = 0;

  //
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 40; j++) {
      flashlights[40 * i + j] = new Flashlight(
        40 * j + (i % 2) * 20 + random(-5, 5),
        40 * i + random(-10, 10),
        random(10, 20)
      );
    }
  }

  //next
  next = new Next();
  subcap1 = new Subcap();
  subcap2 = new Subcap();
  subcap3 = new Subcap();
  whitecap1 = new Whitecap();
  home = new Home();

  mouseClicked();
}

function preload() {
  // intro
  // 구성요소
  nextButton = loadImage("assets/next button.PNG");
  // 인트로 이미지
  jang1 = loadImage("assets/intro/인트로1.PNG");
  jeoncham = loadImage("assets/전참시.PNG");
  subtitle3 = loadImage("assets/(자막) 반가운 얼굴 장기하.png");
  speaking = loadImage("assets/speaking.PNG");
  jang2 = loadImage("assets/인트로2.PNG");
  subtitle2 = loadImage("assets/자막 내성적이었던.png");
  introOutro = loadImage("assets/intro outro.png");
  minigame1Intro = loadImage("assets/mini game 1 intro.png");
  jangSad = loadImage("assets/minigame1sadjang.PNG");
  todaysMission = loadImage("assets/intro/todaysmission.png");
  caution = loadImage("assets/intro/caution.png");
  endingcap1 = loadImage("assets/intro/endingcap1.png");
  eye1 = loadImage("assets/intro/eye1.jpg");
  eye2 = loadImage("assets/intro/eye2.jpg");
  eye3 = loadImage("assets/intro/eye3.jpg");
  endingSet = loadImage("assets/intro/ending_set.jpg");
  whiteHome = loadImage("assets/intro/homeButton.png");
  blackHome = loadImage("assets/intro/blackhome.png");
  concert = loadImage("assets/intro/concert.jpg");
  flying = loadImage("assets/intro/flying.PNG");
  ending_jang = loadImage("assets/intro/ending_jang.PNG");
  failending = loadImage("assets/intro/failending.png");
  happyending = loadImage("assets/intro/happyending.png");

  // 폰트
  gmM = loadFont("font/GmarketM.ttf");
  gangwon = loadFont("font/강원교육새음.ttf");

  // 브금
  testMP3 = loadSound("assets/intro/testBGM.mp3");
  newsong = loadSound("assets/intro/부럽지가않어.mp3");
  speakersound = loadSound("assets/minigame1/speakersound.mp3");
  cheer = loadSound("assets/minigame2/cheer.mp3");
  missionFail = loadSound("assets/minigame2/mission_fail.mp3");
  ost = loadSound("assets/minigame2/poongmun.mp3");
  gamechange = loadSound("assets/minigame3/gamechange.mp3");
  success = loadSound("assets/minigame3/success.mp3");
  fail = loadSound("assets/minigame3/fail.mp3");
  game3bgm = loadSound("assets/minigame3/minigame3.mp3");
  minigame1song = loadSound("assets/minigame1/minigame1song.mp3");

  //mini game 1
  glass = loadImage("assets/minigame1/glass.png");
  sofa = loadImage("assets/minigame1/sofa.png");
  plant = loadImage("assets/minigame1/green.png");
  button = loadImage("assets/minigame1/right.png");
  picture = loadImage("assets/minigame1/picture.png");
  left = loadImage("assets/minigame1/left.png");
  trashcan = loadImage("assets/minigame1/trashcan.png");
  turntrash = loadImage("assets/minigame1/turntrash.png");
  bear = loadImage("assets/minigame1/bear.png");
  speaker = loadImage("assets/minigame1/speaker.png");
  mic = loadImage("assets/minigame1/mic.png");
  outro = loadImage("assets/minigame1/outro.jpg");
  water = loadImage("assets/minigame1/water.png");
  boxs = loadImage("assets/minigame1/box.png");
  openBox = loadImage("assets/minigame1/openbox.png");
  jang_happy = loadImage("assets/minigame1/jang_happy.PNG");
  jang_sad = loadImage("assets/minigame1/jang_sad.PNG");
  waitingRoom = loadImage("assets/minigame1/waitingRoom.jpg");
  pillowO = loadImage("assets/minigame1/pillowO.png");
  pillowG = loadImage("assets/minigame1/pillowG.png");
  secretroom = loadImage("assets/minigame1/secretroom.png");
  letterout = loadImage("assets/minigame1/letterout.png");
  letterin = loadImage("assets/minigame1/letterin.png");
  diary = loadImage("assets/minigame1/diary.png");
  diaryin = loadImage("assets/minigame1/diaryin.png");
  keypad = loadImage("assets/minigame1/keypad.png");
  bearhead = loadImage("assets/minigame1/bearhead.png");
  bearbody = loadImage("assets/minigame1/bearbody.png");
  arm = loadImage("assets/minigame1/arm.png");
  click = loadImage("assets/minigame1/click.png");
  message = loadImage("assets/minigame1/message.png");

  //minigame2
  introJang = loadImage("assets/minigame2/introJang.PNG");
  standJang = loadImage("assets/minigame2/standJang.PNG");
  floatJang = loadImage("assets/minigame2/floatJang.PNG");
  happyJang = loadImage("assets/minigame2/happyJang.PNG");
  heartJang = loadImage("assets/minigame2/heartJang.PNG");
  sadJang = loadImage("assets/minigame2/sadJang.PNG");
  sweat = loadImage("assets/minigame2/sweat.PNG");
  sigh = loadImage("assets/minigame2/sigh.PNG");
  tutorial1 = loadImage("assets/minigame2/tutorial1.PNG");
  clap = loadImage("assets/minigame2/clap.png");
  music = loadImage("assets/minigame2/music.png");
  Mudae = loadImage("assets/minigame2/stage.PNG");
  clock = loadImage("assets/minigame2/clock.PNG");

  //minigame3
  jang_intro = loadImage("assets/minigame3/intro_jkh.PNG");
  jang_game3 = loadImage("assets/minigame3/game3_jkh.PNG");

  tu1 = loadImage("assets/minigame3/tutorial1.png");
  tu2 = loadImage("assets/minigame3/tutorial2.png");

  towel = loadImage("assets/minigame3/towel.png");
  Puff = loadImage("assets/minigame3/puff.png");
  bc = loadImage("assets/minigame3/bc.png");
  bc_l = loadImage("assets/minigame3/bc_left.png");
  bc_r = loadImage("assets/minigame3/bc_right.png");
  cbb = loadImage("assets/minigame3/cbb.png");
  wind = loadImage("assets/minigame3/wind.png");
  angry = loadImage("assets/minigame3/화남.PNG");
  hyu = loadImage("assets/minigame3/한숨.PNG");
  directionkey = loadImage("assets/minigame3/directionkey.png");
  heart = loadImage("assets/minigame3/heart-1.PNG");
}

function draw() {
  if (intro == true) {
    switch (stage) {
      case 0:
        //newsong.play();
        background(255);
        fill(0);
        noStroke();
        imageMode(CORNER);
        image(jang1, 100, 0, 800 * 0.9, 600 * 0.9);
        image(nextButton, 640, 405, 50, 50);
        textFont(gmM);
        textSize(60);
        textAlign(LEFT);
        text("장기하", 40, 70);
        text("괜찮게", 40, 130);
        text("만들어주기", 40, 190);
        textFont(gangwon);
        textSize(40);
        textAlign(CENTER, CENTER);
        text("여~ 심심하면", 660, 250);
        text("게임이나 하고 가~", 660, 280);
        textSize(60);
        textAlign(LEFT);
        text("PLAY", 690, 420);
        strokeWeight(5);
        stroke(145, 128, 105);
        line(25, 25, 25, height - 25);
        line(25, 25, width - 25, 25);
        line(width - 25, 25, width - 25, 400);
        line(25, height - 25, 227, height - 25);

        // TEST
        // noStroke();
        // fill(255, 255 - frameCount);

        break;

      case 1:
        newsong.stop();
        image(caution, 0, 0);
        next.display();
        home.display();
        //console.log(mouseX, '+', mouseY)
        //testMP3.play()
        //TEST

        break;

      case 2:
        background(255);
        background(138, 230, 219, 50);
        fill(134, 219, 218, 100);
        noStroke();
        rect(width / 6, height / 2, width / 3, height);
        rect((width * 5) / 6, height / 2, width / 3, height);
        image(jeoncham, 30, 0, 800 * 0.85, 600 * 0.85);
        image(
          speaking,
          120,
          130,
          speaking.width * 0.25,
          speaking.height * 0.25
        );
        subcap1.display(
          200,
          80,
          330,
          "오랜만에 신곡으로 돌아온 보고싶었던 얼굴!"
        );
        subcap2.display(200, 110, 220, "가수 장기하씨 모셨습니다~");
        next.display();
        home.display();
        break;

      case 3:
        background(255);
        background(138, 230, 219, 50);
        noStroke();
        fill(134, 219, 218, 50);
        rect(width / 10 + 30, height / 2, width / 3, height);
        fill(134, 219, 218, 50);
        rect(width / 10, height / 2, width / 3, height);
        image(jang1, 100, 0, 800 * 0.9, 600 * 0.9);
        textSize(30);
        textAlign(CENTER);
        subcap1.display(280, 150, 150, "하핫 안녕하세요");
        subcap2.display(280, 180, 140, "장기하입니다~");
        next.display();
        home.display();
        break;

      case 4:
        background(255);
        background(138, 230, 219, 50);
        fill(134, 219, 218, 100);
        noStroke();
        rect(width / 6, height / 2, width / 3, height);
        rect((width * 5) / 6, height / 2, width / 3, height);
        image(jeoncham, 30, 0, 800 * 0.85, 600 * 0.85);
        image(
          speaking,
          430,
          180,
          speaking.width * 0.25,
          speaking.height * 0.25
        );
        subcap1.display(510, 50, 150, "들어보니까 말이야");
        subcap2.display(510, 80, 320, "장기하 씨가 매니저랑 사연이 깊다던데");
        subcap2.display(510, 110, 180, "무슨 일인지 알려줘봐유");

        next.display();
        home.display();
        break;

      case 5:
        background(255);
        background(138, 230, 219, 50);
        noStroke();
        fill(134, 219, 218, 50);
        rect(width / 10 + 30, height / 2, width / 3, height);
        fill(134, 219, 218, 50);
        rect(width / 10, height / 2, width / 3, height);
        image(jang2, 100, 0, 800 * 0.9, 600 * 0.9);
        image(subtitle2, 170, 340);
        subcap1.display(180, 150, 220, "아 제가 공백기가 길었는데");
        subcap2.display(180, 180, 240, "그 동안 조금 외롭고 우울했어요");
        next.display();
        home.display();
        break;

      case 6:
        background(255);
        background(138, 230, 219, 50);
        noStroke();
        fill(134, 219, 218, 50);
        rect(width / 10 + 30, height / 2, width / 3, height);
        fill(134, 219, 218, 50);
        rect(width / 10, height / 2, width / 3, height);
        image(jang2, 100, 0, 800 * 0.9, 600 * 0.9);
        image(subtitle2, 170, 340);
        subcap1.display(180, 150, 220, "그럴 때마다 저희 매니저가");
        subcap2.display(180, 180, 180, "큰 힘이 되어줬는데..");
        home.display();
        next.display();
        // fill(255,millis()/10-150)
        // rect(width/2, height/2, width, height)
        // if(millis()/10-150>=300){
        //   stage=7;
        // }

        break;

      case 7:
        image(todaysMission, 0, 0);
        // console.log(300-millis()/30)
        // fill(255, 300-millis()/30)
        // noStroke();
        // rect(width/2, height/2, width, height)
        next.display();
        home.display();
        break;

      case 8:
        background(180);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);
        whitecap1.display("(엇.. 가수님이 울고 계신다..! 무슨 일이지..??)");
        next.display();
        home.display();
        break;

      case 9:
        background(180);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);
        whitecap1.display("가수님! 왜 울고 계세요?!");
        next.display();
        home.display();
        break;

      case 10:
        background(180);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);

        subcap1.display(630, 150, 100, "내 마이크...");
        subcap2.display(630, 180, 230, "애착 마이크를 잃어버렸어...");
        whitecap1.display("가수님! 왜 울고 계세요?!");
        next.display();
        home.display();
        break;

      case 11:
        background(180);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);
        whitecap1.display(
          "(공연이 얼마 남지 않았는데..! 얼른 가수님의 마이크를 찾아드려야 해!!)"
        );
        next.display();
        home.display();
        break;
    }
  } else if (minigame1 == true) {
    textFont(gangwon);
    switch (mini1) {
      case 99:
        background(210);
        noStroke();
        fill(140);
        rect(400, 70, 300, 380);
        fill(245, 250, 250);
        if (mouseX > 625 && mouseX < 675 && mouseY > 235 && mouseY < 285) {
          ellipse(650, 260, 50, 50);
        } else {
          ellipse(650, 260, 40, 40);
        }
        image(waitingRoom, 470, 100, 150, 100);
        fill(255, 230);
        rect(0, 350, width, 100);
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(35);
        text("문을 열고 얼른 대기실로 들어가자!", width / 2, 400);
        break;
      case 102: //대기실 1
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        if (mouseX >= 715 && mouseX <= 785 && mouseY >= 200 && mouseY <= 270) {
          image(button, 725, 215, 60, 70);
        } else {
          image(button, 730, 220, 50, 60);
        }

        image(sofa, 300, 120, 400, 205);

        if (mouseX >= 340 && mouseX <= 420 && mouseY >= 160 && mouseY <= 240) {
          image(bear, 335, 155, 90, 90);
        } else {
          image(bear, 340, 160, 80, 80);
        }

        if (mouseX > 530 && mouseX < 630 && mouseY > 155 && mouseY < 235) {
          image(pillowO, 530, 135, 100, 90);
        } else {
          image(pillowO, 530, 150, 100, 90);
        }

        if (mouseX > 480 && mouseX < 570 && mouseY > 190 && mouseY < 240) {
          image(pillowG, 480, 160, 90, 80);
        } else {
          image(pillowG, 480, 170, 90, 80);
        }

        if (mouseX > 150 && mouseX < 200 && mouseY > 210 && mouseY < 290) {
          image(speaker, 155, 245, 50, 50);
        } else {
          image(speaker, 160, 250, 40, 40);
        }

        if (mouseX > 150 && mouseX < 200 && mouseY > 210 && mouseY < 290) {
          if (mouseIsPressed) {
            speakersound.play();
          }
        }

        if (mouseX > 125 && mouseX < 275 && mouseY > 105 && mouseY < 315) {
          image(plant, 150, 100, 160, 220);
        } else {
          image(plant, 125, 105, 150, 210);
        }

        image(secretroom, 605, 60, 90, 50);
        image(letterout, 615, 70, 55, 35);

        if (mouseX >= 600 && mouseX <= 670 && mouseY >= 50 && mouseY <= 105) {
          if (mouseIsPressed) {
            image(letterin, 330, 25, 450, 420);
          }
        }

        if (mouseX > 600 && mouseX < 730 && mouseY > 20 && mouseY < 120) {
          push();
          translate(665, 20);
          rotate(radians(-10));
          image(picture, 0, 0, 130, 100);
          pop();
        } else {
          image(picture, 600, 20, 130, 100);
        }
        if (mouseX > 5 && mouseX < 135 && mouseY > 170 && mouseY < 310) {
          image(trashcan, 10, 165, 110, 185);
        } else {
          image(trashcan, 15, 170, 100, 175);
        }

        image(clock, 25, 5, 100, 100);
        textSize(55);
        fill(0);
        timer12 = 59 - int((millis() - timer11) / 1000);
        //console.log(timer12);
        textSize(40);
        text(timer12, 73, 50);
        if (timer12 == 0) {
          mini1 = 109;
          minigame1song.stop();
          fail.play();
        }
        noCursor();
        image(glass, mouseX, mouseY, 80, 80);
        break;
      case 103: // 쓰레기통 넘어짐
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        if (mouseX >= 715 && mouseX <= 785 && mouseY >= 200 && mouseY <= 270) {
          image(button, 725, 215, 60, 70);
        } else {
          image(button, 730, 220, 50, 60);
        }

        image(sofa, 300, 120, 400, 205);

        if (mouseX >= 340 && mouseX <= 420 && mouseY >= 160 && mouseY <= 240) {
          image(bear, 335, 155, 90, 90);
        } else {
          image(bear, 340, 160, 80, 80);
        }

        if (mouseX > 530 && mouseX < 630 && mouseY > 155 && mouseY < 235) {
          image(pillowO, 530, 135, 100, 90);
        } else {
          image(pillowO, 530, 150, 100, 90);
        }

        if (mouseX > 480 && mouseX < 570 && mouseY > 190 && mouseY < 240) {
          image(pillowG, 480, 160, 90, 80);
        } else {
          image(pillowG, 480, 170, 90, 80);
        }
        if (mouseX > 150 && mouseX < 200 && mouseY > 210 && mouseY < 290) {
          image(speaker, 155, 245, 50, 50);
        } else {
          image(speaker, 160, 250, 40, 40);
        }

        if (mouseX > 150 && mouseX < 200 && mouseY > 210 && mouseY < 290) {
          if (mouseIsPressed) {
            speakersound.play();
          }
        }

        if (mouseX > 125 && mouseX < 275 && mouseY > 105 && mouseY < 315) {
          image(plant, 150, 100, 160, 220);
        } else {
          image(plant, 125, 105, 150, 210);
        }

        image(secretroom, 605, 60, 90, 50);
        image(letterout, 615, 70, 55, 35);

        if (mouseX >= 600 && mouseX <= 670 && mouseY >= 50 && mouseY <= 105) {
          if (mouseIsPressed) {
            image(letterin, 330, 25, 450, 420);
          }
        }

        if (mouseX > 600 && mouseX < 730 && mouseY > 20 && mouseY < 120) {
          push();
          translate(665, 20);
          rotate(radians(-10));
          image(picture, 0, 0, 130, 100);
          pop();
        } else {
          image(picture, 600, 20, 130, 100);
        }

        for (let trash of trashes) {
          trash.move();
          trash.display();
        }
        image(turntrash, 5, 270, 185, 100);
        image(clock, 25, 5, 100, 100);
        fill(0);
        timer12 = 59 - int((millis() - timer11) / 1000);
        //console.log(timer12);
        textSize(40);
        text(timer12, 73, 50);
        if (timer12 == 0) {
          mini1 = 109;
          minigame1song.stop();
          fail.play();
        }
        noCursor();
        image(glass, mouseX, mouseY, 80, 80);
        break;
      case 104: //대기실 2
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(0, 0, 500, 250);
        fill(219, 213, 184);
        quad(500, 0, 800, 0, 800, 330, 500, 250);
        image(boxs, 400, 220, 120, 120);
        image(boxs, 480, 240, 120, 120);

        fill(100);
        rect(100, 35, 310, 75);
        textSize(42);
        fill(255);
        text("우윳빛깔 장 기 하", 253, 63);

        fill(50);
        rect(195, 235, 10, 100);
        quad(170, 335, 230, 335, 260, 350, 140, 350);
        fill(255);
        quad(40, 150, 350, 150, 380, 240, 10, 240);

        image(water, 280, 120, 60, 80);
        image(water, 310, 140, 60, 80);

        if (mouseX > 430 && mouseX < 550 && mouseY > 170 && mouseY < 290) {
          image(openBox, 410, 145, 160, 160);
        } else {
          image(boxs, 430, 170, 130, 130);
        }

        if (mouseX > 430 && mouseX < 550 && mouseY > 170 && mouseY < 290) {
          if (mouseIsPressed) {
            whitecap1.display(
              "상자 안엔 먼지밖에 없네, 마이크는 어디 가버린거지?"
            );
          }
        }

        if (mouseX > 30 && mouseX < 90 && mouseY > 200 && mouseY < 270) {
          image(left, 30, 215, 60, 70);
        } else {
          image(left, 35, 220, 50, 60);
        }

        if (mouseX > 160 && mouseX < 270 && mouseY > 120 && mouseY < 230) {
          image(diary, 155, 115, 120, 120);
        } else {
          image(diary, 160, 120, 110, 110);
        }
        if (mouseX >= 160 && mouseX <= 270 && mouseY >= 120 && mouseY <= 230) {
          if (mouseIsPressed) {
            image(diaryin, 200, 25, 450, 400);
          }
        }
        image(clock, 25, 5, 100, 100);
        fill(0);
        timer12 = 59 - int((millis() - timer11) / 1000);

        textSize(40);
        text(timer12, 73, 50);
        if (timer12 == 0) {
          mini1 = 109;
          minigame1song.stop();
          fail.play();
        }
        noCursor();
        image(glass, mouseX, mouseY, 80, 80);
        break;
      case 110: //곰인형 클릭 후 비밀번호 입력창 등장
        cursor();
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(button, 730, 220, 50, 50);
        image(sofa, 300, 120, 400, 205);
        image(bear, 340, 150, 100, 100);
        image(pillowO, 530, 150, 100, 90);
        image(pillowG, 480, 170, 90, 80);
        image(speaker, 160, 250, 40, 40);
        image(plant, 125, 105, 150, 210);
        image(picture, 600, 20, 130, 100);
        image(trashcan, 15, 170, 100, 175);
        image(keypad, 360, 50, 300, 360);
        //(394,352,231,35); 단서 더 찾기 영역
        //(394,190,231,35); 0616영역
        //(394,244,231,35); 0925 영역
        //(394,296,231,35); 0220 영역
        if (mouseX >= 543 && mouseX <= 625 && mouseY >= 130 && mouseY <= 160) {
          if (mouseIsPressed) {
            image(message, 400, 160, 180, 95);
          }
        }
        //(543,130,82,30); hint영역
        image(clock, 25, 5, 100, 100);
        fill(0);
        timer12 = 59 - int((millis() - timer11) / 1000);

        textSize(40);
        text(timer12, 73, 50);
        if (timer12 == 0) {
          mini1 = 109;
          minigame1song.stop();
          fail.play();
        }
        break;
      case 111: //비밀번호 입력 제대로 함(성공)
        cursor();
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(button, 730, 220, 50, 50);
        image(sofa, 300, 120, 400, 205);
        image(pillowO, 530, 150, 100, 90);
        image(pillowG, 480, 170, 90, 80);
        image(speaker, 160, 250, 40, 40);
        image(plant, 125, 105, 150, 210);
        image(picture, 600, 20, 130, 100);
        image(trashcan, 15, 170, 100, 175);
        if (mouseX > 340 && mouseX < 450 && mouseY > 120 && mouseY < 230) {
          image(mic, 340, 110, micSize + 10, micSize + 10);
        } else {
          image(mic, 343, 120, micSize, micSize);
        }
        image(bearbody, 350, 165, 85, 75);
        image(bearhead, 430, 180, 65, 65);
        image(clock, 25, 5, 100, 100);
        fill(0);
        timer12 = 59 - int((millis() - timer11) / 1000);

        textSize(40);
        text(timer12, 73, 50);
        if (timer12 == 0) {
          mini1 = 109;
          minigame1song.stop();
          fail.play();
        }
        break;
      case 112: //비밀번호 틀림
        cursor();
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(button, 730, 220, 50, 50);
        image(sofa, 300, 120, 400, 205);
        image(bear, 340, 150, 100, 100);
        image(pillowO, 530, 150, 100, 90);
        image(pillowG, 480, 170, 90, 80);
        image(speaker, 160, 250, 40, 40);
        image(plant, 125, 105, 150, 210);
        image(picture, 600, 20, 130, 100);
        image(trashcan, 15, 170, 100, 175);
        image(clock, 25, 5, 100, 100);
        fill(0);
        timer12 = 59 - int((millis() - timer11) / 1000);

        textSize(40);
        text(timer12, 73, 50);
        whitecap1.display(
          "비밀번호가 틀렸다! 시간이 없어, 빨리 단서를 더 찾자!"
        );
        if (timer12 == 0) {
          mini1 = 109;
          minigame1song.stop();
          fail.play();
        }

        break;
      case 105: //장기하 마이크 전달
        cursor();
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(button, 730, 220, 50, 50);
        image(sofa, 300, 120, 400, 205);
        image(bearbody, 350, 165, 85, 75);
        image(bearhead, 430, 180, 65, 65);
        image(pillowO, 530, 150, 100, 90);
        image(pillowG, 480, 170, 90, 80);
        image(speaker, 160, 250, 40, 40);
        image(plant, 125, 105, 150, 210);
        image(picture, 600, 20, 130, 100);
        image(trashcan, 15, 170, 100, 175);
        image(mic, 343, 120, micSize, micSize);
        micSize = micSize + 2;
        if (micSize >= 220) {
          micSize = 220;

          whitecap1.display("드디어 찾았다! 얼른 가수님께 가자!!");
          if (mouseX > 380 && mouseX < 567 && mouseY > 115 && mouseY < 345) {
            image(mic, 337, 115, 235, 235);
          } else {
            image(mic, 343, 120, 220, 220);
          }

          image(click, 495, 100, 130, 85);
        }
        break;
      case 107: //아웃트로1
        cursor();
        background(224, 207, 204);
        success1 = true;
        image(jang_sad, 0, 60);
        subcap1.display(ment - 40, 100, 190, "가수님 제가 왔어요~!!!");
        rectMode(CORNER); //
        ment = ment - 4;
        if (ment <= 630) {
          ment = 630;
        }

        image(arm, hand, 230, 300, 90);
        hand = hand - 2;
        if (hand <= 530) {
          hand = 530;
        }

        if (mouseX > 550 && mouseX < 650 && mouseY > 230 && mouseY < 330) {
          image(mic, micX, 190, 140, 140);
          micX = micX - 2;
        } else {
          image(mic, micX, 200, 135, 135);
          micX = micX - 2;
        }
        if (micX <= 520) {
          micX = 520;
        }
        break;

      case 108: //아웃트로 2
        cursor();
        background(255, 227, 217);
        image(jang_happy, 0, 0);
        subcap1.display(600, 200, 220, "이제 무대에 오를 수 있어요!");
        subcap2.display(600, 230, 130, "정말 고마워요 :>");
        next.display();
        home.display();
        image(mic, 300, 210, 180, 180);
        break;
      case 109: //실패 아웃트로
        cursor();
        background(224, 207, 204);
        image(jang_sad, 0, 60);
        textSize(30);
        textAlign(CENTER);
        subcap1.display(180, 150, 250, "애착 마이크가 없이 공연을 하니");
        subcap2.display(180, 180, 190, "힘이 하나도 없더라고요..");
        whitecap1.display(
          "마이크를 찾아드리지 못했다 .. 공연이라도 열심히 응원해야지!!!"
        );
        next.display();
        home.display();
        break;
      default:
    }
  } else if (minigame2 == true) {
    noStroke();
    imageMode(CENTER);
    textAlign(CENTER);
    switch (stage) {
      case 200:
        noStroke();
        background(44, 42, 79);
        imageMode(CENTER);
        image(happyJang, width / 2, height / 2, 700, 500);
        whitecap1.display(
          "무대에 올라가시기까지 이제 1분! 스탠바이 하고 계시는 가수님..."
        );

        next.display();
        home.display();
        break;

      case 201:
        background(44, 42, 79);
        image(introJang, width / 2, height / 2, 750, 550);
        image(sweat, 430, 130, 50, 50);
        whitecap1.display(
          "비상이다......  마이크도 찾았는데 가수님의 표정이 굳어있다!!"
        );
        next.display();
        home.display();
        break;

      case 202:
        background(44, 42, 79);
        image(introJang, width / 2, height / 2, 750, 550);
        image(sweat, 430, 130, 50, 50);
        image(sigh, 330, 240, 70, 70);
        whitecap1.display(
          "오랜만에 하는 공연을 앞두고 긴장이 되시는 모양. 아무래도 응원이 필요할 것 같아."
        );
        next.display();
        home.display();
        break;
      case 203:
        background(44, 42, 79);
        textSize(35);
        image(happyJang, width / 2, height / 2, 700, 500);
        image(sweat, 430, 130, 50, 50);
        image(sigh, 300, 195, 70, 70);
        whitecap1.display(
          "가수님의 1호 팬이 되어 응원을 하고 무대에 오른 가수님의 긴장을 풀어주자!"
        );
        next.display();
        home.display();
        break;
      case 205:
        background(200);
        image(tutorial1, width / 2, height / 2, width, height);
        break;
      case 207:
        //음성인식 튜토리얼
        micGame_tut();
        next.display();
        home.display();
        break;
      case 208:
        //타이핑 튜토리얼
        typingGame_tut();
        break;
      case 209:
        //시작하기 전에 준비시간 주기
        background(44, 42, 79);
        image(Mudae, width / 2, height / 2, 800, 450);
        image(standJang, width / 2, height / 2 - 30, 500, 350);
        fill(255);
        textAlign(CENTER);
        textSize(45);
        text(
          "이제 본 공연 시작합니다! 오른쪽 하단의 GO를 눌러주세요!",
          width / 2,
          height / 2
        );
        imageMode(CORNER);
        image(nextButton, 677, 408, 40, 40);
        fill(0);
        stroke(255);
        strokeWeight(3);
        textAlign(CENTER, CENTER);
        if (mouseX >= 685 && mouseX <= 780 && mouseY >= 415 && mouseY <= 438) {
          textSize(50);
        } else {
          textSize(40);
        }
        text("GO!", 750, 420);
        noStroke();
        break;
      case 210:
        background(44, 42, 79);
        image(Mudae, width / 2, height / 2, 800, 450);
        image(standJang, width / 2, height / 2 - 30, 500, 350);
        fill(255);
        textAlign(CENTER);
        textSize(150);
        text(startTimer - 1, width / 2, height / 2 - 40);
        if (frameCount % 60 == 0 && startTimer > 0) {
          startTimer--;
        }
        if (startTimer == 1) {
          background(44, 42, 79); //걍 다시 배경을 새로 그리는 게 지우는 방법인듯
          image(Mudae, width / 2, height / 2, 800, 450);
          image(standJang, width / 2, height / 2 - 30, 500, 350);
          fill(255);
          text("start!!", width / 2, height / 2 - 40);
        }
        if (startTimer == 0) {
          background(44, 42, 79);
          ost.play();
          stage = 250;
        }
        break;

      case 250:
        micGame1();
        break;
      case 251:
        typingGame1();
        break;
      case 252:
        micGame2();
        break;
      case 253:
        typingGame2();
        break;
      case 254:
        micGame3();
        break;
      case 255:
        typingGame3();
        break;
      case 256:
        //결과 대기 화면
        background(44, 42, 79);
        image(introJang, width / 2, height / 2, 800, 600);
        whitecap1.display("공연이 끝났다! 과연 응원이 힘이 되었을까??");
        next.display();
        home.display();
        break;
      case 257:
        //실패 대기 화면
        background(44, 42, 79);
        for (let each of flashlights_fail) {
          each.display();
        }
        image(sadJang, 700, 400, 700, 350);
        fill(252, 215, 30, 40);
        quad(400, 0, 350, 0, 650, 600, 900, 600);
        textSize(23);
        fill(255);
        text("아닛.. 이게 뭐야..", 700, height / 2);
        next.display();
        home.display();
        break;
      case 258:
        //실패
        background(44, 42, 79);
        for (let each of flashlights_fail) {
          each.display();
          each.move();
        }
        image(sadJang, 700, 400, 700, 350);
        fill(252, 215, 30, 40);
        quad(400, 0, 350, 0, 650, 600, 900, 600);
        textAlign(CENTER);
        fill(255);
        textSize(40);
        text(
          "아무래도 응원이 충분하지 않았나... 괜찮아!! 아직 공연 안끝났어",
          width / 2,
          height / 2 - 140
        );
        next.display();
        home.display();
        break;
      case 259:
        background(44, 42, 79);
        success2 = true;
        for (let each of flashlights) {
          each.display();
        }
        image(heartJang, 700, 400, 600, 350);
        fill(255);
        textSize(23);
        textAlign(CENTER, CENTER);
        text("!!아니 이게 모야!!", 700, height / 2);
        fill(252, 215, 30, 40);
        quad(400, 0, 350, 0, 600, 600, 900, 600);
        fill(0);
        next.display();
        home.display();
        break;
      case 260:
        background(44, 42, 79);
        for (let each of flashlights) {
          each.display();
          each.move();
        }
        image(heartJang, 700, 400, 600, 350);
        fill(255);
        textSize(23);
        textAlign(CENTER, CENTER);
        text("ㅠㅠ감동이야ㅠ", 700, height / 2);

        fill(252, 215, 30, 40);
        quad(400, 0, 350, 0, 600, 600, 900, 600);
        textAlign(CENTER);
        fill(255);
        textSize(43);
        text(
          "응원은 성공적이었다! 장기하님의 자존감이 만땅 찼다!",
          width / 2,
          height / 2 - 100
        );
        fill(0);
        next.display();
        home.display();
        break;
    }
  } else if (minigame3 == true) {
    textAlign(LEFT);
    imageMode(CORNER);
    textFont(gangwon);
    switch (stage) {
      case 299: //
        background(32, 45, 163);
        for (let light of lights) {
          light.display();
          light.oscillate();
        }
        fill(180);
        noStroke();
        quad(100, 350, 700, 350, 1200, 600, -400, 600);
        image(jang_intro, -100, 0);
        whitecap1.display("드디어 첫 곡을 끝낸 가수님!");
        next.display();
        home.display();
        break;
      case 300:
        for (let light of lights) {
          light.display();
        }
        fill(180);
        quad(100, 350, 700, 350, 1200, 600, -400, 600);
        image(jang_intro, -300, -30, 1440, 1080);
        whitecap1.display("오랜만의 무대라 그런지 많이 지치신 것 같다...");
        noStroke();
        fill(194, 209, 254);
        triangle(380, 120, 385, 130, 375, 130);
        circle(380, 135, 13);
        triangle(430, 90, 435, 100, 425, 100);
        circle(430, 105, 13);
        fill(0);
        next.display();
        home.display();
        break;
      case 301:
        for (let light of lights) {
          light.display();
        }
        fill(180);
        quad(100, 350, 700, 350, 1200, 600, -400, 600);
        image(jang_intro, -300, -30, 1440, 1080);
        stroke(255);
        strokeWeight(2);
        fill(50, 50, 255);
        textSize(25);
        text("Power up!", 480, 100);
        text("Power up!", 270, 50);
        whitecap1.display("다음 무대 전까지 지친 가수님을 회복시켜드리자!");
        next.display();
        home.display();
        break;

      case 302:
        image(tu1, 0, 0, 800, 450);
        next.display();
        home.display();
        break;
      case 306:
        image(tu2, 0, 0, 800, 450);
        imageMode(CORNER);
        image(nextButton, 677, 408, 40, 40);
        fill(0);
        stroke(255);
        strokeWeight(3);
        textAlign(CENTER, CENTER);
        if (mouseX >= 685 && mouseX <= 780 && mouseY >= 415 && mouseY <= 438) {
          textSize(50);
        } else {
          textSize(40);
        }
        text("GO!", 750, 420);
        noStroke();
        break;

      case 307: // 게임
        //console.log(mouseX+","+mouseY);
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(sofa, 300, 100, 400, 250);
        image(pillowO, 530, 160, 100, 90);
        image(pillowG, 480, 180, 90, 80);

        image(jang_game3, -240, -30, 1200, 675);

        //타이머
        image(clock, 25, 5, 100, 100);
        textSize(55);
        fill(0);
        timer32 = 30 - int((millis() - timer31) / 1000);
        // console.log(timer32);
        strokeWeight(3);
        stroke(255);
        if (timer32 >= 10) text(timer32, 55, 47);
        else if (timer32 < 10 && timer32 > 0) text("0" + timer32, 55, 47);
        else if (timer32 <= 0) {
          game3bgm.stop();
          fail.play();
          stage = 312;
        }

        //explain
        if (timer32 >= 20) expl.show();
        strokeWeight(3);
        fill(229, 172, 32, 100);
        stroke(180);
        rect(660, 10, 120, 75, 10);
        noStroke();
        fill(144, 159, 254);
        circle(695, 60, 27);
        triangle(695, 23, 709, 60, 681, 60);
        image(Puff, 730, 28, 40, 40);
        strokeWeight(5);
        stroke(255, 0, 0);
        noFill();
        circle(695, 50, 55);
        line(730, 20, 770, 73);
        line(770, 20, 730, 73);

        //땀
        if (frameCount % 10 == 0) {
          moreSweat();
        }
        for (let each of sweats) {
          each.display();
          if (
            dist(htowel.x + 25, htowel.y + 25, each.x, each.y + 15) <=
            each.r * 1.5
          ) {
            each.bool = 0;
            g1.y -= 3;
            g1.h += 3;
            if (g1.y <= 100) {
              gamechange.play();
              timer31 = millis();
              stage = 308;
            }
          }
        }

        //puff
        if (frameCount % 80 == 0) {
          morePuff();
        }
        for (let each of puffs) {
          each.display();
          if (
            dist(htowel.x + 25, htowel.y + 25, each.x + 20, each.y + 20) <= 20
          ) {
            image(angry, 450, 150, 50, 50);
            each.bool = 0;
            g1.y += 0.7;
            g1.h -= 0.7;
          }
        }

        //손수건
        htowel.update();
        htowel.show();

        //게이지
        stroke(0);
        strokeWeight(2);
        fill(204, 219, 254);
        rect(700, 100, 50, 300);
        g1.display();

        //부채 라인
        image(bc, 620, 80, 40, 50);
        line(670, 100, 780, 100);
        //console.log(mouseX+","+mouseY);

        //부채_큰
        hf = new handfan(1, g1.h);
        hf.display();

        if (g1.y <= 200) {
          textSize(30);
          stroke(255);
          strokeWeight(3);
          fill(0);
          text("곧 부채로 바뀝니다!", 20, 260);
        }

        break;

      case 308:
        // 카메라 화면
        let sumX = 0;
        let sumY = 0;
        let count = 0;
        push();
        translate(width, 0);
        scale(-1, 1);

        let cwidth = map(cam.width, 0, 640, 0, 800);
        let cheight = map(cam.height, 0, 480, 0, 450);
        image(cam, 0, 0, cwidth, cheight);
        cam.loadPixels();
        // console.log(cwidth+","+cheight);

        for (let y = 0; y < cam.height; y++) {
          for (let x = 0; x < cam.width; x++) {
            let index = (y * cam.width + (cam.width - x - 1)) * 4;
            let r = cam.pixels[index + 0];
            let g = cam.pixels[index + 1];
            let b = cam.pixels[index + 2];
            let a = cam.pixels[index + 3];
            let redity = r - (g + b) / 2;
            if (redity > threshold) {
              sumX += x;
              sumY += y;
              count++;
            }
          }
        }
        pop();
        image(jang_game3, -240, -30, 1200, 675);

        //타이머
        image(clock, 25, 5, 100, 100);
        textSize(55);
        strokeWeight(3);
        stroke(255);
        fill(0);
        timer32 = 20 - int((millis() - timer31) / 1000);
        if (timer32 >= 10) text(timer32, 55, 47);
        else if (timer32 < 10 && timer32 > 0) text("0" + timer32, 55, 47);
        else if (timer32 <= 0) {
          game3bgm.stop();
          fail.play();
          stage = 312;
        }
        // console.log(timer32);

        //게이지
        stroke(0);
        strokeWeight(2);
        fill(194, 209, 254);
        rect(700, 100, 50, 300);
        g2.display();

        //땀
        if (frameCount % sweat_timing == 0) {
          moreSweat();
        }
        for (let each of sweats) each.display();

        //시원
        if (g2.y <= 300) {
          fill(50, 50, 255);
          stroke(255);
          strokeWeight(5);
          text("아 시원하다~!", 70, 150);
        }
        if (g2.y <= 200) {
          text("이제 좀 살 것 같다!", 500, 250);
        }

        if (count != 0) {
          let meanX = map(sumX / count, 0, 640, 0, 800);
          let meanY = map(sumY / count, 0, 480, 0, 450);

          //부채 따라다니기
          // imageMode(CENTER);
          // image(bc, meanX, meanY, 200, 250);

          if (frameCount % 5 == 0) {
            xpos.push(meanX);
            //부채 왼오
            if (xpos[idx] < width / 2) {
              bc_move.b = 0;
              bc_move.show();
            } else if (xpos[idx] > width / 2) {
              bc_move.b = 1;
              bc_move.show();
            }
            if (abs(xpos[idx] - xpos[idx - 1]) > 300) {
              g2.y -= 17;
              g2.h += 17;
              sweat_timing += 10;
              if (g2.h >= 300 && g2.y <= 100) {
                g2.h = 300;
                g2.y = 100;
                game3bgm.stop();
                stage = 309;
                break;
              }
            }
            idx++;
          }
        }

        //explain
        if (timer32 >= 15) expl2.show();

        break;

      case 309:
        background(117, 164, 241, 20);
        textSize(50);
        fill(0);
        text("Success!", 300, 200);
        if (frameCount % 60 == 0 && limit_s > 0) {
          limit_s--;
        }
        if (limit_s == 0) {
          success.play();
          stage = 311;
        }
        break;
      case 310:
        noStroke();
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(sofa, 300, 100, 400, 250);
        image(pillowO, 530, 160, 100, 90);
        image(pillowG, 480, 180, 90, 80);
        image(jang_game3, -240, -30, 1200, 675);
        image(cbb, 30, 20, 200, 100);
        strokeWeight(3);
        stroke(255);
        fill(255, 0, 0);
        textSize(20);
        text("다음 무대 가셔야 해요!", 70, 70);
        image(angry, 450, 150, 50, 50);
        image(hyu, 270, 250, 50, 50);
        fill(0);
        textSize(30);
        text("아우 더워..", 550, 200);
        next.display();
        home.display();
        break;
      case 311:
        noStroke();
        success3 = true;
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(sofa, 300, 100, 400, 250);
        image(pillowO, 530, 160, 100, 90);
        image(pillowG, 480, 180, 90, 80);
        image(jang_game3, -240, -30, 1200, 675);
        image(cbb, 30, 20, 200, 100);
        fill(0);
        strokeWeight(3);
        stroke(255);
        textSize(20);
        text("다음 무대 준비해주세요~!", 60, 70);
        textSize(40);
        text("덕분에 컨디션 회복 완료!", 10, 200);
        text("고마워요 ㅎㅎ", 550, 200);
        image(heart, 290, 130, 70, 70);
        image(heart, 368, 150, 70, 70);
        // console.log(mouseX+","+mouseY);
        next.display();
        home.display();
        break;
      case 312:
        noStroke();
        background(181, 175, 158);
        noStroke();
        fill(235, 228, 197);
        rect(250, 0, 800, 250);
        fill(219, 213, 184);
        quad(0, 0, 250, 0, 250, 250, 0, 330);
        image(sofa, 300, 100, 400, 250);
        image(pillowO, 530, 160, 100, 90);
        image(pillowG, 480, 180, 90, 80);
        image(jang_game3, -240, -30, 1200, 675);
        image(cbb, 30, 20, 200, 100);
        strokeWeight(3);
        stroke(255);
        fill(255, 0, 0);
        textSize(20);
        text("무대 순서 변경됐습니다!", 70, 55);
        text("지금 바로 무대 가셔야 해요!", 60, 85);
        image(angry, 450, 150, 50, 50);
        image(hyu, 270, 250, 50, 50);
        fill(0);
        textSize(40);
        text("아우 더워..", 550, 200);
        next.display();
        home.display();
        break;
    }
  } else if (ending == true) {
    switch (stage) {
      case 400:
        image(endingSet, 0, 0);

        next.display();
        home.display();
        break;

      case 401:
        background(255);
        background(138, 230, 219, 50);
        noStroke();
        fill(134, 219, 218, 50);
        rect(width / 10 + 30, height / 2, width / 3, height);
        fill(134, 219, 218, 50);
        rect(width / 10, height / 2, width / 3, height);
        image(jang1, 100, 0, 800 * 0.9, 600 * 0.9);
        textSize(30);
        textAlign(CENTER);
        subcap1.display(200, 150, 160, "뭐 그런 일들이 있었죠");
        subcap2.display(200, 180, 290, "저희 매니저가 큰 도움이 되었어요");
        next.display();
        home.display();
        break;

      case 402:
        background(255);
        background(138, 230, 219, 50);
        noStroke();
        fill(134, 219, 218, 50);
        rect(width / 10 + 30, height / 2, width / 3, height);
        fill(134, 219, 218, 50);
        rect(width / 10, height / 2, width / 3, height);
        image(jang2, 80, -10, 800, 600);
        textSize(30);
        textAlign(CENTER);
        subcap1.display(
          220,
          300,
          300,
          "그리고 여기서 처음 말하는 거긴 한데..."
        );
        subcap2.display(
          220,
          330,
          360,
          "이번 신곡도 우리 매니저로부터 영감을 받았어요"
        );
        next.display();
        home.display();
        break;

      case 403:
        background(255);
        background(138, 230, 219, 50);
        noStroke();
        fill(134, 219, 218, 50);
        rect(width / 10 + 30, height / 2, width / 3, height);
        fill(134, 219, 218, 50);
        rect(width / 10, height / 2, width / 3, height);
        image(jang1, 100, 0, 800 * 0.9, 600 * 0.9);
        image(endingcap1, -100, 30, 150 * 4, 50 * 4);
        textSize(30);
        textAlign(CENTER);
        subcap1.display(220, 300, 290, "그렇게 날 아껴주는 사람이 있는데");
        subcap2.display(220, 330, 330, "세상에 부러울 게 뭐가 있나 하고...☆");
        next.display();
        home.display();
        timer51 = millis();
        break;

      case 404:
        timer52 = millis() - timer51;
        textAlign(CENTER, CENTER);
        textFont(gangwon);
        textSize(100);
        image(concert, 0, 0);
        whitecap1.display("그리고 오늘은 드디어 가수님의 컴백 콘서트!");
        next.display();
        home.display();
        fill(0, 255 - timer52 / 20);
        rect(0, 0, width, height);
        break;

      case 405:
        imageMode(CENTER);
        for (let light of lights) {
          light.display();
          light.oscillate();
        }
        image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
        fill(255);
        image(
          standJang,
          width / 2,
          height / 2 - 30,
          standJang.width * 0.5,
          standJang.height * 0.5
        );

        whitecap1.display(
          "팬분들께 신곡을 들려드린다고 얼마나 들뜨셨던지~ 그리고..!"
        );
        next.display();
        home.display();

        break;

      case 406:
        imageMode(CENTER);
        for (let light of lights) {
          light.display();
          light.oscillate();
        }
        image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
        image(flying, width / 2 - 80, 180, flying.width, flying.height);
        whitecap1.display("공중부양 퍼포먼스까지~ 오늘 콘서트는 성공적이야!");
        next.display();
        home.display();
        break;

      case 407:
        imageMode(CENTER);
        for (let light of lights) {
          light.display();
          light.oscillate();
        }
        image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
        image(flying, width / 2 - 80, 180, flying.width, flying.height);
        subcap1.display(170, 90, 260, "오늘 콘서트 보러와주신 모든 팬 분들");
        subcap1.display(170, 120, 150, "감사드려요, 그리고...");
        whitecap1.display("(앗 이제 마무리하시려나보다!)");
        next.display();
        home.display();
        break;

      case 408:
        imageMode(CENTER);
        for (let light of lights) {
          light.display();
          light.oscillate();
        }
        image(
          ending_jang,
          width / 2,
          height / 2,
          ending_jang.width,
          ending_jang.height
        );
        subcap1.display(190, 120, 280, "부끄러워서 말 못했지만 우리 매니저");
        subcap1.display(190, 150, 130, "내가 항상 고마워");
        whitecap1.display("!!!!");
        next.display();
        home.display();
        break;

      case 409:
        imageMode(CENTER);
        for (let light of lights) {
          light.display();
          light.oscillate();
        }
        image(
          ending_jang,
          width / 2,
          height / 2,
          ending_jang.width,
          ending_jang.height
        );
        subcap1.display(190, 120, 250, "이번 곡도 너 덕분에 쓸 수 있었어");
        subcap1.display(190, 150, 140, "나랑 오래오래 보자");
        whitecap1.display("(심쿵) 가수님ㅠㅠㅠ감동이에요 ㅠㅠㅠㅠ");
        next.display();
        home.display();
        timer41 = millis();
        break;

      case 410:
        imageMode(CENTER);
        image(happyending, width / 2 - 39, height / 2);
        break;

      case 420:
        background(180);
        timer42 = (millis() - timer41) / 1000;
        if (timer42 <= 1) {
          fill(0);
          rectMode(CORNER);
          rect(0, 0, width, height);
        } else if (timer42 <= 2) {
          image(eye1, 0, 0);
          whitecap1.display("(와아아,,?)");
        } else if (timer42 <= 3) {
          image(eye2, 0, 0);
          whitecap1.display("(응,,?)");
        } else if (timer42 <= 4) {
          image(eye1, 0, 0);
          whitecap1.display("(????)");
        } else if (timer42 <= 5) {
          image(eye3, 0, 0);
          whitecap1.display("(이게 뭐야,,,?)");
        } else {
          image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);
          whitecap1.display("(설마,,,?)");
          next.display();
          home.display();
        }

        break;

      case 421:
        background(180);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);
        image(jangSad, -40, 50, 800 * 1.1, 400 * 1.1);

        subcap1.display(630, 150, 200, "매니저야...너 자는 동안");
        subcap2.display(630, 180, 230, "애착 마이크를 잃어버렸어...");
        whitecap1.display("아 안돼!! 모두 꿈이었어!!!ㅠㅠㅠㅠㅠ");
        next.display();
        home.display();
        break;

      case 422:
        imageMode(CENTER);
        image(failending, width / 2, height / 2);
        break;
    }
  }
}
function micGame1() {
  noStroke();
  textAlign(LEFT);
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
  fill(255);
  ellipse(600, 260, 220, 220);
  textSize(33);
  fill(0);
  text("박수를", 570 + random(-1, 1), 291 + random(-1, 1));
  text("계속 쳐주세요!", 533 + random(-1, 1), 321 + random(-1, 1));
  textSize(30);
  fill(255);
  text("여러분 박수 한 번 !", 45 + random(-1, 1), 105 + random(-1, 1));

  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(clap, 600, height / 2, 200, 100);

  let volume = input.getLevel();

  let threshold = 0.2;
  if (volume > threshold) {
    clapcount1 += 0.5;
  }

  let y = map(volume, 0, 1, height, 150);
  let ythreshold = map(threshold, 0, 1, height, 150);

  fill(175);
  rect(50, 150, 30, height);
  fill(255, 172, 203);
  rect(50, y, 30, y);
  stroke(0);
  line(50, ythreshold, 80, ythreshold);

  noStroke();
  fill(255);
  textSize(30);
  text("데시벨 기준", 100, ythreshold);
  textSize(80);
  text("점수: " + int(clapcount1) + "/30", 490, 60);

  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(gameTimer1, 55, 47);
  noStroke();
  if (frameCount % 60 == 0 && gameTimer1 > 0) {
    gameTimer1--;
  }

  if (clapcount1 >= 30) {
    background(0);
    cheer.play();
    count += 1;
    stage += 1;
  }
  if (gameTimer1 == 0) {
    missionFail.play();
    stage += 1;
  }
}

function micGame2() {
  noStroke();
  textAlign(LEFT);
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
  fill(255);
  ellipse(600, 260, 220, 220);
  textSize(33);
  fill(0);
  text("박수를", 570 + random(-1, 1), 291 + random(-1, 1));
  text("계속 쳐주세요!", 533 + random(-1, 1), 321 + random(-1, 1));
  textSize(30);
  fill(255);
  text("박수 소리가 안들려요~~~~", 45 + random(-1, 1), 105 + random(-1, 1));

  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(clap, 600, height / 2, 200, 100);

  let volume = input.getLevel();

  let threshold = 0.3;
  if (volume > threshold) {
    clapcount2 += 0.5;
  }

  let y = map(volume, 0, 1, height, 150);
  let ythreshold = map(threshold, 0, 1, height, 150);

  fill(175);
  rect(50, 150, 30, height);
  fill(172, 255, 203);
  rect(50, y, 30, y);
  stroke(0);
  line(50, ythreshold, 80, ythreshold);

  noStroke();
  fill(255);
  textSize(30);
  text("데시벨 기준", 100, ythreshold);
  textSize(80);
  text("점수: " + int(clapcount2) + "/30", 490, 60);
  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(gameTimer2, 55, 47);
  noStroke();
  if (frameCount % 60 == 0 && gameTimer2 > 0) {
    gameTimer2--;
  }
  if (clapcount2 >= 30) {
    background(0);
    cheer.play();
    count += 1;
    stage += 1;
  }
  if (gameTimer2 == 0) {
    missionFail.play();
    stage += 1;
  }
}

function micGame3() {
  noStroke();
  textAlign(LEFT);
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
  fill(255);
  ellipse(600, 260, 220, 220);
  textSize(33);
  fill(0);
  text("박수를", 570 + random(-1, 1), 291 + random(-1, 1));
  text("계속 쳐주세요!", 533 + random(-1, 1), 321 + random(-1, 1));
  textSize(30);
  fill(255);
  text(
    "여러분~ 마지막으로 소리질러~~!",
    45 + random(-1, 1),
    105 + random(-1, 1)
  );

  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(clap, 600, height / 2, 200, 100);

  let volume = input.getLevel();

  let threshold = 0.4;
  if (volume > threshold) {
    clapcount3 += 0.5;
  }

  let y = map(volume, 0, 1, height, 150);
  let ythreshold = map(threshold, 0, 1, height, 150);

  fill(175);
  rect(50, 150, 30, height);
  fill(203, 172, 255);
  rect(50, y, 30, y);
  stroke(0);
  line(50, ythreshold, 80, ythreshold);

  noStroke();
  fill(255);
  textSize(30);
  text("데시벨 기준", 100, ythreshold);
  textSize(80);
  text("점수: " + int(clapcount3) + "/30", 490, 60);
  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(gameTimer3, 55, 47);
  noStroke();
  if (frameCount % 60 == 0 && gameTimer3 > 0) {
    gameTimer3--;
  }
  if (clapcount3 >= 30) {
    background(0);
    cheer.play();
    count += 1;
    stage += 1;
  }
  if (gameTimer3 == 0) {
    missionFail.play();
    stage += 1;
  }
}

function micGame_tut() {
  noStroke();
  textAlign(LEFT);
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450); //이부분 변화.
  fill(255);
  ellipse(600, 260, 220, 220);
  textSize(33);
  fill(0);
  text("박수를", 570 + random(-1, 1), 291 + random(-1, 1));
  text("계속 쳐주세요!", 533 + random(-1, 1), 321 + random(-1, 1));
  textSize(30);
  fill(255);
  text(
    "박수 기능 확인하고 넘어가주세요!",
    45 + random(-1, 1),
    105 + random(-1, 1)
  );

  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(clap, 600, height / 2, 200, 100);

  let volume = input.getLevel();

  let threshold = 0.4;
  if (volume > threshold) {
    clapcount_tut += 0.5;
  }

  let y = map(volume, 0, 1, height, 150);
  let ythreshold = map(threshold, 0, 1, height, 150);

  fill(0, 255, 0);
  textSize(100);
  text("튜토리얼", 108, 170);
  fill(175);
  rect(50, 150, 30, height);
  fill(255, 172, 203);
  rect(50, y, 30, y);
  stroke(0);
  line(50, ythreshold, 80, ythreshold);

  noStroke();
  fill(255);
  textSize(30);
  text("데시벨 기준", 100, ythreshold);
  textSize(80);
  text("점수: " + int(clapcount_tut) + "/30", 490, 60);
  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(tutTimer, 55, 47);
  noStroke();
  if (frameCount % 60 == 0 && tutTimer > 0) {
    tutTimer--;
  }
  if (tutTimer == 0) {
    stage += 1;
  }
}

function typingGame1() {
  noStroke();
  textAlign(LEFT);
  textFont(gangwon);
  myInput.show();
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450);
  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(music, width / 2, height / 2 + 30, 700, 200);
  fill(127);
  rect(93, 340, 620, 60);

  textSize(30);
  fill(255);
  text(
    "여러분~ 응원구호 다 외우셨죠？",
    45 + random(-1, 1),
    105 + random(-1, 1)
  );

  textSize(30);
  text("실제 입력은 " + stuff, width / 2 - 100, 420);

  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(gameTimer4, 55, 47);

  noStroke();
  textAlign(CENTER);
  textSize(70);
  fill(255);
  textFont(gmM);
  text(
    randomArray[num1],
    width / 2 + random(-1, 1),
    height / 2 + random(-1, 1)
  );

  if (randomArray[num1] == myText) {
    myInput.hide();
    background(0);
    textFont(gangwon);
    cheer.play();
    count += 1;
    stage += 1;
  }

  if (frameCount % 60 == 0 && gameTimer4 > 0) {
    gameTimer4--;
  }
  if (gameTimer4 == 0) {
    myInput.hide();
    background(0);
    textFont(gangwon);
    missionFail.play();
    stage += 1;
  }
}

function typingGame2() {
  noStroke();
  textAlign(LEFT);
  textFont(gangwon);
  myInput2.show();
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450);
  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(music, width / 2, height / 2 + 30, 700, 200);
  fill(127);
  rect(93, 340, 620, 60);

  textSize(30);
  fill(255);
  text("감동받았어요 여러분,,", 45 + random(-1, 1), 105 + random(-1, 1));

  textSize(30);
  text("실제 입력은  " + stuff2, width / 2 - 100, 420);

  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(gameTimer5, 55, 47);

  noStroke();
  textAlign(CENTER);
  fill(255);
  textSize(70);
  textFont(gmM);
  text(
    randomArray[num2],
    width / 2 + random(-5, 5),
    height / 2 + random(-5, 5)
  );

  if (randomArray[num2] == myText2) {
    myInput2.hide();
    background(0);
    textFont(gangwon);
    cheer.play();
    count += 1;
    stage += 1;
  }

  if (frameCount % 60 == 0 && gameTimer5 > 0) {
    gameTimer5--;
  }
  if (gameTimer5 == 0) {
    myInput2.hide();
    background(0);
    textFont(gangwon);
    missionFail.play();
    stage += 1;
  }
}

function typingGame3() {
  noStroke();
  textAlign(LEFT);
  textFont(gangwon);
  myInput3.show();
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450);
  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(music, width / 2, height / 2 + 30, 700, 200);
  fill(127);
  rect(93, 340, 620, 60);

  textSize(30);
  fill(255);
  text("빠르게도 할 수 있겠죠??!!", 45 + random(-1, 1), 105 + random(-1, 1));

  textSize(30);
  text("실제 입력은  " + stuff3, width / 2 - 100, 420);
  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(gameTimer6, 55, 47);

  noStroke();
  textAlign(CENTER);
  fill(255);
  textSize(70);
  textFont(gmM);
  text(randomArray[num3], text_xpos, height / 2);
  text_xpos += 15;
  if (text_xpos > width) {
    text_xpos = 0;
  }
  if (randomArray[num3] == myText3) {
    myInput3.hide();
    background(0);
    textFont(gangwon);
    cheer.play();
    ost.stop();
    count += 1;
    stage += 1;
  }

  if (frameCount % 60 == 0 && gameTimer6 > 0) {
    gameTimer6--;
  }
  if (gameTimer6 == 0) {
    myInput3.hide();
    background(0);
    textFont(gangwon);
    missionFail.play();
    ost.stop();
    stage += 1;
  }
}

function typingGame_tut() {
  noStroke();
  textAlign(LEFT);
  textFont(gangwon);
  myInput_tut.show();
  for (let light of lights) {
    light.display();
    light.oscillate();
  }
  image(Mudae, width / 2, height / 2, 800, 450);
  image(standJang, width / 2, height / 2 - 30, 500, 350);
  image(music, width / 2, height / 2 + 30, 700, 200);
  fill(127);
  rect(93, 340, 620, 60);

  textSize(30);
  fill(255);
  text("문장 입력하시고 넘어가세요", 45 + random(-1, 1), 105 + random(-1, 1));

  textSize(30);
  text("실제 입력은  " + stuff_tut, width / 2 - 100, 420);

  image(clock, 65, 55, 100, 100);
  textSize(55);
  stroke(255);
  fill(0);
  text(tutTimer2, 55, 47);
  noStroke();

  textAlign(CENTER);
  textSize(70);
  textFont(gmM);
  fill(0, 255, 0);
  text("튜토리얼입니다", width / 2 + random(-1, 1), height / 2 + random(-1, 1));
  if ("튜토리얼입니다" == myText_tut) {
    myInput_tut.hide();
    background(0);
    textFont(gangwon);
    fill(255);
    stage += 1;
  }

  if (frameCount % 60 == 0 && tutTimer2 > 0) {
    tutTimer2--;
  }
  if (tutTimer2 == 0) {
    myInput_tut.hide();
    background(0);
    textFont(gangwon);
    stage += 1;
  }
}
function doSomething_tut() {
  myText_tut = myInput_tut.value();
}

function typing_tut() {
  stuff_tut = this.value();
}

function doSomething() {
  myText = myInput.value();
}
function typing() {
  stuff = this.value();
}

function doSomething2() {
  myText2 = myInput2.value();
}
function typing2() {
  stuff2 = this.value();
}

function doSomething3() {
  myText3 = myInput3.value();
}
function typing3() {
  stuff3 = this.value();
}

function keyPressed() {
  if (minigame2 == true) {
    let inp_0 = document.getElementById("myInput_tut");
    if (inp_0 !== document.activeElement) {
      inp_0.focus();
    }
    let inp_1 = document.getElementById("myInput");
    if (inp_1 !== document.activeElement) {
      inp_1.focus();
    }
    let inp_2 = document.getElementById("myInput2");
    if (inp_2 !== document.activeElement) {
      inp_2.focus();
    }
    let inp_3 = document.getElementById("myInput3");
    if (inp_3 !== document.activeElement) {
      inp_3.focus();
    }
    switch (stage) {
      case 208:
        if (keyCode == ENTER) {
          doSomething_tut();
        }
        break;
      case 251:
        if (keyCode == ENTER) {
          doSomething();
        }
        break;
      case 253:
        if (keyCode == ENTER) {
          doSomething2();
        }
        break;
      case 255:
        if (keyCode == ENTER) {
          doSomething3();
        }
        break;
    }
  }
  if (minigame3 == true) {
    if (keyCode === RIGHT_ARROW) {
      htowel.direction(10, 0);
    } else if (keyCode === DOWN_ARROW) {
      htowel.direction(0, 10);
    } else if (keyCode === UP_ARROW) {
      htowel.direction(0, -10);
    } else if (keyCode === LEFT_ARROW) {
      htowel.direction(-10, 0);
    }
  }
}

function timeIt() {
  if (limit > 0) {
    limit--;
  }
}

function moreSweat() {
  let s = new drop(random(298, 470), random(115, 145), 255, 1);
  sweats.push(s);
}

function morePuff() {
  let p = new dropPuff(random(298, 470), random(115, 145), 1);
  puffs.push(p);
}

function moreWind() {
  let w1 = new Wind(random(650, 750), random(200, 350), 1);
  winds.push(w1);
  let w2 = new Wind(random(50, 150), random(200, 350), 1);
  winds.push(w2);
}

function mouseClicked() {
  console.log(success1, success2, success3);
  if (intro == true) {
    switch (stage) {
      case 0:
        if (mouseX >= 648 && mouseX <= 800 && mouseY >= 405 && mouseY <= 450) {
          newsong.stop();
          testMP3.play();
          stage++;
        }
        //         timer12 = 59 - int((millis() - timer11) / 1000);
        //         for (let i = 0; i < 10; i++) {
        //           trashes[i] = new Trash(
        //             200,
        //             280 + i,
        //             random(-2, 3),
        //             random(1, 3),
        //             color(random(255), random(255), random(255))
        //           );
        //         }
        //         count = 0;
        //         tutTimer = 9;
        //         tutTimer2 = 9;
        //         startTimer = 4;

        //         gameTimer1 = 9;
        //         gameTimer2 = 9;
        //          gameTimer3 = 9;
        //          gameTimer4 = 9;
        //          gameTimer5 = 9;
        //          gameTimer6 = 9;
        //          clapcount1 = 0;
        //          clapcount2 = 0;
        //          clapcount3 = 0;
        //          clapcount_tut = 0;
        //         num_tut = int(random(0, randomArray.length));
        //         num1 = int(random(0, randomArray.length));
        //         num2 = int(random(0, randomArray.length));
        //         num3 = int(random(0, randomArray.length));
        //         text_xpos = 0;
        //         myText_tut = "";
        //         stuff_tut = "";
        //         myText = "";
        //         stuff = "";
        //         myText2 = "";
        //         stuff2 = "";
        //         myText3 = "";
        //         stuff3 = "";
        //         micSize = 100;
        //         micX = 655;
        //         ment = 700;
        //         hand = 700;
        //         clothes = 720;
        //         g1.y = 400;
        //         g1.h = 0;
        //         htowel.x = 285;
        //         htowel.y = 185;
        //         sweat_timing = 60;
        //         g2.y = 400;
        //         g2.h = 0;
        //         limit_s = 3;
        //         success1 = false;
        //         success2 = false;
        //         success3 = false;
        break;
      case 1:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 2:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 3:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 4:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 5:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 6:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 7:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 8:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 9:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 10:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 11:
        if (next.isNext()) {
          intro = false;
          minigame1 = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
    }
  } else if (minigame1 == true) {
    switch (mini1) {
      case 99:
        if (mouseX > 625 && mouseX < 675 && mouseY > 235 && mouseY < 285) {
          mini1 = 102;
          testMP3.stop();
          minigame1song.play();
          timer11 = millis();
        } else {
          mini1 = 99;
        }
        break;
      case 102: //대기실 1
        if (mouseX > 5 && mouseX < 135 && mouseY > 170 && mouseY < 310) {
          mini1 = 103; //쓰레기통 넘어짐
        }
        if (mouseX >= 715 && mouseX <= 785 && mouseY >= 200 && mouseY <= 270) {
          mini1 = 104;
        }
        if (mouseX >= 340 && mouseX <= 420 && mouseY >= 160 && mouseY <= 240) {
          mini1 = 110;
        }
        break;
      case 103: //쓰레기통 넘어짐
        if (mouseX >= 715 && mouseX <= 785 && mouseY >= 200 && mouseY <= 270) {
          mini1 = 104;
        }
        if (mouseX >= 340 && mouseX <= 420 && mouseY >= 160 && mouseY <= 240) {
          mini1 = 110;
        }
        break;
      case 104: //대기실2
        if (mouseX > 35 && mouseX < 90 && mouseY > 200 && mouseY < 270) {
          mini1 = 102;
        }
        break;

      case 105:
        if (mouseX > 337 && mouseX < 567 && mouseY > 115 && mouseY < 345) {
          mini1 = 107;
        }
        break;
      case 110:
        if (mouseX >= 394 && mouseX <= 623 && mouseY >= 190 && mouseY <= 225) {
          mini1 = 112;
        }
        if (mouseX >= 394 && mouseX <= 623 && mouseY >= 244 && mouseY <= 279) {
          mini1 = 112;
        }
        if (mouseX >= 394 && mouseX <= 623 && mouseY >= 296 && mouseY <= 331) {
          mini1 = 111;
        }
        if (mouseX >= 394 && mouseX <= 625 && mouseY >= 352 && mouseY <= 387) {
          mini1 = 102;
        }
        break;
      case 111:
        if (mouseX > 340 && mouseX < 450 && mouseY > 120 && mouseY < 230) {
          mini1 = 105;
        }
        break;
      case 112:
        mini1 = 102;
        break;
      case 107:
        if (mouseX > 550 && mouseX < 650 && mouseY > 230 && mouseY < 330) {
          mini1 = 108;
          success.play();
          minigame1song.stop();
        }
        break;

      case 108:
        if (mouseX >= 652 && mouseY >= 417) {
          minigame1 = false;
          testMP3.play();
          stage = 200;
          minigame2 = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 109:
        if (mouseX >= 652 && mouseY >= 417) {
          minigame1 = false;
          testMP3.play();
          stage = 200;
          minigame2 = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
    }
  } else if (minigame2 == true) {
    switch (stage) {
      case 200:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 201:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 202:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 203:
        if (next.isNext()) {
          stage += 2;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 205:
        if (mouseX >= 375 && mouseX <= 614 && mouseY >= 379 && mouseY <= 400) {
          stage += 2;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 207:
        if (next.isNext()) {
          stage++;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 208:
        break;
      case 209:
        if (next.isNext()) {
          testMP3.stop();
          stage++;
        }
        break;
      case 210:
        break;
      case 250:
        break;
      case 251:
        break;
      case 252:
        break;
      case 253:
        break;
      case 254:
        break;
      case 255:
        break;
      case 256:
        //결과 대기 화면 고쳐야해!
        if (mouseX >= 648 && mouseX <= 800 && mouseY >= 405 && mouseY <= 450) {
          if (count >= 3) {
            stage = 259;
          } else if (count < 3) {
            stage = 257;
          }
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 257:
        if (mouseX >= 648 && mouseX <= 800 && mouseY >= 405 && mouseY <= 450) {
          stage = 258;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 258:
        if (mouseX >= 648 && mouseX <= 800 && mouseY >= 405 && mouseY <= 450) {
          testMP3.play();
          stage = 299;
          success2 = false;
          minigame2 = false;
          minigame3 = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 259:
        if (mouseX >= 648 && mouseX <= 800 && mouseY >= 405 && mouseY <= 450) {
          stage = 260;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 260:
        if (mouseX >= 648 && mouseX <= 800 && mouseY >= 405 && mouseY <= 450) {
          testMP3.play();
          stage = 299;
          success2 = true;
          minigame2 = false;
          minigame3 = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
    }
  } else if (minigame3 == true) {
    switch (stage) {
      case 299:
        if (next.isNext()) stage = 300;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 300:
        if (next.isNext()) stage = 301;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 301:
        if (next.isNext()) stage = 302;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 302:
        if (next.isNext()) stage = 306;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 306:
        if (next.isNext()) {
          testMP3.stop();
          game3bgm.play();
          timer31 = millis();
          stage = 307;
        }
        break;

      case 310:
        if (next.isNext()) {
          newsong.play();
          stage = 400;
          minigame3 = false;
          ending = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;  
        
      case 311:
        if (next.isNext()) {
          newsong.play();
          stage = 400;
          minigame3 = false;
          ending = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;
        
        case 312:
        if (next.isNext()) {
          newsong.play();
          stage = 400;
          minigame3 = false;
          ending = true;
        }
        if (home.isHome()) {
          home.homed();
        }
        break;  
    }
  } else if (ending == true) {
    console.log(stage);
    switch (stage) {
      case 400:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 401:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 402:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 403:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 404:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 405:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;
      case 406:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 407:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 408:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 409:
        if (
          (success1 == true && success2 == true && success3 == true) ||
          (success1 == false && success2 == true && success3 == true) ||
          (success1 == true && success2 == false && success3 == true) ||
          (success1 == true && success2 == true && success3 == false)
        ) {
          if (next.isNext()) stage++;
        } else {
          stage = 420;
        }

        if (home.isHome()) {
          home.homed();
        }
        break;

      case 410:
        if (mouseX >= 539 && mouseX <= 724 && mouseY >= 349 && mouseY <= 389) {
          newsong.stop();
          home.homed();
        }
        break;

      case 420:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 421:
        if (next.isNext()) stage++;
        if (home.isHome()) {
          home.homed();
        }
        break;

      case 422:
        if (mouseX >= 539 && mouseX <= 724 && mouseY >= 349 && mouseY <= 389) {
          newsong.stop();
          home.homed();
        }
        break;
    }
  }
}
