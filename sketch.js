
var ball;
var database;
var position;

var wall1, wall2, wall3, wall4, wall5, wall6,wall7,wall8;
var wall9, wall10, wall11, wall12, wall13, wall14,wall15,wall16;
var wall17, wall18, wall19, wall20, wall21, wall22, wall23,wall24;
//var prize, prizeimg
//var player
//var player2








function preload(){
 // prizeimg=loadImage("Coin2.webp")
  
}
function setup(){
  createCanvas(400,400)
  //database=firebase.database()
  database = firebase.database();
    var locationOfBall = database.ref('ball/positions')
    locationOfBall.on("value",readOp,showError)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  
  /*player = createSprite(5,5,10,10)
  player.shapeColor="red"
  player2 = createSprite(5,20,10,10)
  player2.shapeColor="blue"*/

  
   wall1 = createSprite(10,70,100,20);
wall1.shapeColor= "blue";

 wall2 =createSprite(100,50,20,100);
wall2.shapeColor = "blue";

 wall3 =createSprite(80,130,100,20);
wall3.shapeColor = "blue";

 wall4 =createSprite(50,250,20,100);
wall4.shapeColor = "blue";

 wall5 = createSprite(130,210,100,20);
wall5.shapeColor = "blue";

 wall6 =createSprite(10,250,100,20);
wall6.shapeColor = "blue";

 wall7 = createSprite(160,120,20,100);
wall7.shapeColor = "blue";

 wall8 =createSprite(150,20,100,20);
wall8.shapeColor = "blue";

 wall9 = createSprite(210,200,20,100);
wall9.shapeColor = "blue";

 wall10 = createSprite(120,300,20,100);
wall10.shapeColor = "blue";

 wall11 = createSprite(30,350,20,100);
wall11.shapeColor = "blue";

 wall12 = createSprite(250,70,20,100);
wall12.shapeColor = "blue";

 wall13 = createSprite(360,120,20,100);
wall13.shapeColor = "blue";

 wall14 =createSprite(291,160,100,20);
wall14.shapeColor = "blue";

 wall15 =createSprite(330,40,100,20);
wall15.shapeColor = "blue";

 wall16 =createSprite(350,210,100,20);
wall16.shapeColor = "blue";


 wall17 = createSprite(350,400,20,100);
wall17.shapeColor = "blue";



 wall19 =createSprite(349,290,100,20);
wall19.shapeColor = "blue";

 wall20 = createSprite(290,290,20,100);
wall20.shapeColor = "blue";

 wall21 =createSprite(270,390,100,20);
wall21.shapeColor = "blue";

 wall22 = createSprite(170,390,20,100);
wall22.shapeColor = "blue";
  
 wall23=createSprite(190,330,100,20);
wall23.shapeColor = "blue";

wall24 = createSprite(250,290,20,100);
wall24.shapeColor = "blue";
  
  //prize = createSprite(385,385,5,5)
 // prize.addImage("p", prizeimg)
 // prize.scale=0.1
}
function draw(){
  background("black")
  
  createEdgeSprites()
  
  
  /*player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
  player.collide(wall8)
  player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  player.collide(wall15)
  player.collide(wall16)
  player.collide(wall17)
  //player.collide(wall18)
  player.collide(wall19)
  player.collide(wall20)
  player.collide(wall21)
  player.collide(wall22)
  player.collide(wall23)
  player.collide(wall24)*/


  
  /*if(keyDown("UP_ARROW")){
    player2.y=player2.y-3
  }
    if(keyDown("DOWN_ARROW")){
    player2.y=player2.y+2
  }
    if(keyDown("RIGHT_ARROW")){
    player2.x=player2.x+2
  }
    if(keyDown("LEFT_ARROW")){
    player2.x=player2.x-2
  }
  drawSprites()*/
  //background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
  
  /*if(player.isTouching(prize)){
    textSize(30)
    fill("red")
    text("Red Has Won",140,200)
  }
    if(player2.isTouching(prize)){
    textSize(30)
    fill("blue")
    text("Blue Has Won",140,200)
  }*/
}

function changePosition(x,y){
  database.ref('ball/positions')
  .set({
      x:ball.x+x,
      y:ball.y+y
  })
}

function readOp(data){
  position = data.val()
  ball.x = position.x
  ball.y = position.y 
}

function showError(){
  console.log("error")
}