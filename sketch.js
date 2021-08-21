const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,world,engine,Drop=[],thunder1,thunder2,thunder3,thunder4,boy1;

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    
}

function setup(){
   createCanvas(1200,500);

   engine = Engine.create();
   world = engine.world; 

   var maxDrops = 100;

   if(frameCount%150===0){
   for(var i=0; i<maxDrops; i++){
       Drop.push(new Drops(random(0,1200), random(0,700)))

       
   }
}
    boy1=new Boy();
}

function draw(){
    background("black")

    Engine.update(engine);
   
    for(var i=0; i<100; i++){
      Drop[i].display();
      Drop[i].updatey();
    }
   
    rand=Math.round(random(1,2))
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,1100),random(10,30),10,10)
    switch(rand){
        case 1 : thunder.addImage(thunder1);
        break;
        case 2 : thunder.addImage(thunder2);
        break;
        default:break;
    }
    thunder.scale=random(0.3,0.6)

    thunder.lifetime=80;
}
    boy1.display();
    
   drawSprites();
}   
