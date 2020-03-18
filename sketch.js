var fixedRect, movingRect;
var box1,box2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


  box1 = createSprite(800, 100, 50, 80);
  box1.shapeColor = "yellow";
  box1.debug = true;
  box2 = createSprite(800, 800,80,30);
  box2.shapeColor = "yellow";
  box2.debug = true;

  box1.velocityY = +5;
  box2.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect,movingRect);
  bounceOff(box1,box2);
  drawSprites();
}
