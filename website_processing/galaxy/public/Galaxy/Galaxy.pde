/* @pjs preload="Galaxy/data/asteroid6.png"; */
/* @pjs preload="Galaxy/data/explosion1.png"; */
/* @pjs preload="Galaxy/data/explosion2.png"; */
/* @pjs preload="Galaxy/data/explosion3.png"; */
/* @pjs preload="Galaxy/data/explosion4.png"; */
/* @pjs preload="Galaxy/data/explosion5.png"; */
/* @pjs preload="Galaxy/data/explosion6.png"; */
/* @pjs preload="Galaxy/data/explosion7.png"; */
/* @pjs preload="Galaxy/data/explosion8.png"; */
/* @pjs preload="Galaxy/data/keyboard.png"; */
/* @pjs preload="Galaxy/data/space1.png"; */
/* @pjs preload="Galaxy/data/space2.png"; */
/* @pjs preload="Galaxy/data/spaceship.png"; */
/* @pjs preload="Galaxy/data/spaceship1.png"; */
/* @pjs preload="Galaxy/data/spaceship2.png"; */
/* @pjs preload="Galaxy/data/spaceship3.png"; */
/* @pjs preload="Galaxy/data/spaceship4.png"; */
//Matthew Paulin/
//May 20, 2016///
//Galaxy Game////
/////////////////
// ship variables
int shipW = 80; //width of ship
int shipH = 120;//height of ship
int shipX = width/2;//x value of the ship's position                           
int shipY = 575;  //y value of the ship's position                           
int shipSpeed = 5;//speed of ship movement

// ball variables
int[] ballD = new int[150]; //array that holds diameter of asteroids                             
float ballSpeed = 7;//speed of asteroid movement
int[] ballX=new int[150];//array that holds the x values of the asteroids
int[] ballY=new int[150];//array that holds the y values of the asteroids
boolean[] ballVisible = new boolean[150];//controls if the asteroid is visible

// bullet variables
int bulletW = 3;//width of the bullets                          
int bulletH = 18;//height of the bullets                  
int bulletSpeed = 10;//speed of the bullets
int currentBullet = 0; //counter of bullets
int[] bulletX = new int[150];//array that holds x values of bullets
int[] bulletY = new int[150];//array that holds y values of bullets
boolean[] bulletVisible =new boolean[150];//array that controls a bullet's visibility

// distance between the current bullet and ball
int dist;                                  

// an array that holds the key input (LEFT and RIGHT arrow + SPACE)
boolean[] keys;        

//boolean allows one bullet to be shot at a time
boolean triggerReleased=false;

//explosion gif
int numFrames = 9;//tells the array to store all the frames of the gif
PImage[] images = new PImage [numFrames];//array for the gif
int frame = 1;//current frame for the gif

//ship gif
int numFrames1 = 5;//tells the array to store all the frames of the gif
PImage[] images1 = new PImage [numFrames1];//array for the gif
int frame1 = 1;//current frame for the gif

//array that holds 150 asteroids
PImage[] ball=new PImage[150];

//saves position of ballX and ballY for the explosion
int posX;
int posY;

//explosion for asteroids
boolean fire = false;

//explosion for ship
boolean fireShip=false;

//score variable
int score=0;

//lives variable controlling images at top left
int lives=3;

//scrolling background variables
PImage back1;//image
PImage back2;//duplicate of back1
int bSpeed = 3;//speed of scrolling
int img1X=0;//x value for backgrounds
int img1Y=0;//initial y value for first background
int img2Y=0-600;//initial y value for second background

//variable controlling start, playing, and end screens
int intro=0;

//ships showing lives
PImage ship;

//keyboard controls on start screen
PImage keyboard;

//sound effects
import ddf.minim.*;
Minim minim;
AudioPlayer player;//main song
AudioPlayer boom;//explosion sound
//AudioPlayer pew;//bullet shooting sound

