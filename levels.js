import Character from "./characters.js";
import { data } from "./arrays.js";
import Obstacle from "./obstacles.js";
import Platform from "./platforms.js";
import Water from "./water.js";
import Powerup from "./powerup.js";

let gameIsRunning = false;
let gameStart = true;
let gameIsOver = false;
let gameIsWon = false;

let backgroundImage1;
let backgroundImage2;
let backgroundImage3;
let startScreenImage;
let gameOverImage;
let gameWonImage;

let currentLevel = 1;

//redefines start positions for characters so game restart works
function resetCharacters() {
  nina = new Character(275, 540, size, data.nina, 0);
  veronica = new Character(275, 530, size, data.veronica, -2);
  ene = new Character(275, 530, size, data.ene);
  redbull = new Powerup({ x: 65, y: 550 }, data.redbull, size);
}

function setup() {
  createCanvas(600, 600);
  frameRate(30);
  backgroundImage1 = loadImage("images/backgroundlevel1.png");
  backgroundImage2 = loadImage("images/background2.png");
  backgroundImage3 = loadImage("images/background3.png");
  startScreenImage = loadImage("images/startscreen.png");
  gameOverImage = loadImage("images/gameover.png");
  gameWonImage = loadImage("images/gamewon.png");
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
    currentLevel = 1;
    resetCharacters();
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
  text("press 'R' to retry", 300, 400);

  if (keyIsPressed && key === "r") {
    gameIsOver = false;
    gameIsRunning = true;
    resetCharacters();
  }
}

//GAME WON SCREEN
function gameWon() {
  gameIsRunning = false;
  gameIsWon = true;
  image(gameWonImage, 0, 0, 600, 600);
  textSize(18);
  fill(255);
  textAlign(CENTER, CENTER);
  text("press space to start again", 300, 280);

  if (keyIsPressed && key === " ") {
    gameStart = true;
    gameIsWon = false;
  }
}

//LEVEL 1

//arrays
let obstaclesLevel1 = [];
let platformsLevel1 = [];
let waterLevel1 = new Water(0, 0, 600, 300);

//creates all four buses. two are in one direction, the other two are reflected.
let busOne = new Obstacle({ x: 0, y: 480 }, data.bus, size, 3);
let busTwo = new Obstacle({ x: -350, y: 480 }, data.bus, size, 3);
let busThree = new Obstacle(
  { x: 0, y: 360 },
  data.bus.map((row) => row.slice().reverse()),
  size,
  -5
);
let busFour = new Obstacle(
  { x: 450, y: 360 },
  data.bus.map((row) => row.slice().reverse()),
  size,
  -5
);

/* the lines of code for reflecting the array of the buses were adapted courtesy of ChatGPT --> https://chat.openai.com/share/49ffdcc4-c8e7-4a13-acc7-b9d53fbb5ed6
map() applies the function to each element in the array (in this case the rows of dataBus),
the row=>row part takes the row argument and returns it unchanged, slice() creates a copy of
the rows, and reverse() reverses it, effectively reflecting the dataBus array */

//add buses to obstacle array
obstaclesLevel1.push(busOne, busTwo, busThree, busFour);

//creates both rocks
let rock = new Platform({ x: 450, y: 230 }, data.rock, size, 240, 460);
let rockTwo = new Platform({ x: 110, y: 165 }, data.rock, size, 100, 320);
//add rocks to platform array
platformsLevel1.push(rock, rockTwo);

//creates the car
let car = new Platform({ x: 250, y: 25 }, data.car, size, 100, 300);
// add car to platform array
platformsLevel1.push(car);

//create the character nína
let nina = new Character(275, 540, size, data.nina, 0);

function drawLevel1() {
  image(backgroundImage1, 0, 0, 600, 600);

  noStroke();

  // display rocks and car
  platformsLevel1.forEach((platform) => {
    if (platform === car) {
      platform.displayCar();
    } else {
      platform.displayRock();
    }
  });

  // display buses
  obstaclesLevel1.forEach((obstacle) => obstacle.displayBus());

  nina.displayNina();
  nina.movement();

  // check collisions with buses
  obstaclesLevel1.some((obstacle) => nina.collide(obstacle));

  // check collisions with water and platforms
  const collideWithWater = nina.collideWater(waterLevel1);
  const collisionPlatforms = platformsLevel1.some((platform) =>
    nina.collidePlatforms(platform)
  );

  if (collideWithWater && !collisionPlatforms) {
    gameOver();
  }
}

//LEVEL 2

//arrays
let obstaclesLevel2 = [];
let platformsLevel2 = [];

//creates the bounding boxes for the water, one at the top, one on the left and one on the right
let waterLevelTwoTop = new Water(0, 0, 600, 300);

// level two mechanics
let dataBirdReflected = data.bird.map((row) => row.slice().reverse());

