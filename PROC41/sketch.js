const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrealla1,drop1,thunder_1,thunder_2,thunder_3,thunder_4;
var drops=[];

function preload(){

}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){

        for(var i=0; i<drops.length; i++){
            drops.push(new drop(random(0,400), random(0,400)));
        }

    }

    umbrealla1=new umbrella(300,470)
    drop1=new drop(300,300)
    ground1=new ground(300,595,600,5)
}

function draw(){
    if(frameCount % 10 === 0){
        drops.push(new drop(random(0,400),0))
    }
    background("black")
    Engine.update(engine)
    for(var i = 0; i<drops.length; i++){
        drops[i].display();
        
        
    }
    
    umbrealla1.display()
    drop1.display()
}   
