

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400, 100, 100, 20)
	bob1 = new Bob(150, 600, 100);
	chain1 = new Chain(bob1.body, roof.body);
	bob2 = new Bob(250, 600, 100);
	chain2 = new Chain(bob2.body, roof.body);
	bob3 = new Bob(350, 600, 100);
	chain3 = new Chain(bob3.body, roof.body);
	bob4 = new Bob(450, 600, 100);
	chain4 = new Chain(bob4.body, roof.body);
	bob5 = new Bob(550, 600, 100);
	chain5 = new Chain(bob5.body, roof.body);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
	roof.display();
	bob1.display();
	chain1.display();
	bob2.display();
	chain2.display();
	bob3.display();
	chain3.display();
	bob4.display();
	chain4.display();
	bob5.display();
	chain5.display();

  	drawSprites();
 
}



