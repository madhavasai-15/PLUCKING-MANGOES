const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boyImage;
var treeImage;
var stone;
var mango1, mango2, mango3, mango4, mango5,
	mango6, mango7, mango8, mango9, mango10;
var slingShot;	

function preload(){
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup(){
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 595, 1200, 100, 130, 84, 55);

	stone = new Stone(125, 420);

	mango1 = new Mango(600, 300);
	mango2 = new Mango(850, 300);
	mango3 = new Mango(700, 250);
	mango4 = new Mango(900, 300);
	mango5 = new Mango(1000, 300);
	mango6 = new Mango(750, 320);
	mango7 = new Mango(750, 200);
	mango8 = new Mango(1000, 300);
	mango9 = new Mango(900, 200);
	mango10 = new Mango(800, 150);

	slingShot = new SlingShot(stone.body, {x:125 ,y: 420});

	Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
  	background(0,148, 255);
	Engine.update(engine);
	ground.display();

  	imageMode(CENTER);
	image(boyImage, 200, 483, 240, 240);
	image(treeImage, 800, 340, 480, 480);

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);

	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	slingShot.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 125, y: 420});
		slingShot.attach(stone.body);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.width){
		Matter.Body.setStatic(lmango.body, false);
	}
}

