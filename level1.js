import Character from "./characters.js";
import { data } from "./characterData.js";

backgroundImage1 = loadImage("images/backgroundlevel1.png");

function setup() {
  createCanvas(600, 600);
}
window.setup = setup;

//arrays


let dataVeronica = [
  [0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0],
  [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
  [0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
];

let dataBus = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 4,
  ],
  [
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4,
  ],
  [
    4, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4,
    1, 4, 4, 4, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 4, 2, 2, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 2, 3, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4,
    1, 4, 2, 3, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 4, 2, 3, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 2, 3, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4,
    1, 4, 2, 3, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 4, 3, 3, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4,
    1, 4, 4, 4, 4, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 3, 4,
  ],
  [
    4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 3, 3, 3, 3, 3, 3, 3, 4,
  ],
  [
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 4,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4,
  ],
];

let dataRock = [
  [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 2],
  [0, 2, 0, 0, 2, 2, 3, 5, 5, 5, 5, 5, 1, 3, 2],
  [2, 0, 2, 2, 3, 3, 5, 3, 1, 1, 1, 1, 1, 1, 3, 2, 2, 0, 2],
  [2, 0, 2, 3, 5, 1, 1, 1, 3, 1, 1, 1, 1, 1, 4, 3, 2, 0, 0, 2],
  [2, 0, 2, 3, 5, 5, 1, 3, 1, 1, 1, 1, 1, 1, 1, 4, 3, 2, 0, 2],
  [2, 0, 2, 2, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 2, 0, 2],
  [0, 2, 0, 2, 3, 5, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 2, 2, 0, 2],
  [0, 0, 0, 2, 2, 3, 1, 1, 1, 4, 4, 4, 4, 3, 3, 3, 2, 0, 0, 2],
  [0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 0, 2],
  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
];

let dataCar = [
  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 8, 8, 8, 2, 2, 2, 8, 8, 8],
  [0, 0, 0, 8, 7, 4, 4, 1, 1, 1, 7, 8],
  [0, 0, 0, 2, 4, 1, 1, 1, 1, 1, 9, 2],
  [0, 0, 0, 2, 4, 1, 1, 1, 9, 9, 9, 2],
  [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 2, 0, 0, 2],
  [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2],
  [0, 0, 2, 4, 10, 10, 10, 10, 10, 10, 10, 9, 2, 0, 2],
  [0, 0, 2, 4, 4, 10, 10, 10, 10, 10, 9, 9, 2, 0, 2],
  [0, 0, 2, 10, 4, 3, 3, 3, 3, 3, 9, 10, 2, 0, 2],
  [0, 0, 2, 10, 3, 4, 4, 4, 1, 1, 3, 10, 2, 0, 2],
  [2, 0, 2, 10, 3, 4, 1, 1, 1, 9, 3, 10, 2, 0, 2],
  [2, 0, 2, 10, 3, 4, 1, 1, 1, 9, 3, 10, 2, 0, 2],
  [2, 0, 2, 10, 3, 4, 1, 1, 1, 9, 3, 10, 2],
  [3, 3, 3, 10, 3, 4, 1, 9, 9, 9, 3, 10, 3, 3, 3],
  [3, 1, 1, 10, 4, 3, 3, 3, 3, 3, 9, 10, 1, 1, 3],
  [3, 3, 3, 4, 4, 10, 10, 10, 10, 10, 9, 9, 3, 3, 3],
  [2, 0, 2, 4, 10, 10, 10, 10, 10, 10, 10, 1, 2],
  [2, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [0, 2, 0, 0, 2, 3, 3, 3, 3, 3, 2],
  [0, 0, 0, 2, 4, 4, 4, 1, 1, 1, 9, 2],
  [0, 0, 0, 2, 4, 1, 1, 1, 1, 1, 9, 2],
  [0, 0, 0, 2, 5, 1, 1, 1, 1, 1, 5, 2],
  [0, 0, 0, 6, 6, 5, 1, 1, 9, 5, 6, 6],
  [0, 0, 0, 6, 6, 6, 2, 2, 2, 6, 6, 6],
  [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2],
];

