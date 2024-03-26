let veronica = [
  [0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 1, 1, 1, 1, 1, 1, 2, 2],
  [2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 3, 3, 0, 0, 3, 3, 0, 0],
  [0, 0, 3, 3, 0, 0, 3, 3, 0, 0],
  [0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
];

const size = 5;
let px = 100;

function draw() {
  background(255);
  push();
  for (let y in veronica) {
    for (let x in veronica[y]) {
      let pixel = veronica[y][x];
      if (pixel !== 0) {
        if (pixel === 1) {
          fill(88, 57, 39);
        } else if (pixel === 2) {
          fill(0);
        } else if (pixel === 3) {
          fill(85, 79, 72);
        }
      }
      rect(px + x * size, px + y * size, size, size);
    }
  }
  pop();
}
