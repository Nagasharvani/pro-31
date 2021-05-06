const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,ground1;
var division;
var particles=[];
 var divisions=[];
 var plinkos=[];
 var divisionHeight=300;

function setup() {
  createCanvas(400,800);
  
  engine = Engine.create();
    world = engine.world;

  ground1=new ground(200,height,400,20);
 // createSprite(400, 200, 50, 50);
 
 
 
}

function draw() {
  background("pink");   
  Engine.update(engine);
  ground1.display();
 
for (var k=0;k<=100;k=k+80)
{
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
//divisions.display();

  
  drawSprites();
}