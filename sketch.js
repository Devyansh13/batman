var d1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

drops=[]
function preload(){
    
}

function setup(){
    createCanvas(500,600);
    engine = Engine.create();
    
    world = engine.world;
    
    d1=new Drop(100,100,20);
    for(var j = 40;j <=500;j=j+50)[
     // drops.push(new Drop(j,75))
    ]
}

function draw(){
    background(0);
    Engine.update(engine);
    d1.display();
    
    
}   

