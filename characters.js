let dataCouch = [
  [
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 1, 3, 3, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 1,
  ],
  [
    0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
  ],
  [
    0, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1,
  ],
  [
    0, 1, 2, 2, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 1,
  ],
  [
    0, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1,
  ],
  [
    0, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1,
  ],
  [
    0, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1,
  ],
];

const size = 6;

function draw() {
  noStroke();
  push();
  translate(400, 225);
  for (let y in dataCouch) {
    for (let x in dataCouch[y]) {
      let pixel = dataCouch[y][x];
      if (pixel === 1) {
        fill("black");
        rect(x * size, y * size, size, size);
      } else if (pixel === 2) {
        fill(1, 68, 33);
        rect(x * size, y * size, size, size);
      } else if (pixel === 3) {
        fill(0, 51, 20);
        rect(x * size, y * size, size, size);
      }
    }
  }
  pop();
}
