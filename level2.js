function preload() {
  // Load the image
  backgroundImage2 = loadImage("images/background2.png");
}

function setup() {
  createCanvas(800, 600);
  image(backgroundImage2, 0, 0, 600, 600);
}

//array

let dataBird = [
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 4, 0, 4, 4, 4, 0, 0],
  [0, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4],
  [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4],
  [0, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
  [0, 0, 0, 0, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0],
  [0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
];

let dataLog = [
  [0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 1, 1, 3, 0, 0, 0, 0, 0, 0],
  [3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 0],
  [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
  [3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3],
  [3, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 3],
  [3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 3],
  [3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

const size = 4;

function draw() {
  image(backgroundImage2, 0, 0, 600, 600);

  noStroke();
  push();
  translate(100, 370);
  for (let y in dataBird) {
    for (let x in dataBird[y]) {
      let pixel = dataBird[y][x];
      if (pixel === 1) {
        fill("white");
        rect(x * size, y * size, size, size);
      } else if (pixel === 2) {
        fill("black");
        rect(x * size, y * size, size, size);
      } else if (pixel === 3) {
        fill("orange");
        rect(x * size, y * size, size, size);
      } else if (pixel === 4) {
        fill("lightgrey");
        rect(x * size, y * size, size, size);
      }
    }
  }
  pop();

  push();
  translate(100, 170);
  for (let y in dataLog) {
    for (let x in dataLog[y]) {
      let pixel = dataLog[y][x];
      if (pixel === 1) {
        fill(96, 48, 35);
        rect(x * size, y * size, size, size);
      } else if (pixel === 2) {
        fill(126, 82, 57);
        rect(x * size, y * size, size, size);
      } else if (pixel === 3) {
        fill(60, 17, 0);
        rect(x * size, y * size, size, size);
      }
    }
  }
  pop();
}
