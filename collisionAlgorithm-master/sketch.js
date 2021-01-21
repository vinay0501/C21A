var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(200,100,50,20)
object1.shapeColor="green";
object1.debug="true";
object2=createSprite(250,150,60,20)
object2.shapeColor="green";
object2.debug="true";  
object3=createSprite(300,200,70,40)
object3.shapeColor="green";
object3.debug="true"; 
 object4=createSprite(345,350,50,20)
object4.shapeColor="green";
object4.debug="true";
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,object1)){
  movingRect.shapeColor = "red";
  object1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }
  
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x -obj2.x <obj2.width/2 + obj1.width/2
    &&obj2.x - obj1.x <obj2.width/2 + obj1.width/2
    && obj1.y -obj2.y <obj2.height/2 + obj1.height/2
    &&obj2.y - obj1.y <obj2.height/2 + obj1.height/2) {

     return true; 
    }
    else{
      return false;
    }
  }