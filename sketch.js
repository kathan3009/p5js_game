let rand;
let randAngle;
let funRand;
let arr = ["#ffffff","#1e2640","#FF0000","#800000","#FFFF00"]
let particle=[];
class Dots{
  
  constructor(){
  this.dot = createVector(random(windowWidth),random(windowHeight))
  this.vel = createVector(random(-8,8),random(-8,8))
  this.size = 10;
    
  }
  update(){
    this.dot.add(this.vel)
    this.edges()
  }
  draw(){
    fill(random(arr))
    circle(this.dot.x,this.dot.y,this.size) 
  }
  
  edges(){
    if(this.dot.x<0 || this.dot.x>width)
      {
        this.vel.x=this.vel.x*-1
      }
    if(this.dot.y<0 || this.dot.y>height)
      {
        this.vel.y=this.vel.y*-1
      }
  }
  connect(particles){
    particles.forEach(particle =>{ 
         
         let d = dist(this.dot.x,this.dot.y,particle.dot.x,particle.dot.y)
         if(d<90)
           {
             stroke("rgb(210,123,55,0.1)")
             line(this.dot.x,this.dot.y,particle.dot.x,particle.dot.y)
           }
    })
  }
}
let p;

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  rand = int(random(1, 10) * 10)
  randAngle = int(random(2, 20) * 10)
  funRand = int(random(0, 4))
  for(var i=0 ; i<windowWidth/10;i++)
  {
    particle.push(new Dots())
  }

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
      case 3:
      design3()
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
function design3(){
  translate(-windowWidth/2,-windowHeight/2)
  particle.forEach((p,index) => {
    p.update()
    p.draw()
    p.connect(particle.slice(index))
  })
}