

// let size = 4;
// let veronica = new Character(size);

// let x = 100;
// let y = 100;

/* let dataNina = [
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
} */

// let positionVeronica = {x: 30, y: 30};

export default class Character {
  constructor(x, y, size, data) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.data = data;
  }
  displayVeronica() {
    noStroke();
    push();
    translate(this.x, this.y);
    for (let i in this.data) {
      for (let j in this.data[i]) {
        let pixel = this.data[i][j];
        if (pixel === 1) {
          fill("black");
          rect(j * this.size, i * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(95, 56, 23);
          rect(j * this.size, i * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(221, 180, 153);
          rect(j * this.size, i * this.size, this.size, this.size);
        }
      }
    }
    pop();
  }
}

