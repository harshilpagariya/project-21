var canvas;
var music;
var brick1;
var brick2;
var brick3;
var brick4;
var ball;


function preload(){
    music = loadSound("music.mp3");







}


function setup(){
    canvas = createCanvas(800,500);

    brick1 = createSprite (50,490,125,15);
    brick1.shapeColor = "red"

    brick2 = createSprite (180,490,125,15);
    brick2.shapeColor = "yellow"

    brick3 = createSprite (310,490,125,15);
    brick3.shapeColor = "blue"

    brick4 = createSprite (440,490,125,15);
    brick4.shapeColor = "green"

    ball = createSprite (70,370,25,25);
    ball.shapeColor = "black"

  if (brick1.isTouching (ball) && ball.bounceOff(brick1)) {

     ball.shapeColor = "red"
     brick1.shapeColor = "red"
  }   
  

if (brick2.isTouching (ball) && ball.bounceOff(brick2)) {

    ball.shapeColor = "yellow"
    brick2.shapeColor = "yellow"
 }   

 if (brick3.isTouching (ball) && ball.bounceOff(brick3)) {

    ball.shapeColor = "yellow"
    brick3.shapeColor = "yellow"
 }   

 if (brick4.isTouching (ball) && ball.bounceOff(brick4)) {

    ball.shapeColor = "yellow"
    brick4.shapeColor = "yellow"
 }   


}







function draw() {
    background(rgb(169,169,169));
    





 drawSprites()

    //add condition to check if box touching surface and make it box
}
