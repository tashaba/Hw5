could only create an array...

var circle1= [100,200,100]
var circle2= [300,200,30]




function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(255);
  noStroke();

	
	for (var i = 0; i < 50; i = i + 1) {
  fill(120, 60, 100);
  ellipse(circle1[0], circle1[1], circle1[2]);
  
  fill(240, 60, 100);
  ellipse(circle2[0], circle2[1], circle2[2]);
	}
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    circle1[2] = random(10, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    circle2[2] = random(10, 400);
  }
}

  
 
