const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var polygon,polygonImage;
var sling;
var ball;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
var box17,box18,box19,box20,box21;

/*function preload(){
    polygonImage = loadImage('polygon.png')
}*/



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    /*polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)*/

    
    

    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(400, 430, 50, 50);
  box2 = new Box(450, 430, 50, 50);
  box3 = new Box(500, 430, 50, 50);
  box4 = new Box(550, 430, 50, 50);
  box5 = new Box(600, 430, 50, 50);
  box6 = new Box(425, 380, 50, 50);
  box7 = new Box(475, 380, 50, 50);
  box8 = new Box(525, 380, 50, 50);
  box9 = new Box(575, 380, 50, 50);
  box10 = new Box(450, 330, 50, 50);
  box11 = new Box(500, 330, 50, 50);
  box12 = new Box(550, 330, 50, 50);
  box13 = new Box(475, 280, 50, 50);
  box14 = new Box(525, 280, 50, 50);
  box15 = new Box(500, 230, 50, 50);

  box16 = new Box(850, 230, 50, 50);
  box17 = new Box(900, 230, 50, 50);
  box18 = new Box(950, 230, 50, 50);
  box19 = new Box(870, 180, 50, 50);
  box20 = new Box(920, 180, 50, 50);
  box21 = new Box(900, 130, 50, 50);

  
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 470, 300, 20);
  stand2 = new Ground(900, 270, 200, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
   // console.log(box1)
    
    
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);

   /* imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40)*/

    ground.display();
    stand1.display();
    stand2.display();
    box1.display("pink");
    box2.display("pink");
    box3.display("pink");
    box4.display("pink");
    box5.display("pink");
    box6.display("blue");
    box7.display("blue");
    box8.display("blue");
    box9.display("blue");
    box10.display("green");
    box11.display("green");
    box12.display("green");
    box13.display("limegreen");
    box14.display("limegreen");
    box15.display('purple');
    box16.display('pink');
    box17.display('pink');
    box18.display('pink');
    box19.display('blue');
    box20.display('blue');
    box21.display('green');
    sling.display("red");
    ball.display("yellow");
}
  
   /*fill("orange");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)*/


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

/*function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}*/