let angle = 0;

function setup() {
  let canvas = createCanvas(200, 200);
  canvas.parent("pizza-canvas");
  angleMode(DEGREES);
}

function draw() {
  background(255, 248, 240); 
  translate(width / 2, height / 2); 
  rotate(angle);

  // Pizza slice (triangle)
  fill(255, 204, 0);
  triangle(-50, 80, 50, 80, 0, -60);

  // Pepperoni circles
  fill(200, 0, 0);
  circle(-20, 20, 20);
  circle(20, 30, 20);
  circle(0, -10, 20);

  // Green pepper toppings
  fill(0, 200, 0);
  circle(-10, 0, 10);
  circle(15, 10, 10);

  // Mushroom toppings
  fill(210, 180, 140);
  circle(-25, 30, 12);
  circle(10, -20, 12);

  angle += 1;
}
