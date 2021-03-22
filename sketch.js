/* Objective: Consume the good green foods to grow whil avoiding colliding with the red food, the walls, or your own tail!

Main Edits: Made different food classes instead of just functions and added interaction with the collison between foods and the snake. Also added spacing functionallity between the foods. 
*/
// Notes: Trying to put if so that poison does not spawn in a ceratin radius of the snake head just like with the good food. Make good ending?
//declare variables
let snake;
let rez = 20;
let food;
let w;
let h;
let xPos, yPos;
//setup canvas and resolution this is done by setting the resolution scale - rez - and deviding the length of the canvas by that to get the new resolution
function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  food = new Food();
  poison = new BadFood(); 
  food.location();
  poison.location();
}

//user input controls 
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}
// draw the screen and call to functions that need to be ran and printed
function draw() {
  scale(rez);
  background(220);
  if (snake.eat(foods)) {
    food.location();
    poison.location();
    if ((badFood.x + 1) === (foods.x) || (badFood.x - 1) === (foods.x) || 
       (badFood.y + 1) === (foods.y) || (badFood.y - 1) === (foods.y)){
      poison.location();
      
    }
}
  if (snake.eat(badFood)) {
    print("YOU DIED");
    background(255, 0, 0);
    noLoop();
  }
  snake.update();
  snake.show();

// Print end game if player dies 
  if (snake.endGame()) {
    print("YOU LOSE");
    background(255, 0, 0);
    noLoop();
  }
  // draw good food
  noStroke();
  fill(0, 255, 0);
  rect(foods.x, foods.y, 1, 1);
//draw bad food 
  
    noStroke();
  fill(255, 0, 0);
//print (badFood.x);
  rect(badFood.x, badFood.y, 1, 1);

}
