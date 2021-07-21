
var background1;
var bg;
var jet,jet1;
function preload(){
bg=loadImage("images/bg2.jpg");
jet1=loadImage("images/fj.gif");
}

function setup(){
createCanvas(displayWidth,displayHeight);
background1=createSprite(displayWidth,displayHeight);
background1.addImage(bg);
background1.scale=5;
jet =createSprite(displayWidth/2.5,displayHeight/1.2,50,50);
jet.addImage(jet1);
jet.scale=0.5;
}

function draw(){
    background(255);  

    if(keyIsDown(LEFT_ARROW)){
        jet.x=jet.x-10;
    }
    if(keyIsDown(RIGHT_ARROW)){
        jet.x=jet.x+10;
    }
    
  
drawSprites();
}