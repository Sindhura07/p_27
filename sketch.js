
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 

var  bob,bob2,bob3,bob4,bob5;
var ground;


function setup() {
	createCanvas(500,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(230,140,350,40);

     chain=new Chain(bob.body,ground.body,-bobDiameter*2,0)

    
    var bob_options ={
        'isStatic':true,
		'restitution': 0.3,
       'friction':5,
        'density':1
    }


    var bob2_options ={
        'restitution': 0.3,
        'friction':5,
		'isStatic':true,
        'density':1
    }
     

	var bob3_options ={
        'restitution': 0.3,
        'friction':5,
		'isStatic':true,
        'density':1
    }


	var bob4_options ={
        'restitution': 0.3,
        'friction':5,
		'isStatic':true,
        'density':1
    }


	var bob5_options ={
        'restitution': 0.3,
        'friction':5,
		'isStatic':true,
        'density':1
    }

    
    

     

    bob = Bodies.circle(350,400,10, bob_options);
    World.add(world,bob);

    bob2 = Bodies.circle(290,400,10, bob2_options);
    World.add(world,bob2);

	bob3 = Bodies.circle(230,400,10, bob3_options);
    World.add(world,bob3);

    bob4 = Bodies.circle(170,400,10, bob4_options);
    World.add(world,bob4);

	bob5 = Bodies.circle(110,400,10, bob5_options);
    World.add(world,bob5);
   

   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
   fill("teal")
   strokeWeight(2);
   stroke("black");
   ellipseMode(RADIUS);
   ellipse(bob.position.x, bob.position.y, 30, 30);

   fill("teal")
   strokeWeight(2);
   stroke("black");
   ellipseMode(RADIUS);
   ellipse(bob2.position.x, bob2.position.y, 30, 30);

   fill("teal")
   strokeWeight(2);
   stroke("black");
   ellipseMode(RADIUS);
   ellipse(bob3.position.x, bob3.position.y, 30, 30);

   fill("teal")
   strokeWeight(2);
   stroke("black");
   ellipse(bob4.position.x, bob4.position.y, 30, 30);

   fill("teal")
   strokeWeight(2);
   stroke("black");
   ellipseMode(RADIUS);
   ellipse(bob5.position.x, bob5.position.y, 30, 30);




  ground.display();
  chain.display();
  
 
  drawSprites();
 
}



