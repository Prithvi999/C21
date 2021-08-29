
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground, wall, wall1;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	wall = new Ground(600,400,5,105);
	wall1 = new Ground(770,400,5,105);
	ground =new Ground(450,450,900,5);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		density:1.2,
	}


	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
   

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
 
  background(0);

  Engine.update(engine);
  fill("white")
  ellipse(ball.position.x,ball.position.y,10);

  wall.show();
  wall1.show();
  ground.show();
  

  if(keyWentDown("space")){
	  force();
  }
  drawSprites();
 
}

function force(){
Matter.Body.applyForce(ball, {x:0, y:0}, {x:10,y:0})

}