class Obstacle {
  constructor(position, data, size, speed) {
    this.position = position;
    this.data = data;
    this.size = size;
    //speed was added to make sure it could be changed independently for the busses in other lanes
    this.speed = speed;
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(190, 10, 20);
          rect(x * size, y * size, size, size);
        } else if (pixel === 2) {
          fill(139, 0, 0);
          rect(x * size, y * size, size, size);
        } else if (pixel === 3) {
          fill(216, 36, 41);
          rect(x * size, y * size, size, size);
        } else if (pixel === 4) {
          fill(108, 20, 19);
          rect(x * size, y * size, size, size);
        }
      }
    }
    //creates a loop for the busses, with the speed controlling for the start and end points
    //a speed less than 0, meaning it will move right to left, makes the bus start at 700 after it reaches -150
    //and the inverse is true for busses with a speed greater than 0.
    if (this.speed > 0 && this.position.x > 640) {
      this.position.x = -150;
    } else if (this.speed < 0 && this.position.x < -140) {
      this.position.x = 700;
    }

    pop();
  }
}

let size = 4;
let x = 80;
let y = 450;
let speedX = 0;
let speedY = 0;

//defines the starting position of each bus
let positionBus = { x: 0, y: 480 };
let positionBusTwo = { x: -350, y: 480 };
let positionBusThree = { x: 0, y: 360 };
let positionBusFour = { x: 450, y: 360 };

let busOne = new Obstacle(positionBus, dataBus, size, 5);
let busTwo = new Obstacle(positionBusTwo, dataBus, size, 5);

//the following lines of code were adapted courtesy of ChatGPT --> https://chat.openai.com/share/49ffdcc4-c8e7-4a13-acc7-b9d53fbb5ed6
//map() applies the function to each element in the array (in this case the rows of dataBus),
//the row=>row part takes the row argument and returns it unchanged, slice() creates a copy of
//the rows, and reverse() reverses it, effectively reflecting the dataBus array
let dataBusReflected = dataBus.map((row) => row.slice().reverse());
//using a negative speed makes it so that the busses on top go right to left
let busThree = new Obstacle(positionBusThree, dataBusReflected, size, -7);
let busFour = new Obstacle(positionBusFour, dataBusReflected, size, -7);

class Platform {
  constructor(position, data, size, minX, maxX) {
    this.position = position;
    this.data = data;
    this.size = size;
    this.speed = 4;
    this.direction = 1;
    //following two lines added to be able to independently change
    //the parameters of the different rocks
    this.minX = minX;
    this.maxX = maxX;
  }
  display() {
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.direction * this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill("Grey");
          rect(x * size, y * size, size, size);
        } else if (pixel === 2) {
          fill(67, 97, 117);
          rect(x * size, y * size, size, size);
        } else if (pixel === 3) {
          fill(51, 51, 51);
          rect(x * size, y * size, size, size);
        } else if (pixel === 4) {
          fill(194, 197, 204);
          rect(x * size, y * size, size, size);
        } else if (pixel === 5) {
          fill(93, 93, 93);
          rect(x * size, y * size, size, size);
        }
      }
    }
    pop();
    if (this.position.x <= this.minX || this.position.x >= this.maxX) {
      this.direction *= -1;
    }
  }
}

let rockPosition = { x: 450, y: 230 };
let rockPositionTwo = { x: 110, y: 165 };
let rock = new Platform(rockPosition, dataRock, size, 240, 460);
let rockTwo = new Platform(rockPositionTwo, dataRock, size, 100, 320);

class Car {
  constructor(dataCar, size) {
    this.dataCar = dataCar;
    this.size = size;
  }

  display() {
    push();
    translate(350, 50);
    for (let y in this.dataCar) {
      for (let x in this.dataCar[y]) {
        let pixel = this.dataCar[y][x];
        if (pixel === 1) {
          fill("orange");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(67, 97, 117);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(134, 71, 38);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill(202, 98, 18);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 5) {
          fill(255, 255, 224);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 6) {
          fill(180, 217, 239);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 7) {
          fill(190, 10, 20);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 8) {
          fill(216, 36, 41);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 9) {
          fill(261, 191, 119);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 10) {
          fill(61, 66, 107);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    pop();
  }
}

let car = new Car(dataCar, size);
let veronica = new Character(0, 0, size, dataVeronica);

function movement() {
  x += speedX;
  y += speedY;

  if (keyIsDown(39)) {
    // right arrow
    speedX = 5;
  } else if (keyIsDown(37)) {
    // left arrow
    speedX = -5;
  } else {
    speedX = 0;
  }

  if (keyIsDown(38)) {
    // up arrow
    speedY = -5;
  } else if (keyIsDown(40)) {
    // down arrow
    speedY = 5;
  } else {
    speedY = 0;
  }
}

function draw() {
  image(backgroundImage1, 0, 0, 600, 600);

  noStroke();
  rock.display();
  rockTwo.display();
  veronica.display();

  busOne.display();
  busTwo.display();
  busThree.display();
  busFour.display();

  car.display();

  movement();
}
window.draw = draw;
