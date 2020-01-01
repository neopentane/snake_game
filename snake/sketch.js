let snake;
let speed=1;
let rez=100;
let w;
let h;
let food;
function setup() {
	createCanvas(800,800);
	w = floor(width/rez);
	h= floor(height/rez);
	frameRate(360);
	snake = new Snake();
	foodLocation();
}
function foodLocation(){
	let x=floor(random(w));
	let y=floor(random(h));
	food = createVector(x,y);
}
function keyPressed(){
	switch(keyCode){
		case LEFT_ARROW:
			snake.setDir(-speed,0);
			break;
		case RIGHT_ARROW:
			snake.setDir(speed,0);
			break;
		case DOWN_ARROW:
			snake.setDir(0,speed);
			break;
		case UP_ARROW:
			snake.setDir(0,-speed);
			break;
	}
}
function draw() {
  background(220);
  //ellipse(50, 50, 80, 80);
  scale(rez);
  noStroke();
  if(snake.eat(food)){
	  foodLocation();
  }
  if(snake.endGame()){
	  background(255,0,0);
	  snake = new Snake();
  }
  snake.update();
  snake.show();
  //snake.bfs(food);
  snake.hamilton();
  fill(255,0,0);
  rect(food.x,food.y,1,1);
}