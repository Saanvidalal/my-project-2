var boyButton, girlButton;
var boy, girl
var bg, bgimg,boyrun,girlrun;
var gameState = "start"
var girlpc, boypc,pc;
var char = 0
function preload() {
  bgimg = loadImage("assets/bg.jpg");
  girlpc = loadAnimation("assets/girl/idle.png");
  boypc = loadAnimation("assets/boy/run0.png");
  boyrun = loadAnimation("assets/boy/run0.png","assets/boy/run1.png","assets/boy/run2.png","assets/boy/run3.png",
  "assets/boy/run4.png","assets/boy/run5.png","assets/boy/run6.png","assets/boy/run7.png");
  girlrum = loadAnimation("assets/girl/g1.png","assets/girl/g2.png","assets/girl/g3.png","assets/girl/g4.png",
  "assets/girl/g5.png","assets/girl/g6.png","assets/girl/g7.png","assets/girl/g8.png","assets/girl/g9.png",
  "assets/girl/g10.png","assets/girl/g11.png","assets/girl/g12.png","assets/girl/g13.png");


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2);
  bg.addImage(bgimg);
  bg.scale = 3;
  bg.visible = false;
  boy = createSprite(width / 2 - width / 4, height / 2);
  boy.addAnimation("still", boypc);
  girl = createSprite(width / 2 + width / 3, height / 2);
  girl.addAnimation("still1", girlpc);
  pc = createSprite(width/2,height-100)
  pc.visible = false;


}

function draw() {
  background(bgimg);
  if (gameState === "start") {
    textSize(50)
    fill("white");
    text("SELECT YOUR CHARACTER", width / 4, height / 8);
    if (mousePressedOver(boy)) {
      char = 1
     hide()
      gameState = "play"
    }
    if (mousePressedOver(girl)) {
      char = 2
     hide()
      gameState = "play"
    }

  }
  else if(gameState==="play"){
    bg.visible = true;
    if(char===1){

    }
  }


  drawSprites();

}
function hide() {
  boy.destroy()
  girl.destroy()
}




