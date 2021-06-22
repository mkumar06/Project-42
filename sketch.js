//Calculating time using predefined functions from p5.js
var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  angleMode(DEGREES);

  hrAngle = map(hr, 0, 60%12, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  scAngle = map(sc, 0, 60, 0, 360)

  //drawing seconds hand
  push();
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255, 0, 0)
  strokeWeight(7);
  line(0, 0, 100, 0)
  pop();

  translate(200, 200)

  sc = second()
  mn = minute()
  hr = hour()


  drawSprites();
}