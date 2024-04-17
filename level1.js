function preload() {
  // Load the image
  backgroundImage1 = loadImage("images/backgroundlevel1.png");
}

function setup() {
  createCanvas(800, 600); // Increase canvas size
  // Set the background to the loaded image
  // Draw the image with desired width and height
  image(backgroundImage1, 0, 0, 600, 600);
}

///array busses

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

let size = 4;
let x = -80;
let y = 450;
let speedX = 0;
let speedY = 0;

function drawVeronica() {
  noStroke();
  push();
  translate(x, y);
  for (let i in dataVeronica) {
    for (let j in dataVeronica[i]) {
      let pixel = dataVeronica[i][j];
      if (pixel === 1) {
        fill("black");
        rect(j * size, i * size, size, size);
      } else if (pixel === 2) {
        fill(95, 56, 23);
        rect(j * size, i * size, size, size);
      } else if (pixel === 3) {
        fill(221, 180, 153);
        rect(j * size, i * size, size, size);
      }
    }
  }
  pop();
}

function draw() {
  image(backgroundImage1, 0, 0, 600, 600);

  noStroke();
  push();
  translate(10, 480);
  for (let y in dataBus) {
    for (let x in dataBus[y]) {
      let pixel = dataBus[y][x];
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
  pop();

  push();
  translate(350, 480);
  for (let y in dataBus) {
    for (let x in dataBus[y]) {
      let pixel = dataBus[y][x];
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
  pop();

  push();
  translate(110, 230);
  for (let y in dataRock) {
    for (let x in dataRock[y]) {
      let pixel = dataRock[y][x];
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

  push();
  translate(240, 150);
  for (let y in dataRock) {
    for (let x in dataRock[y]) {
      let pixel = dataRock[y][x];
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

  push();
  translate(350, 50);
  for (let y in dataCar) {
    for (let x in dataCar[y]) {
      let pixel = dataCar[y][x];
      if (pixel === 1) {
        fill("orange");
        rect(x * size, y * size, size, size);
      } else if (pixel === 2) {
        fill(67, 97, 117);
        rect(x * size, y * size, size, size);
      } else if (pixel === 3) {
        fill(134, 71, 38);
        rect(x * size, y * size, size, size);
      } else if (pixel === 4) {
        fill(202, 98, 18);
        rect(x * size, y * size, size, size);
      } else if (pixel === 5) {
        fill(255, 255, 224);
        rect(x * size, y * size, size, size);
      } else if (pixel === 6) {
        fill(180, 217, 239);
        rect(x * size, y * size, size, size);
      } else if (pixel === 7) {
        fill(190, 10, 20);
        rect(x * size, y * size, size, size);
      } else if (pixel === 8) {
        fill(216, 36, 41);
        rect(x * size, y * size, size, size);
      } else if (pixel === 9) {
        fill(261, 191, 119);
        rect(x * size, y * size, size, size);
      } else if (pixel === 10) {
        fill(61, 66, 107);
        rect(x * size, y * size, size, size);
      }
    }
  }

  drawVeronica();

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
