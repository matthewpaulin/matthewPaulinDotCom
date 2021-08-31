/* @pjs preload="arcade_games/data/bord.png"; */
/* @pjs preload="arcade_games/data/crappyback.png"; */
/* @pjs preload="arcade_games/data/crappyintro.png"; */
/* @pjs preload="arcade_games/data/wall0.png"; */
/* @pjs preload="arcade_games/data/wall1.png"; */
/* @pjs preload="arcade_games/data/walld0.png"; */
/* @pjs preload="arcade_games/data/walld1.png"; */
int score=0;
int intro;//main variable controlling the gamestate
PImage crappyintro, background1, background2;//image for the intro screen and background
int backgroundW=1000, background1X = 0, backgroundY = 0, background2X=1000;//variables controlling the scrolling background
PImage[] wall=new PImage[2], walld=new PImage[2];//arrays for the pipe images
int[] wallX=new int[2], wallL=new int[2];//arrays for the walls x values and length
PImage bird ;//bird image
boolean jump=false;//controls if the bird can still jump
int birdW, birdH, birdX = 300, birdY = 0, birdSpeed, VY=2;//bird dimensions, x and y values, speed of the background and pipes moving toward the bird
boolean mouse=true;//boolean allowing only one jump for each time the mouse is pressed
//sound effects
import ddf.minim.*;
Minim minim;
AudioPlayer flap;//bird flying sounds
AudioPlayer hit;//hitmarker sound when the bird hits a pipe
AudioPlayer point;//coin sound when a point is gained
AudioPlayer splat;//splat sound when the bird hits the ground
void mousePressed() {//detects if the mouse is pressed
  if (intro==12&&mouse==true||intro==11&&mouse==true) {
    if (jump) {
      VY=-15;
      flap.rewind();
      flap.play();
    }
    mouse=false;
  }
}
void redrawc() {//main draw for crappy bird
  checkPC();
  checkSC();
  imageMode(CORNER);
  //background looping
  background1X -= birdSpeed;
  background2X -= birdSpeed;
  if (background1X < -backgroundW ) background1X = backgroundW - birdSpeed;
  if (background2X < -backgroundW) background2X = backgroundW - birdSpeed;
  imageMode(CORNER);
  image (background1, background1X, backgroundY); 
  image (background2, background2X, backgroundY);   
  birdY+=VY;
  VY++;
  for (int i=0; i<2; i++) {
    //draws pipes
    image(wall[i], wallX[i], height-(wall[i].height));
    image(walld[i], wallX[i], 0);
    if (birdX==wallX[i]) {
      score++;
      counter=0;
      point.rewind();
      point.play();
    }
    wallX[i]-=birdSpeed;
    if (wallX[i]<0-wall[i].width) {
      wallL[i]=int(random(100, height-250));
      wall[i].resize(150, wallL[i]);
      walld[i].resize(150, height-wallL[i]-200);
      wallX[i]=width+(2);
    }
  }
  image (bird, birdX, birdY);
  fill(0);
  textSize(80);
  textAlign(CENTER);
  text(score, width/2, height-70);
}
void mouseReleased() {//allows only one jump per press
  mouse=true;
}
void checkPC() {//checks collision with the pipes
  ///if the bird hits a pipe, jump boolean turns false
  for (int i=0; i<2; i++) {
    if (birdX>=wallX[i]-(bird.width)&&birdX<=wallX[i]+150) {
      if (birdY<=walld[i].height||birdY>=height-(wall[i].height)-(bird.height)) {
        jump=false;
        hit.rewind();
        hit.play();
      }
    }
  }
}
void checkSC() {//checks collision with the screen boundaries
  if (birdY<=0||birdY>=height) {
    jump=false;
    splat.rewind();
    splat.play();
    birdSpeed=0;
    intro=11;
  }
}
void setup()
{
  size(1000, 700);
  imageMode(CENTER);
  intro=11;
  minim=new Minim(this);
  smooth();
  backgroundW=1000;
  crappyintro=loadImage("arcade_games/data/crappyintro.png");
  background1 = loadImage("arcade_games/data/crappyback.png");
  background2 = loadImage("arcade_games/data/crappyback.png");
  background2X = 1000;
  for (int i=0; i<2; i++) {
    wall[i]=loadImage("arcade_games/data/wall"+i+".png");
    walld[i]=loadImage("arcade_games/data/walld"+i+".png");
  }
  bird = loadImage("arcade_games/data/bord.png");
  birdW = bird.width;
  birdH = bird.height;
  birdSpeed = 6;
  birdY = width/2-150;
  wallX[0]=width-100;
  wallL[0]=int(random(100, height-250));
  wallX[1]=wallX[0]+498;
  wallL[1]=int(random(100, height-250));
  for (int i=0; i<2; i++) {
    wall[i].resize(150, wallL[i]);
    walld[i].resize(150, height-wallL[i]-200);
  }
  flap=minim.loadFile("arcade_games/data/flap.ogg");
  hit=minim.loadFile("arcade_games/data/hit.ogg");
  point=minim.loadFile("arcade_games/data/point.ogg");
  splat=minim.loadFile("arcade_games/data/splat.ogg");
  flap.volume(0.02);
  hit.volume(.5);
  point.volume(0.08);
  splat.volume(0.05);
}
void draw(){
  if (intro==11){
    intro11();
  }
  else{
    intro12();
  }
}
void intro11() {//flappy bird intro and end screen
  birdY = width/2-150;
  wallX[0]=width-100;
  VY=2;
  wallX[1]=wallX[0]+498;
  birdSpeed=6;
  jump=true;
  //background(80);
  fill(80);
  //rect(0, 0, width, height);
  noFill();
  frameRate(60);
  imageMode(CENTER);
  image(crappyintro, width/2, height/2);
  imageMode(CORNER);
  textSize(65);
  colorMode(HSB);
  fill(0);
  /*text("Press M to go to the main menu", width/2, height/2+325);
  if (keyPressed&&key=='m'||keyPressed&&key=='M') {
    intro=1;
  }*/
  if (!mouse) 
  {
    score=0;
    intro=12;
  }
  if (score>0) {
    fill(0);
    textSize(55);
    text("Score: "+score, 250, height-200);
  }
}
void intro12() {//flappy bird game screen
  redrawc();
}
