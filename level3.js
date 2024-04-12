function preload() {
  // Load the image
  backgroundImage3 = loadImage("images/background3.png");
}

function setup() {
  createCanvas(800, 600);
  image(backgroundImage3, 0, 0, 600, 600);
}

//array

let dataTable = [
  [0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
  [0, 0, 2, 2, 1, 1, 1, 2, 2, 0, 0],
  [0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
  [0, 0, 2, 2, 1, 1, 1, 2, 2, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
];

const size = 4;

function draw() {
  image(backgroundImage3, 0, 0, 600, 600);

  noStroke();
  push();
  translate(200, 170);
  for (let y in dataTable) {
    for (let x in dataTable[y]) {
      let pixel = dataTable[y][x];
      if (pixel === 1) {
        fill("white");
        rect(x * size, y * size, size, size);
      } else if (pixel === 2) {
        fill("lightgrey");
        rect(x * size, y * size, size, size);
      }
    }
  }
  pop();
}
