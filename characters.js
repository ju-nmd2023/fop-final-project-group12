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
let x = 100;
let y = 100;
let speedX = 0;
let speedY = 0;

let dataNina = [
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
  [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
  [3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
  [3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [0, 0, 4, 4, 4, 0, 0, 4, 4, 4, 0, 0],
  [0, 0, 4, 4, 4, 0, 0, 4, 4, 4, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
];

function drawNina(x, y) {
  noStroke();
  push();
  translate(x, y);
  for (let y in dataNina) {
    for (let x in dataNina[y]) {
      let pixel = dataNina[y][x];
      if (pixel === 1) {
        fill("black");
        rect(x * size, y * size, size, size);
      } else if (pixel === 2) {
        fill(35, 1, 2);
        rect(x * size, y * size, size, size);
      } else if (pixel === 3) {
        fill(1, 73, 45);
        rect(x * size, y * size, size, size);
      } else if (pixel === 4) {
        fill(40, 40, 40);
        rect(x * size, y * size, size, size);
      }
    }
  }
  pop();
}

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
  background(255);
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
