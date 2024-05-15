import Character from "./characters.js";
import { data } from "./arrays.js";
import Obstacle from "./obstacles.js";
import Platform from "./platforms.js";
import Water from "./water.js";

let backgroundImage1 = "images/backgroundlevel1.png";
let backgroundImage2 = loadImage("images/background2.png");
let currentLevel = 1;

function setup() {
  createCanvas(600, 600);
  backgroundImage1 = loadImage("images/backgroundlevel1.png");
  frameRate(30);
}
window.setup = setup;

const size = 4.5;


//defines the starting position of each bus
let positionBus = { x: 0, y: 480 };
let positionBusTwo = { x: -350, y: 480 };
let positionBusThree = { x: 0, y: 360 };
let positionBusFour = { x: 450, y: 360 };

let busOne = new Obstacle(positionBus, data.bus, size, 3);
let busTwo = new Obstacle(positionBusTwo, data.bus, size, 3);

/* the following lines of code were adapted courtesy of ChatGPT --> https://chat.openai.com/share/49ffdcc4-c8e7-4a13-acc7-b9d53fbb5ed6
map() applies the function to each element in the array (in this case the rows of dataBus),
the row=>row part takes the row argument and returns it unchanged, slice() creates a copy of
the rows, and reverse() reverses it, effectively reflecting the dataBus array */
let dataBusReflected = data.bus.map((row) => row.slice().reverse());
//using a negative speed makes it so that the busses on top go right to left
let busThree = new Obstacle(positionBusThree, dataBusReflected, size, -5);
let busFour = new Obstacle(positionBusFour, dataBusReflected, size, -5);

let rockPosition = { x: 450, y: 230 };
let rockPositionTwo = { x: 110, y: 165 };
let rock = new Platform(rockPosition, data.rock, size, 240, 460);
let rockTwo = new Platform(rockPositionTwo, data.rock, size, 100, 320);

let carPosition = { x: 250, y: 25 };
let car = new Platform(carPosition, data.car, size, 100, 300);

let nina = new Character(275, 540, size, data.nina, 0);

let waterLevelOne = new Water(0, 0, 600, 300);

// level two mechanics
let dataBirdReflected = data.bird.map((row) => row.slice().reverse());

let positionBird = { x: 400, y: 450 };
let positionBirdTwo = { x: 10, y: 380 };
let positionBirdThree = { x: 50, y: 300 };
let birdOne = new Obstacle(positionBird, data.bird, size, 9);
let birdTwo = new Obstacle(positionBirdTwo, data.bird, size, 9);
let birdThree = new Obstacle(positionBirdThree, dataBirdReflected, size, -9);

let logPosition = { x: 450, y: 230 };
let logPositionTwo = { x: 110, y: 165 };
let logPositionThree = { x: 310, y: 100 };
let logPositionFour = { x: 250, y: 35 };
let log = new Platform(logPosition, data.log, size, 240, 460);
let logTwo = new Platform(logPositionTwo, data.log, size, 100, 320);
let logThree = new Platform(logPositionThree, data.log, size, 100, 320);
let logFour = new Platform(logPositionFour, data.log, size, 240, 460);

//speed defined as 2 to make the "wind" effect
let veronica = new Character(275, 530, size, data.veronica, -2);




function drawLevel1(){
  image(backgroundImage1, 0, 0, 600, 600);

  noStroke();
  waterLevelOne.displayWater();
  rock.displayRock();
  rockTwo.displayRock();
  car.displayCar();

  busOne.displayBus();
  busTwo.displayBus();
  busThree.displayBus();
  busFour.displayBus();

  nina.displayNina();
  nina.movement();

  nina.collide(busOne);
  nina.collide(busTwo);
  nina.collide(busThree);
  nina.collide(busFour);

  nina.collidePlatforms(rock);
  nina.collidePlatforms(rockTwo);
  nina.collidePlatforms(car);
}

function drawLevel2(){
  image(backgroundImage2, 0, 0, 600, 600);

  birdOne.displayBird();
  birdTwo.displayBird();
  birdThree.displayBird();
  log.displayLog();
  logTwo.displayLog();
  logThree.displayLog();
  logFour.displayStillLog();

  veronica.displayVeronica();
  veronica.movement();

  veronica.collide(birdOne);
  veronica.collide(birdTwo);

  veronica.collidePlatforms(log);
  veronica.collidePlatforms(logTwo);
  veronica.collidePlatforms(logThree);
  veronica.collidePlatforms(logFour);
}



function draw(){
  if (currentLevel === 1) {
    drawLevel1();
  } else if (currentLevel === 2) {
    drawLevel2();}
    if (nina.y < 35 && currentLevel === 1) {
      currentLevel = 2;
    }
}


window.draw = draw;
