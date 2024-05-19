import Character from "./characters.js";
import { data } from "./arrays.js";
import Obstacle from "./obstacles.js";
import Platform from "./platforms.js";
import Water from "./water.js";

let gameIsRunning = false;
let gameStart = true;
let gameIsOver = false;

let backgroundImage1;
let backgroundImage2;
let backgroundImage3;
let startScreenImage;
let gameOverImage;

let currentLevel = 1;

function setup() {
  createCanvas(600, 600);
  frameRate(30);
  backgroundImage1 = loadImage("images/backgroundlevel1.png");
  backgroundImage2 = loadImage("images/background2.png");
  backgroundImage3 = loadImage("images/background3.png");
  startScreenImage = loadImage("images/startscreen.png");
  gameOverImage = loadImage("images/gameover.png");
}
window.setup = setup;

//set pixel size for all of the arrays
const size = 4.5;

//START SCREEN
function startScreen() {
  gameStart = true;
  gameIsOver = false;
  gameIsRunning = false;
  image(startScreenImage, 0, 0, 600, 600);
  textSize(18);
  fill(0);
  textAlign(CENTER, CENTER);
  text("press space to start", 300, 330);

  if (keyIsPressed && key === " ") {
    gameIsRunning = true;
    gameStart = false;
  }
}

//GAME OVER SCREEN
function gameOver() {
  gameIsRunning = false;
  gameIsOver = true;
  image(gameOverImage, 0, 0, 600, 600);
  textSize(18);
  fill(255);
  textAlign(CENTER, CENTER);
  text("press space to retry", 300, 400);

  if (keyIsPressed && key === " ") {
    gameIsRunning = true;
    gameIsOver = false;
  }
}

//LEVEL 1

//defines the starting position of each bus
let positionBus = { x: 0, y: 480 };
let positionBusTwo = { x: -350, y: 480 };
let positionBusThree = { x: 0, y: 360 };
let positionBusFour = { x: 450, y: 360 };

//creates all four buses. two are in one direction, the other two are reflected.
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

//defines the starting position of each rock
let rockPosition = { x: 450, y: 230 };
let rockPositionTwo = { x: 110, y: 165 };

//creates both rocks
let rock = new Platform(rockPosition, data.rock, size, 240, 460); //the position of every obstacle (rockPosition here) represents the starting position, while the numbers after the size represent the min and max x position.
let rockTwo = new Platform(rockPositionTwo, data.rock, size, 100, 320);

//defines position for the car
let carPosition = { x: 250, y: 25 };

//creates the car
let car = new Platform(carPosition, data.car, size, 100, 300);

//create the character nína
let nina = new Character(275, 540, size, data.nina, 0);

//creates the bounding box for water at the top
let waterLevelOne = new Water(0, 0, 600, 300);

function drawLevel1() {
  image(backgroundImage1, 0, 0, 600, 600);

  noStroke();

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

  //if colliding with both water and rocks, you keep going
  const collideWithWater = nina.collideWater(waterLevelOne);

  const collisionRock1 = nina.collidePlatforms(rock);
  const collisionRock2 = nina.collidePlatforms(rockTwo);
  const collisionCar = nina.collidePlatforms(car);

  if (collideWithWater && !collisionRock1 && !collisionRock2 && !collisionCar) {
    gameOver();
  }
}

//LEVEL 2

//creates the bounding boxes for the water, one at the top, one on the left and one on the right
let waterLevelTwoTop = new Water(0, 0, 600, 300);

// level two mechanics
let dataBirdReflected = data.bird.map((row) => row.slice().reverse());

//defines starting positions for the birds
let positionBird = { x: 400, y: 450 };
let positionBirdTwo = { x: 10, y: 380 };
let positionBirdThree = { x: 50, y: 300 };

//creates three birds
let birdOne = new Obstacle(positionBird, data.bird, size, 9);
let birdTwo = new Obstacle(positionBirdTwo, data.bird, size, 9);
let birdThree = new Obstacle(positionBirdThree, dataBirdReflected, size, -9);