//creates three birds
let birdOne = new Obstacle({ x: 400, y: 450 }, data.bird, size, 9);
let birdTwo = new Obstacle({ x: 10, y: 380 }, data.bird, size, 9);
let birdThree = new Obstacle({ x: 50, y: 300 }, dataBirdReflected, size, -9);

//adds birds to obstacle array
obstaclesLevel2.push(birdOne, birdTwo, birdThree);

//create four logs
let log = new Platform({ x: 200, y: 240 }, data.log, size, 200, 450);
let logTwo = new Platform({ x: 110, y: 165 }, data.log, size, 100, 320);
let logThree = new Platform({ x: 310, y: 100 }, data.log, size, 100, 320);
let logFour = new Platform({ x: 250, y: 35 }, data.log, size, 240, 460);

//adds logs to platform array
platformsLevel2.push(log, logTwo, logThree);

//create veronica character. speed defined as -2 to make the "wind" effect
let veronica = new Character(275, 530, size, data.veronica, -2);

function drawLevel2() {
  image(backgroundImage2, 0, 0, 600, 600);

  obstaclesLevel2.forEach((obstacle) => obstacle.displayBird());
  platformsLevel2.forEach((platform) => platform.displayLog());
  logFour.displayStillLog(); //created a separate display function for one of the logs not to move

  veronica.displayVeronica();
  veronica.movement();

  // check collisions with birds
  const collisionObstacles = obstaclesLevel2.some((obstacle) =>
    veronica.collide(obstacle)
  );

  //if colliding with both water and logs, you can keep playing
  const collideWithWaterTop = veronica.collideWater(waterLevelTwoTop);
  const collisionPlatforms = platformsLevel2.some((platform) =>
    veronica.collidePlatforms(platform)
  );
  veronica.collidePlatforms(logFour);

  if ((collideWithWaterTop && !collisionPlatforms) || collisionObstacles) {
    gameOver();
  }
  if (veronica.x < 80 || veronica.x > 470) {
    gameOver();
  }
}

//LEVEL 3

//arrays
let randosRight = [];
let randosLeft = [];
let platformsLevel3 = [];

let coffee = new Water(0, 0, 600, 300);

//reflected randos
let randoReflected = data.rando.map((row) => row.slice().reverse());

//create two randos
let rando1 = new Obstacle({ x: 10, y: 330 }, randoReflected, size, 12);
let rando2 = new Obstacle({ x: 10, y: 370 }, data.rando, size, -13);
let rando3 = new Obstacle({ x: 30, y: 460 }, randoReflected, size, 14);
let rando4 = new Obstacle({ x: 200, y: 330 }, data.rando, size, -12);
let rando5 = new Obstacle({ x: 300, y: 460 }, randoReflected, size, 13);
let rando6 = new Obstacle({ x: 400, y: 370 }, data.rando, size, -14);

//add randos to obstacle array
randosRight.push(rando1, rando3, rando5);
randosLeft.push(rando2, rando4);

//create ene character
let ene = new Character(275, 530, size, data.ene);

//create redbull
let redbull = new Powerup({ x: 65, y: 550 }, data.redbull, size);

//create tables
let table = new Platform({ x: 200, y: 240 }, data.table, size, 200, 400);
let table2 = new Platform({ x: 300, y: 180 }, data.table, size, 300, 400);
let table3 = new Platform({ x: 100, y: 120 }, data.table, size, 100, 350);
let table4 = new Platform({ x: 200, y: 60 }, data.table, size, 100, 250);
let table5 = new Platform({ x: 200, y: 5 }, data.table, size, 200, 350);

//adds tables to platform array
platformsLevel3.push(table, table2, table3, table4, table5);

function drawLevel3() {
  image(backgroundImage3, 0, 0, 600, 600);

  //display randos and tables. we have 2 display functions for randos because we wanted different colors
  randosRight.forEach((obstacle) => obstacle.displayRando1());
  randosLeft.forEach((obstacle) => obstacle.displayRando2());
  platformsLevel3.forEach((platform) => platform.displayTable());

  ene.displayEne();
  ene.movement();
  redbull.display();
  ene.collidePowerup(redbull);

  // check collisions with randos
  const collisionObstacles = randosLeft.some((obstacle) =>
    ene.collide(obstacle)
  );
  const collisionObstacles2 = randosRight.some((obstacle) =>
    ene.collide(obstacle)
  ); 

  //collision with water and platforms
  const collideWithCoffee = ene.collideWater(coffee);
  const collisionPlatforms = platformsLevel3.some((platform) =>
    ene.collidePlatforms(platform)
  );

  if (collideWithCoffee && !collisionPlatforms) {
    gameOver();
  }

  if (ene.y < -20) {
    gameWon();
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
    if (nina.y < 30 && currentLevel === 1) {
      currentLevel = 2;
    } else if (veronica.y < -20 && currentLevel === 2) {
      currentLevel = 3;
    } 
  } else if (gameIsOver) {
    gameOver();
  } else if (gameIsWon){
    gameWon();
  }
}

window.draw = draw;
