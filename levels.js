import Character from "./characters.js";
import { data } from "./arrays.js";
import Obstacle from "./obstacles.js";
import Platform from "./platforms.js";
import Water from "./water.js";
import Powerup from "./powerup.js";
import Raindrop from "./rain.js";

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
let messageTimer = 110;
let raindrops;
let lives = 3;

//redefines start positions for characters so game restart works
function resetCharacters() {
  nina = new Character(275, 540, size, data.nina, 0);
  veronica = new Character(275, 530, size, data.veronica, -2);
  ene = new Character(275, 530, size, data.ene);
  redbull = new Powerup({ x: 65, y: 525 }, data.redbull, size);
  snus = new Powerup({ x: 525, y: 532 }, data.snus, size);
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
  noStroke();
  fill(149, 26, 46);
  rect(200, 375, 200, 50);
  textSize(18);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Bring Nína, Veronica and Ene to school so they can code!", 300, 330);
  fill(255);
  text("press space to start", 300, 400);

  if (keyIsPressed && key === " ") {
    gameIsRunning = true;
    gameStart = false;
    currentLevel = 1;
    resetCharacters();
    lives = 3;
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
    gameStart = true;
    resetCharacters();
  }
}

//GAME WON SCREEN
function gameWon() {
  gameIsRunning = false;
  gameIsWon = true;
  image(gameWonImage, 0, 0, 600, 600);
  textSize(18);
  fill(0);
  textAlign(CENTER, CENTER);
  text("press 'R' to play again", 300, 280);

  if (keyIsPressed && key === "r") {
    gameStart = true;
    gameIsWon = false;
  }
}

function livesCounter() {
  for (let i = 0; i < lives; i++) {
    textSize(32);
    fill(235, 201, 24);
    text("★", 20 + i * 40, 20);
  }
}

window.startScreen = startScreen;
window.gameWon = gameWon;
window.gameOver = gameOver;
window.resetCharacters = resetCharacters;

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

raindrops = new Raindrop(600, 600);

function drawLevel1() {
  image(backgroundImage1, 0, 0, 600, 600);

  livesCounter();

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

  raindrops.update();
  raindrops.display();

  // check collisions with buses
  const collisionObstacles = obstaclesLevel1.some((obstacle) =>
    nina.collide(obstacle)
  );

  // check collisions with water and platforms
  const collideWithWater = nina.collideWater(waterLevel1);
  const collisionPlatforms = platformsLevel1.some((platform) =>
    nina.collidePlatforms(platform)
  );

  if ((collideWithWater && !collisionPlatforms) || collisionObstacles) {
    lives--;
    resetCharacters();
  }
}

//LEVEL 2

//arrays
let obstaclesLevel2 = [];
let platformsLevel2 = [];

//creates the bounding box for the water at the top
let waterLevelTwoTop = new Water(0, 0, 600, 280);

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
let logFour = new Platform({ x: 250, y: 10 }, data.log, size, 240, 460);

//adds logs to platform array
platformsLevel2.push(log, logTwo, logThree);

//create veronica character. speed defined as -2 to make the "wind" effect
let veronica = new Character(275, 530, size, data.veronica, -2);

function drawLevel2() {
  image(backgroundImage2, 0, 0, 600, 600);

  livesCounter();

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

  // check collision with logFour separately
  const collideWithLogFour = veronica.collidePlatforms(logFour);

  if (
    (collideWithWaterTop && !collisionPlatforms && !collideWithLogFour) ||
    collisionObstacles
  ) {
    lives--;
    resetCharacters();
  }
  if (veronica.x < 80 || veronica.x > 470) {
    lives--;
    resetCharacters();
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
let rando3 = new Obstacle({ x: 30, y: 430 }, randoReflected, size, 14);
let rando4 = new Obstacle({ x: 200, y: 330 }, data.rando, size, -12);
let rando5 = new Obstacle({ x: 300, y: 430 }, randoReflected, size, 13);

//add randos to obstacle array
randosRight.push(rando1, rando3, rando5);
randosLeft.push(rando2, rando4);

//create ene character
let ene = new Character(275, 530, size, data.ene);

//create redbull
let redbull = new Powerup({ x: 65, y: 540 }, data.redbull, size);
let snus = new Powerup({ x: 525, y: 550 }, data.snus, size);

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

  livesCounter();

  //display randos and tables. we have 2 display functions for randos because we wanted different colors
  randosRight.forEach((obstacle) => obstacle.displayRando1());
  randosLeft.forEach((obstacle) => obstacle.displayRando2());
  platformsLevel3.forEach((platform) => platform.displayTable());

  ene.displayEne();
  ene.movement();
  redbull.display();
  snus.displaySnus();
  ene.collideRedbull(redbull);
  ene.collideSnus(snus);

  //the text with timer was taken from Chat GPT https://chatgpt.com/share/0a57fef9-c81f-45a5-8f5d-1c34f6ab5d2a
  if (messageTimer > 0) {
    fill(235, 201, 24);
    rect(100, 250, 400, 100);
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Pick a powerup wisely: Redbull or Snus?", 300, 300);
    messageTimer--; //this decreases the timer each frame
  }

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

  if (this.sinking && millis() - this.tableTimer > 2000){
    platformsLevel3.splice(0);
  }

  if (
    (collideWithCoffee && !collisionPlatforms) ||
    collisionObstacles ||
    collisionObstacles2
  ) {
    lives--;
    resetCharacters();
  }

  if (ene.y < -50) {
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
  } else if (gameIsWon) {
    gameWon();
  }

  //if all lives are lost, gameOver
  if (lives <= 0) {
    gameOver();
    lives = 3;
  }
}

window.draw = draw;