//degines starting positions for the logs
let logPosition = { x: 200, y: 240 };
let logPositionTwo = { x: 110, y: 165 };
let logPositionThree = { x: 310, y: 100 };
let logPositionFour = { x: 250, y: 35 };

//create four logs
let log = new Platform(logPosition, data.log, size, 200, 450);
let logTwo = new Platform(logPositionTwo, data.log, size, 100, 320);
let logThree = new Platform(logPositionThree, data.log, size, 100, 320);
let logFour = new Platform(logPositionFour, data.log, size, 240, 460);

//create veronica character. speed defined as -2 to make the "wind" effect
let veronica = new Character(275, 530, size, data.veronica, -2);

function drawLevel2() {
  image(backgroundImage2, 0, 0, 600, 600);

  birdOne.displayBird();
  birdTwo.displayBird();
  birdThree.displayBird();
  log.displayLog();
  logTwo.displayLog();
  logThree.displayLog();
  logFour.displayStillLog(); //created a separate display function for one of the logs not to move

  veronica.displayVeronica();
  veronica.movement();

  //collisions with birds
  veronica.collide(birdOne);
  veronica.collide(birdTwo);

  //if colliding with both water and logs, you can keep playing
  const collideWithWaterTop = veronica.collideWater(waterLevelTwoTop);

  const collisionLog1 = veronica.collidePlatforms(log);
  const collisionLog2 = veronica.collidePlatforms(logTwo);
  const collisionLog3 = veronica.collidePlatforms(logThree);
  const collisionLog4 = veronica.collidePlatforms(logFour);

  if (
    collideWithWaterTop &&
    !collisionLog1 &&
    !collisionLog2 &&
    !collisionLog3 &&
    !collisionLog4
  ) {
    gameOver();
  }
  if (veronica.x < 80 || veronica.x > 470) {
    gameOver();
  }
}

//LEVEL 3

let coffee = new Water(0, 0, 600, 300);

//define starting position for the tables
let tablePosition = { x: 200, y: 240 };
let table2Position = { x: 300, y: 180 };
let table3Position = { x: 100, y: 120 };
let table4Position = { x: 200, y: 60 };

//create tables
let table = new Platform(tablePosition, data.table, size, 200, 400);
let table2 = new Platform(table2Position, data.table, size, 300, 400);
let table3 = new Platform(table3Position, data.table, size, 100, 350);
let table4 = new Platform(table4Position, data.table, size, 100, 250);

//create ene character
let ene = new Character(275, 530, size, data.ene);
let rando1 = new Obstacle(100, 330, size, data.rando);
let rando2 = new Obstacle(175, 430, size, data.rando);

function drawLevel3() {
  image(backgroundImage3, 0, 0, 600, 600);

  table.update();
  table.displaySinkingTable();
  table2.displayTable();
  table3.displayTable();
  table4.displayTable();

  ene.displayEne();
  ene.movement();

  rando1.displayRando1();
  rando2.displayRando2();

  const collideWithCoffee = ene.collideWater(coffee);

  const collisionTable1 = ene.collidePlatforms(table);
  const collisionTable2 = ene.collidePlatforms(table2);
  const collisionTable3 = ene.collidePlatforms(table3);
  const collisionTable4 = ene.collidePlatforms(table4);

  if (collisionTable1 && !table.sinking) {
    table.sinkingStart();
  }

  if (
    collideWithCoffee &&
    !collisionTable1 &&
    !collisionTable2 &&
    !collisionTable3 &&
    !collisionTable4
  ) {
    gameOver();
  }
}

function draw() {
  if (gameStart) {
    startScreen();
  } else if (gameIsRunning) {
    gameStart = false;
    gameIsOver = false;
    if (currentLevel === 1) {
      drawLevel3();
    } else if (currentLevel === 2) {
      drawLevel2();
    } else if (currentLevel === 3) {
      drawLevel3();
    }
    if (nina.y < -20 && currentLevel === 1) {
      currentLevel = 2;
    } else if (veronica.y < -20 && currentLevel === 2) {
      currentLevel = 3;
    }
  } else if (gameIsOver) {
    gameOver();
  }
}

window.draw = draw;
