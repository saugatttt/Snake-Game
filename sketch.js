//Saugat Shrestha
//Coding Train Challenge
//snake game with controls that get inverted every time you eat

let snake;
let rez = 20;
let food;
let w;
let h;
let inverted = false; //creative refactoring

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(inverted === false){
      snake.setDir(-1, 0);
      }
    else if(inverted === true){  //creative refactoring
      snake.setDir(1, 0);
    }
  }
    
  if (keyCode === RIGHT_ARROW) {
    if(inverted === false){
      snake.setDir(1, 0);
      }
    else if(inverted === true){
      snake.setDir(-1, 0);
    }
  }
  
  if (keyCode === UP_ARROW) {
    if(inverted === false){
      snake.setDir(0, -1);
      }
    else if(inverted === true){
      snake.setDir(0, 1);
    }
  }
    
  if (keyCode === DOWN_ARROW) {
    if(inverted === false){
      snake.setDir(0, 1);
      }
    else if(inverted === true){
      snake.setDir(0, -1);
    }
  }

  else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
    if(inverted===false){   //creative refactoring
      inverted = true;
    }
    else if(inverted===true){
      inverted = false;
    }
  }
  snake.update();
  snake.show();
  

  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
