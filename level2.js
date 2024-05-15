import Character from "./characters.js";
import { data } from "./arrays.js";
import Obstacle from "./obstacles.js";
import Platform from "./platforms.js";

backgroundImage2 = loadImage("images/background2.png");

function setup() {
  createCanvas(600, 600);
  image(backgroundImage2, 0, 0, 600, 600);
  frameRate(30);
}

//array



const size = 4.5;

let dataBirdReflected = data.bird.map((row) => row.slice().reverse());

let positionBird = {x: 400, y: 450};
let positionBirdTwo = {x: 10, y: 380};
let positionBirdThree = {x: 50, y: 300};
let birdOne = new Obstacle(positionBird, data.bird, size,9);
let birdTwo = new Obstacle(positionBirdTwo, data.bird, size, 9);
let birdThree = new Obstacle(positionBirdThree, dataBirdReflected, size, -9);


let logPosition = { x: 450, y: 230 };
let logPositionTwo = { x: 110, y: 165 };
let logPositionThree = {x: 310, y: 100};
let logPositionFour = {x: 250, y:35};
let log = new Platform(logPosition, data.log, size, 240, 460);
let logTwo = new Platform(logPositionTwo, data.log, size, 100, 320);
let logThree = new Platform(logPositionThree, data.log, size, 100, 320);
let logFour = new Platform(logPositionFour, data.log, size, 240, 460);



//speed defined as 2 to make the "wind" effect
let veronica = new Character(275, 530, size, data.veronica, -2);

function draw() {
  image(backgroundImage2, 0, 0, 600, 600);

  birdOne.displayBird();
  birdTwo.displayBird();
  birdThree.displayBird();
  log.displayLog();
  logTwo.displayLog();
  logThree.displayLog();
  logFour.displayLog();

  veronica.display();
  veronica.movement();

  veronica.collide(birdOne);
  veronica.collide(birdTwo);


  veronica.collidePlatforms(log);
  veronica.collidePlatforms(logTwo);
  veronica.collidePlatforms(logThree);
  veronica.collidePlatforms(logFour);

   
}