//variable that controls for loop to regenrate asteroids after each death
int counter=0;
/////////////////////////////////////////////////
//                 FUNCTIONS                   //
/////////////////////////////////////////////////
void moveBackground()//controls scrolling background
{
  //move the backgrounds down
  img1Y = img1Y + bSpeed;
  img2Y = img2Y + bSpeed;

  //regenerates backgrounds if they exceed the boundaries of the screen
  if (img1Y>=height)
  {
    img1Y=0-height;
  }
  if (img2Y>=height)
  {
    img2Y=0-height;
  }
}
void generateBalls() {//initial generation of asteroids 
  for (int i = 0; i<150; i++)
  {
    ball[i]=loadImage("Galaxy/data/asteroid6.png");//loads 150 of the asteroid images
    ballD[i]=int(random(35, 55));//random sizes for asteroids
    ballX[i]=int(random(ballD[i]/2, width-(ballD[i]/2)));//random x values
    ballY[i]=int(random((-8)*height, 0-height));//y values start above the screen at random numbers
    ballVisible[i]=true;//sets visibility to true
    ball[i].resize(ballD[i], ballD[i]);//resizes asteroid to the random size of the asteroid
  }
}
void generateBullets() {//function controls generation of bullets
  //loads 100 bullets and makes them invisible
  for (int i=0; i<150; i++)
  {
    bulletVisible[i]=false;
  }
}
void redrawGameField() {//constantly regenrates the visible elements of th game on the screen
  imageMode(CORNER);//easier control of the position of the backgrounds

  //draws both background images
  image (back1, img1X, img1Y);
  image (back2, img1X, img2Y);

  //draws the bullets and asteroids if they are visible
  for (int i=0; i<150; i++)
  {  
    if (bulletVisible[i]==true)//bullets
    {
      //no fill, only outline for futuristic look
      stroke(0, 255, 0);
      noFill();
      rectMode(CENTER);//changes rectmode for easier calculation of distance
      rect(bulletX[i], bulletY[i], bulletW, bulletH);//draws bullet
    }
    if (ballVisible[i]==true)//asteroids
    {
      imageMode(CENTER);
      image(ball[i], ballX[i], ballY[i]);//draws current ball
    }
  }
  //draws ship gif
  image(images1[frame1], shipX, shipY);
  frame1++;//adds a frame to simulate motion
  if (frame1>=images1.length)
  {
    frame1 =1;
  }
  if (intro!=0)
  {
    fill(255);
    textSize(36);
    text("SCORE"+" "+score, width-100, 50);
  }
}
void moveBalls() {//function controlling asteroid movement
  for (int i = 0; i<150; i++)
  {
    ballY[i]+=ballSpeed;
    if (ballY[i]>=height+(ballD[i]/2))
    {
      ballY[i]=-7*height;
    }
  }
}
void moveBullets() {//function controlling bullet movement
  for (int i=0; i<150; i++)
  {
    if (bulletVisible[i]==true)
    {
      bulletY[i]-=bulletSpeed;
    }
    if (bulletY[i]<=(bulletH/2))
    {
      bulletVisible[i]=false;
    }
  }
}
int distance (int x1, int y1, int x2, int y2) {//function that calculates distance between asteroid and bullet
  return round(sqrt(pow((x1 - x2), 2) + pow((y1 - y2), 2)));
}
void checkCollision() {//function checks collision between asteroid and bullet and regenerates the asteroid if it is hit
  for (int i = 0; i<150; i++) {
    for (int j = 0; j<150; j++) {
      dist = distance(ballX[i], ballY[i], bulletX[j], bulletY[j]);
      if (ballVisible[i]==true && bulletVisible[j]==true && dist < ballD[i]/2) {
        // add sound effect to indicate a collision (optional)
        if (ballX[i]<=width&&ballX[i]>=0)
        {
          if (ballY[i]>=0&&ballY[i]<=height)
          {
            frame =1;
            if (ballSpeed<=20)
            {
              ballSpeed*=1.005;
            }
            posX=ballX[i];
            posY=ballY[i];
            fire=true;
            score+=5;
            boom.rewind();
            boom.play();
            //boom.trigger();
            ballX[i]=int(random(ballD[i]/2, width-(ballD[i]/2)));
            ballY[i]=int(random((-8)*height, 0));
            bulletVisible[j] = false;
          }
        }
      }
    }
  }
}
void sCollision()//checks collision between ship and asteroids
{
  for (int i = 0; i<150; i++) {
    if (ballX[i]>=shipX-(shipW/2)&&ballX[i]<=shipX+(shipW/2))
    {
      if (ballY[i]>=shipY-(shipH/2)&&ballY[i]<=shipY+(shipH/2)&&ballVisible[i]==true)
      {
        if (ballX[i]<=width&&ballX[i]>=0)
        {
          if (ballY[i]>=0-(ballD[i]/2)&&ballY[i]<=height+(ballD[i]/2))
          {
            if (shipY>0-(shipH/2)+30&&shipY<height+(shipH/2))
            {
              posX=ballX[i];
              posY=ballY[i];
              counter=0;
              ballX[i]=int(random(ballD[i]/2, width-(ballD[i]/2)));
              ballY[i]=int(random((-8)*height, 0));
              frame =1;
              boom.rewind();
              boom.play();
              //boom.trigger();
              fireShip=true;
              lives-=1;
            }
          }
        }
      }
    }
  }
}
void intro0()//start screen
{
  lives=3;
  shipX=width/2;
  shipY=height-30;
  fill(random(255), random(255), random(255));
  textAlign(CENTER);
  textSize(48);
  text("Welcome to Asteroids", width/2, 100);
  textSize(36);
  fill(#15EA25);
  text("You are the last hope", width/2, 175);
  text("Good luck commander", width/2, 275);
  text("Press SPACE to start", width/2, 480);
  image(keyboard, width/2, 365);
  textSize(20);
  fill(0);
  /*text("UP", 609, 390);
  text("LEFT", 550, 425);
  text("DOWN", 608, 425);
  text("RIGHT", 669, 425);
  textSize(40);
  text("SHOOT", width/2-150, 415);*/
  if (keyPressed)
  {
    if (key == ' ')
    {
      player.play();
      intro = 1;
    }
  }
}
void intro1()//controls music, looping for the ship, ship movement,
             //bullet generation and movement, check for collisions, 
             //draws gifs, draws life counter and score, ends if player is out of lives
{
  if (shipX<=-41)
  {
    shipX=width+40;
  }
  if (shipX>=width+41)
  {
    shipX=-40;
  }
  if (shipY<=-61)
  {
    shipY=height+60;
  }
  if (shipY>=height+61)
  {
    shipY=-60;
  }
  // move the ship with LEFT & RIGHT ARROWS KEYS
  if (keys[0]) {
    redrawGameField();
    shipX = shipX + shipSpeed;
  }
  if (keys[1]) {
    redrawGameField();
    shipX = shipX - shipSpeed;
  }
  // shut bullets with SPACE BAR
  if (keys[2] && triggerReleased) {         // triggerReleased is true when the SPACE bar is pressed
    if (shipX>=0&&shipX<=width)
    {
      if (shipY>=0+(shipH/2)&&shipY<=height+(shipH/2)-1)
      {
        triggerReleased = false;                // then it turns into false to prevent creating more then one bullet 
        bulletX[currentBullet] = shipX;        
        bulletY[currentBullet] = shipY-(shipH/2);   
        //pew.rewind();
        //pew.play();
        //pew.trigger();
        bulletVisible[currentBullet] = true;   
        currentBullet++;
        if (currentBullet == 150) {
          currentBullet = 0;
        }
      }
    }
  } else if (keys[2]==false) {
    triggerReleased = true;
  }
  if (keys[3])
  {
    shipY-=shipSpeed;
    bSpeed=7;
  }
  if (keys[4])
  {
    shipY+=shipSpeed;
    bSpeed=2;
  }
  moveBalls();
  moveBullets();
  checkCollision();
  sCollision();
  if (frame<9&&fire == true)
  {
    images[frame].resize(120, 120);
    image(images[frame], posX, posY);
    frame++;
  } else {
    fire=false;
  }
  if (frame<9&&fireShip == true)
  {
    images[frame].resize(shipW, shipW);
    image(images[frame], posX, posY);
    frame++;
  } else {
    fireShip=false;
  }
  if (lives==3)
  {
    image(ship, 50, 50);
    image(ship, 100, 50);
    image(ship, 150, 50);
  }
  if (lives==2)
  {
    image(ship, 50, 50);
    image(ship, 100, 50);
    tint(100);
    image(ship, 150, 50);
    noTint();
    if (counter<1)
    {
      for (int i =0; i<150; i++)
      {
        ballY[i]=int(random((-8)*height, 0-height));
      }
      counter++;
    }
  }
  if (lives==1)
  {
    image(ship, 50, 50);
    tint(100);
    image(ship, 100, 50);
    image(ship, 150, 50);
    noTint();
    if (counter<1)
    {
      for (int i =0; i<150; i++)
      {
        ballY[i]=int(random((-8)*height, 0-height));
      }
      counter++;
    }
  }
  if (lives==0)
  {
    tint(100);
    image(ship, 50, 50);
    image(ship, 100, 50);
    image(ship, 150, 50);
    noTint();
    if (counter<1)
    {
      for (int i =0; i<150; i++)
      {
        ballY[i]=int(random((-8)*height, 0-height));
      }
      counter++;
    }
  }
  if (lives<=-1)
  {
    if (frame==9)
    {
      intro=2;
    }
  }
}
void intro2()//end screen
{
  fill(#15EA25);
  textSize(45);
  text("Press SPACE to play again", width/2, height/2+115);
  fill(255);
  textSize(55);
  text("GAME OVER", width/2, height/2-150);
  if (keyPressed&&key == ' ')
  {
    //player.pause();
    player.rewind();
    player.play();
    ballSpeed=7;
    score=0;
    generateBalls();
    generateBullets();
    lives=3;
    intro=1;
  }
}
//////////////////////////////////////////////
//             Main Program                 //
//////////////////////////////////////////////
void setup() {
  size(800, 600);
  background(0);
  smooth();
  noStroke();
  keys=new boolean[5];                     
  keys[0]=false;                           
  keys[1]=false;
  keys[2]=false;
  keys[3]=false;
  keys[4]=false;
  generateBalls();
  generateBullets();
  for (int i = 1; i<images.length; i++)
  {
    String name ="Galaxy/data/explosion"+i+".png";
    images[i] = loadImage(name);
  }
  for (int i = 1; i<images1.length; i++)
  {
    String name1 ="Galaxy/data/spaceship"+i+".png";
    images1[i] = loadImage(name1);
    images1[i].resize(shipW, shipH);
  }
  back1 = loadImage("Galaxy/data/space1.jpg"); 
  back2 = loadImage("Galaxy/data/space2.jpg"); 
  back1.resize(width, height);
  back2.resize(width, height);
  ship=loadImage("Galaxy/data/spaceship.png");
  ship.resize(40, 60);
  keyboard=loadImage("Galaxy/data/keyboard.png");
  keyboard.resize(600, 150);
  minim=new Minim(this);
  player=minim.loadFile("Galaxy/gamemusic.ogg");
  boom=minim.loadFile("Galaxy/kaboom.ogg");
  player.volume(0.01);
  boom.volume(0.05);
  //pew=minim.loadFile("Galaxy/pew.ogg");
  frameRate(60);
}
void draw() {
  background (0);
  redrawGameField();
  moveBackground();
  if (intro==0)
  { 
    intro0();
  }

  if (intro==1)
  {
    intro1();
  }

  if (intro==2)
  {
    intro2();
  }
}
void keyPressed() {
  // move the ship left / right with the arrow keys
  if (key==CODED && keyCode==RIGHT) keys[0]=true;
  if (key==CODED && keyCode==LEFT)  keys[1]=true;
  if (key==CODED && keyCode==UP) keys[3]=true;
  if (key==CODED && keyCode==DOWN)  keys[4]=true;
  // shoot bullets when SPACE BAR is pressed
  if (key==' ') keys[2]=true;
}

void keyReleased() {
  if (key==CODED && keyCode==RIGHT) keys[0]=false;
  if (key==CODED && keyCode==LEFT) keys[1]=false;
  if (key==CODED && keyCode==UP) keys[3]=false;
  bSpeed=3;
  if (key==CODED && keyCode==DOWN) keys[4]=false;
  bSpeed=3;
  if (key==' ') keys[2]=false;
}
