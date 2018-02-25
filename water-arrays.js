

var num = [230,220];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, num[0], 20);
  
  // draw drip
  ellipse(num[0], num[1], 10);
  
 for (var i = random(0,5); i < 10; i = i + 6) {
    num[1] = num[1] + i
  }

	
  // if invisible for a full “height” amount…
  if (num[1] > height*2) {
    // reset
    num[1] = 220;
  }


}
	
