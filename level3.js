import Platform from "./platforms.js";
import Character from "./characters.js";
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
let table2Position = { x: 400, y: 150 };
let table = new Platform(tablePosition, data.table, size);
let table2 = new Platform(table2Position, data.table, size);

let ene = new Character(275, 530, size, data.ene);

function draw() {
  image(backgroundImage3, 0, 0, 600, 600);

  table.displayTable();
  table2.displayTable();

  ene.displayEne();
  ene.movement();
}

window.draw = draw;
