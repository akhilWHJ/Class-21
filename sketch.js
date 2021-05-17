var fixedRect, movingRect, rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(800,900);
  fixedRect = createSprite(100, 400, 100, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "green";

  // Creating Sprites For Rectangles
  rect1= createSprite (200, 200, 100, 100);
  rect1.shapeColor="yellow";
  rect2= createSprite (200, 400, 100, 100);
  rect2.shapeColor="yellow";
  rect3= createSprite (200, 600, 100, 100);
  rect3.shapeColor="yellow";
  rect4= createSprite (200, 800, 100, 100);
  rect4.shapeColor="yellow";

}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
 if(isTouching(movingRect, fixedRect))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{;
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

// Checking If The 2 Rectangles Are Touching

  if (isTouching(movingRect, rect1))
  {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }else
  {
    rect1.shapeColor = "yellow";
    movingRect.shapeColor = "green";
    
  }
 
  if (isTouching(movingRect, rect2))
  {
    movingRect.shapeColor = "red";
    rect2rect1r = "red";
  }else
  {
    rect2.shapeColor = "yellow";
    movingRect.shapeColor = "green";

  }

  if (isTouching(movingRect, rect3))
  {
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  }else
  {
    rect4.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }

    if (isTouching(movingRect, rect4))
    {
      movingRect.shapeColor = "red";
      rect4.shapeColor = "red";
    }else
    {
      rect4.shapeColor = "yellow";
      movingRect.shapeColor = "green";
    }

  drawSprites();

}

function isTouching(object1, object2){
  if(object1.x - object2.x < object1.width/2  + object2.width/2 
    && object2.x - object1.x < object1.width/2 + object2.width/2

    && object1.y - object2.y < object1.width/2  + object2.width/2 
    && object2.y - object1.y < object1.width/2 + object2.width/2
  
    

  )
 return true;
}
