const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var world,engine,left,poly,pol,box1,box2,box3,box4,box5,box6,box7,box8,box9,
box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
function preload(){
    poly=loadImage("polygon.png");

}
function setup(){
    createCanvas(1400,500);
    background(0)

    engine=Engine.create();
    world=engine.world;

    left=new Ground(600,400,350,20)
    right=new Ground(1000,200,350,20)
    down=new Ground(700,490,1400,20)

    //1
    
    box1=new Box(600,365)
    box2=new Box(640,365)
    box3=new Box(680,365)
    box4=new Box(720,365)
    box5=new Box(560,365)
    box6=new Box(520,365)
    box7=new Box(480,365)
    //2
    
    box8=new Box(620,325)
    box9=new Box(660,325)
    box10=new Box(700,325)
    box11=new Box(580,325)
    box12=new Box(540,325)
    //3
    
    box13=new Box(660,285)
    box14=new Box(620,285)
    box15=new Box(700,285)
    //4
    
    box16=new Box(700,245)

    //1
   
    box1r=new Box(1000,165)
    box2r=new Box(1040,165)
    box3r=new Box(1080,165)
    box4r=new Box(960,165)
    box5r=new Box(940,165)
    box6r=new Box(1120,165)
    box7r=new Box(900,165)
    //2
    box8r=new Box(1000,115)
    box9r=new Box(1040,115)
    box10r=new Box(1080,115)
    box11r=new Box(960,115)
    box12r=new Box(920,115)
    //3
    box13r=new Box(1000,65)
    box14r=new Box(1040,65)
    box15r=new Box(960,65)
    //4
    box16r=new Box(1000,15)

    pol=Bodies.circle(200,200,40,{density:2.5});
    World.add(world,pol)

    sling=new SlingShot(pol,{x:200,y:100});
    


   



    Engine.run(engine);



}
function draw(){

    background(0)


    left.display();
    right.display();
    down.display();
    fill("pink")

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("lightgreen")
    

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("lightpurple")

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box1r.display();
    box2r.display();
    box3r.display();
    box4r.display();
    box5r.display();
    box6r.display();
    box7r.display();

    fill("lightyellow")

    box8r.display();
    box9r.display();
    box10r.display();
    box11r.display();
    box12r.display();

    fill("lightblue")

    box13r.display();
    box14r.display();
    box15r.display();

    box16r.display();
    push();

    imageMode(CENTER);
    image(poly,pol.position.x,pol.position.y,40,40);

    pop()

    sling.display();


}
function mouseDragged(){
    pol.position.x=mouseX;
    pol.position.y=mouseY;

}
function mouseReleased(){
    sling.fly();

}
function keyPressed(){
    if (keyCode===32){
        sling.attach(pol);
        
    }

}
