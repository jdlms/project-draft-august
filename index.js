let boat;

function setup() {
  createCanvas(windowWidth, windowHeight);
  speed = 3;
  x = windowWidth / 2;
  y = windowHeight / 2;
}

// function drawArrow(base, vec, myColor) {
//   push();
//   stroke(myColor);
//   strokeWeight(3);
//   fill(myColor);
//   translate(base.x, base.y);
//   line(0, 0, vec.x, vec.y);
//   rotate(vec.heading());
//   let arrowSize = 7;
//   translate(vec.mag() - arrowSize, 0);
//   triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//   pop();
// }

function player() {
  rect(x, y, 55, 55, 20);
  fill("rgb(135, 62, 35)");
  stroke(255, 204, 0);

  const vx = line(x + 55 / 2, y + 55 / 2, mouseX, mouseY);

  //

  //
  //
  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += speed;
  }
  //
}

function draw() {
  background("rgb(37, 150, 190)");
  player();
}
