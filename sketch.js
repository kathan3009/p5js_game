let rand;
let randAngle;
let funRand

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  rand = int(random(1, 10) * 10)
  randAngle = int(random(2, 20) * 10)
  funRand = int(random(0, 3))


}

function draw() {
  background(0);
  switch (funRand) {
    case 0:
      pattern()
      break;
    case 1:
      design()
      break;
    case 2:
      design2()
      break;
    default:

  }

}

function pattern() {
  rotateX(randAngle);

  for (let i = 0; i < 400; i++) {
    let r = random(60);
    rotate(frameCount / 50 + sin(rand))
    stroke(r * 8);
    line(20, i, 20 + r, i);
  }
}

function design() {

  rotateX(randAngle);

  noFill()
  stroke(255)
  for (var i = 0; i < 50; i++) {
    stroke(231, 41, 124)
    rotate(frameCount / 80)
    beginShape()
    for (var j = 0; j < 360; j += rand) {
      var rad = i * 5;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50
      vertex(x, y, z)
    }

    endShape(CLOSE);
  }

}
function design2() {

  rotateX(randAngle);

  noFill()
  stroke(255)
  for (var i = 0; i < 50; i++) {
    stroke(231, 41, 124)
    rotate(frameCount / 80)
    beginShape()
    for (var j = 0; j < 360; j += rand) {
      var rad = i * 5;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = tan(frameCount * 2 + i * 5) * 50
      vertex(x, y, z)
    }

    endShape(CLOSE);
  }

}