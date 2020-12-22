var movingRect,fixedRect
var fix1,move1

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  movingRect.debug=true
  fixedRect=createSprite(500,200,50,70);

  fix1=createSprite(400,300,40,60);
  fix1.shapeColor="green"
  fix1.debug=true
  fix1.velocityX=3

  move1=createSprite(600,300,40,60);
  move1.shapeColor="green"
  move1.debug=true
  move1.velocityX=-3

  fixedRect.shapeColor="green"
  fixedRect.debug=true
}

function draw() {
  background("Black");

  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

bounceOffMaster(move1,fix1);


 if(collisionMaster(movingRect,fixedRect))
 {
  
  fixedRect.shapeColor="red"
   movingRect.shapeColor="red"

 }

 else{
 
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

 }
   
  drawSprites();

}
