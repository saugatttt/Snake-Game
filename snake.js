class Snake {
  // Snake object constructor (primary components of the snake)
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  // set direction of movement for the snake =
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  // update the position of the snake with it's latest body length
  update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  // increase length of snake in its body array after consumption of food 
  grow() {
  	let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  // end the game is the snake were to collide with a wall or itself
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  // let the snake grow if it makes contact with it's head on a piece of food 
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  // print the snkae to the scrren as a vector depending on it's movement in the array
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}
