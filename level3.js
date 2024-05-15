import Platform from "./platforms.js";
import { data } from "./arrays.js";

let backgroundImage3 = "images/background3.png";

function setup() {
  createCanvas(600, 600);
  backgroundImage3 = loadImage("images/background3.png");
  frameRate(30);
}
window.setup = setup;

size = 4.5;

let tablePosition = { x: 100, y: 220 };
let table2Position = {x: 400, y:150};
let table = new Platform(tablePosition, data.table, size);
let table2 = new Platform (table2Position, data.table, size);

function draw() {
  image(backgroundImage3, 0, 0, 600, 600);

  table.displayTable();
  table2.displayTable();
}

window.draw = draw;