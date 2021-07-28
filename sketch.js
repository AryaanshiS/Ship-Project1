var ship,shipImg,sea,backgroundImage;

function preload(){
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
backgroundImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,250,50,50);
  sea.addImage("sea",backgroundImage);
  sea.scale=0.3;
  ship=createSprite(200,200,400)
  ship.addAnimation("ship",shipImg);
  ship.scale=0.3;
}

function draw() {
  background("white");
  sea.velocityX=-4;
  if(sea.x<0){
    sea.x = width/2;
  }
  drawSprites()
 
}