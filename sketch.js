const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var bird, slingshot;

var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,315,70,70);
    box2 = new Box(700,350,70,70);
    box3 = new Box(700,275,70,70);

    log1 = new Log(810,320,300, PI/2);
    log2 = new Log(810,280,300, PI/2);

    box4 = new Box(810,315,70,70);
    box5 = new Box(810,350,70,70);
    box6 = new Box(810,275,70,70);

    box7 = new Box(920,315,70,70);
    box8 = new Box(920,350,70,70);
    box9 = new Box(920,275,70,70);

    bird = new Bird(200,230);

    slingshot = new SlingShot(bird.body,{x:200, y:230});
}

function draw(){
    background(205);

    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    log1.display();
    log2.display();

    box1.display(); 
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    bird.display();

    slingshot.display();

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
        slingshot.attach(bird.body);
    }
}

