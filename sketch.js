var bg;
var iss;
var spaceCraft;


function preload(){
  bg = loadImage("spacebg.jpg");
  craft1Img = loadImage("spacecraft1.png")
  craft2Img = loadImage("spacecraft2.png")
  craft3Img = loadImage("spacecraft3.png")
  craft4Img = loadImage("spacecraft4.png")
  issImg = loadImage("iss.png")
}
function setup() {
  createCanvas(800,400);

  iss = createSprite(300,160);
  iss.addImage(issImg);

  spaceCraft = createSprite(200,350)
  spaceCraft.addImage(craft1Img)
  spaceCraft.scale = .1
}

function draw() {
  background(bg);  

  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y - 10
    spaceCraft.addImage(craft2Img)
  }

  if(keyWentUp(UP_ARROW)){
    spaceCraft.addImage(craft1Img)
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.y = spaceCraft.y + 10
    spaceCraft.addImage(craft2Img)
  }

  if(keyWentUp(DOWN_ARROW)){
    spaceCraft.addImage(craft1Img)
  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.x = spaceCraft.x + 10;
    spaceCraft.addImage(craft4Img)
  }

  if(keyWentUp(RIGHT_ARROW)){
    spaceCraft.addImage(craft1Img)
  }

  if(keyDown(LEFT_ARROW)){
    spaceCraft.x = spaceCraft.x - 10
    spaceCraft.addImage(craft3Img)
  }

  if(keyWentUp(LEFT_ARROW)){
    spaceCraft.addImage(craft1Img)
  }

  if(spaceCraft.x === 240&&spaceCraft.y ===200){
    stroke("white");
    textSize(15)
    text("Docking Sucessful!", 400,200)
  }
  
  drawSprites();
}