var box;


function setup() {
  createCanvas(400, 400);

  box=createSprite(200,200,50,50);
  box.shapeColor="red";
}

function draw() {
  background(220);

  textSize(25);
  fill("black");
  text("This is my first Game on Github.",20,50);
  drawSprites();
}