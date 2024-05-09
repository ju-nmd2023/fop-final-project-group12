import Character from "./characters.js";
import { data } from "./arrays.js";
import Obstacle from "./obstacles.js";
import Platform from "./platforms.js";

backgroundImage1 = loadImage("images/backgroundlevel1.png");

function setup() {
  createCanvas(600, 600);
}
window.setup = setup;

let size = 4;

//defines the starting position of each bus
let positionBus = { x: 0, y: 480 };
let positionBusTwo = { x: -350, y: 480 };
let positionBusThree = { x: 0, y: 360 };
let positionBusFour = { x: 450, y: 360 };

let busOne = new Obstacle(positionBus, data.bus, size, 5);
let busTwo = new Obstacle(positionBusTwo, data.bus, size, 5);

/* the following lines of code were adapted courtesy of ChatGPT --> https://chat.openai.com/share/49ffdcc4-c8e7-4a13-acc7-b9d53fbb5ed6
map() applies the function to each element in the array (in this case the rows of dataBus),
the row=>row part takes the row argument and returns it unchanged, slice() creates a copy of
the rows, and reverse() reverses it, effectively reflecting the dataBus array */
let dataBusReflected = data.bus.map((row) => row.slice().reverse());
//using a negative speed makes it so that the busses on top go right to left
let busThree = new Obstacle(positionBusThree, dataBusReflected, size, -7);
let busFour = new Obstacle(positionBusFour, dataBusReflected, size, -7);

let rockPosition = { x: 450, y: 230 };
let rockPositionTwo = { x: 110, y: 165 };
let rock = new Platform(rockPosition, data.rock, size, 240, 460);
let rockTwo = new Platform(rockPositionTwo, data.rock, size, 100, 320);

let car = new Platform(data.car, size);
let veronica = new Character(275, 510, size, data.veronica);

function draw() {
  image(backgroundImage1, 0, 0, 600, 600);

  noStroke();
  rock.displayRock();
  rockTwo.displayRock();
  veronica.display();
  veronica.movement();
  car.displayCar();

  busOne.display();
  busTwo.display();
  busThree.display();
  busFour.display();

  veronica.collide(busOne);
  veronica.collide(busTwo);
  veronica.collide(busThree);
  veronica.collide(busFour);
}
window.draw = draw;
