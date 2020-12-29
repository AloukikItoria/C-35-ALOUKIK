var database;
var ball;
var position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //READING FROM DATABSE
var ballPositionRef = database.ref("ball/position");//index
ballPositionRef.on("value", readPosition)
}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
//WRITING INTO DATABASE
function writePosition(x,y){
  database.ref("ball/position").set({
    "x": position.x + x,
    "y": position.y + y
  });
   
}

function readPosition(data){
position = data.val();//extract information from JSON format
ball.x = position.x;
ball.y = position.y;

}