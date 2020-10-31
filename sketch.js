const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var clue1b ; 

var form;

var name = null;
var playerCount = 0; 
var k =1;
var bg;
var farmer;
var gameState  = "start";

function preload(){
  background_img = loadImage("background.jpg");
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth,displayHeight);
 // createSprite(400, 200, 50, 50);

 //bg =  createSprite(displayWidth/2,displayHeight/2,displayWidth*12,displayHeight);
 //bg.addImage(background_img);
// bg.velocityX = -5;
 
 form = new Form();
ground1 = new Ground(680,740,displayWidth*10,140);

clue1 = new Paper(400,400);

//test = new Ground(500,500,50,50);
farmer = new Farmer(150,600,325,350);
 Engine.run(engine);
}

function draw() {

  Engine.update(engine);
  background(120);  
  if(gameState==="start"){
    form.display();
  }


 if(gameState === "play"){
  

  background(background_img);
  clue1.display();
  /*if(bg.x<0){
    bg.x = bg.width/2;
  }*/
    
  
   form.hide();
   
ground1.display();
farmer.display();

camera.position.x = farmer.body.position.x;
//console.log(farmer.body.position.x);

if(isTouching(farmer.body,clue1.body)){
  clue1b = createButton('OPEN');
  clue1b.position(displayWidth/2-50,displayHeight/4);
}

 }
 drawSprites();
  
 
  
}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
  farmer.body.position.x+=10;

}

if(keyCode === LEFT_ARROW){
  farmer.body.position.x-=10;
  
}

  
}

function isTouching(obj1,obj2){
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 &&obj2.x-obj1.x<obj1.width/2+obj2.width/2 
      &&obj1.y-obj2.y<obj1.height/2+obj2.height/2
      &&obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      return true;
  
    }
  
  
  
    else{
      return false;
    }
  
  }

