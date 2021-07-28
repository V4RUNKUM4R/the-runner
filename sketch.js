var track;
var track_Img;
var boy;
var boy_Anm;
var right_barriar;
var left_barriar;

function preload(){
  //pre-load images
  track_Img=loadImage("path.png");
  boy_Anm=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200);
  track.addImage(track_Img);
  track.scale = 1.2;

  boy=createSprite(200,310,20,20);
  boy.addAnimation("boy_Anm",boy_Anm);
  boy.scale = 0.1;

  right_barriar=createSprite(32,200,25,400);
  right_barriar.visible=false;
  left_barriar=createSprite(368,200,25,400);
  left_barriar.visible=false;
}

function draw() {

  track.velocityY=4;

  if(track.y <400){
    track.y=height/2;
  }

  boy.x=World.mouseX;
  boy.collide(right_barriar);
  boy.collide(left_barriar);

  background("green");

  drawSprites();
}
