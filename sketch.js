var rec1,rec2;
function setup() {
  createCanvas(800,400);
rec1=createSprite (100,100,50,50);
rec2=createSprite (200,200,100,100);
}

function draw() {
  background(255,255,255); 
  rec1.x=mouseX;
  rec1.y=mouseY;
  if (rec1.x-rec2.x<rec1.width/2+rec2.width/2 && rec2.x-rec1.x<rec2.width/2+rec1.width/2 &&
    rec1.y-rec2.y<rec1.height/2+rec2.height/2 && rec2.y-rec1.y<rec2.height/2+rec1.height/2) {
   rec1.shapeColor="red";
   rec2.shapeColor="blue";
  } 
  else {
    rec1.shapeColor="green";
    rec2.shapeColor="yellow";
  }
  drawSprites();
}