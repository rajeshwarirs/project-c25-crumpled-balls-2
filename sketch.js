
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ground;
var wall1, wall2,wall3;
var paper;
function preload(){
dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(400,280,800,10);
 wall1= new Dustbin(630,225,20,100);
 wall2= new Dustbin(690,265,100,20);
 wall3= new Dustbin(750,225,20,100);

paper = new Ball(200,200,30);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  image(dustbin,620,175,140,100);
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Body.applyForce(paper.body,paper.body.position,{x:120,y:-150});
  }
}



