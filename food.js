let foods;
let x;
let y;
class Food{

  constructor(){
    this.x = x; 
    this.y = y;
    
  }
  // generate random food location
location(){

  let x = floor(random(w));
  let y = floor(random(h));
  foods = createVector(x, y);

}
  
  
  
  
}
