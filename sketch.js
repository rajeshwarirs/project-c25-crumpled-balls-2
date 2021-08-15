
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basketWall1,basketWall2,basketWall3,ground;
var paperBall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(400,280,800,10);
basketWall1 = new Dustbin(630,225,20,100);
basketWall2 = new Dustbin(690,265,100,20);
basketWall3 = new Dustbin(750,225,20,100);

paperBall = new Ball(200,200,30);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
  basketWall1.display();
  basketWall2.display();
  basketWall3.display();
  paperBall.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-150});
  }
}



