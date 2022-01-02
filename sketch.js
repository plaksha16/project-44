
var butterfly0
var butterfly1
var butterfly2
var butterfly3
var butterfly4
var butterfly5
var girl1
var bg1
var invisibleGround
var ground

function preload() {

  butterfly0 = loadImage("butterfly.jpg")
  butterfly1 = loadImage("butterfly1.png")
  butterfly2 = loadImage("butterfly2.png")
  butterfly3 = loadImage("butterfly3.png")
  butterfly4 = loadImage("butterfly4.png")
  girl1 = loadImage("girl1.png")
  bg1 = loadImage("bg1.png")
}


function setup() {
  createCanvas(800, 800);
  // createSprite(400, 200, 50, 50);
  ground = createSprite(700,790,400,20);
  //ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  butterfly = createSprite(190, 200, 30, 10)
  butterfly.addImage("butterfly", butterfly1)
  butterfly.scale = 0.1


  butterfly11 = createSprite(300, 300, 30, 10)
  butterfly11.addImage("butterfly3", butterfly3)
  butterfly11.scale = 0.06


  butterfly22 = createSprite(500, 400, 30, 10)
  butterfly22.addImage("butterfly4", butterfly4)
  butterfly22.scale = 0.1

  butterfly33 = createSprite(600, 300, 30, 10)
  butterfly33.addImage("butterfly2", butterfly2)
  butterfly33.scale = 0.1


  girl = createSprite(400, 700, 30, 10)
  girl.addImage("girl", girl1)
  girl.scale = 0.5

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;


}


function draw() {

  background(51);
  image(bg1, 0, 400)

 

  if (keyIsDown(UP_ARROW)) {
    girl.y -= 5
  }

  girl.velocityY = girl.velocityY + 0.2;
  ground.x = ground.width/2;

  girl.collide(invisibleGround);


  drawSprites();
}