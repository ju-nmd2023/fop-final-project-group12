export default class Platform {
  constructor(position, data, size, minX, maxX) {
    this.position = position;
    this.data = data;
    this.size = size;
    this.speed = 4;
    this.direction = 1;
    this.minX = minX;
    this.maxX = maxX;
  }

  displayRock() {
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.direction * this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill("Grey");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(67, 97, 117);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(51, 51, 51);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill(194, 197, 204);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 5) {
          fill(93, 93, 93);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    pop();
    if (this.position.x <= this.minX || this.position.x >= this.maxX) {
      this.direction *= -1;
    }
  }

  displayCar() {
    push();
    translate(this.position.x, this.position.y);
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
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

  displayTable() {
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.direction * this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill("white");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill("lightgrey");
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }

    if (this.position.x <= this.minX || this.position.x >= this.maxX) {
      this.direction *= -1;
    }
    pop();
  }

  displayLog() {
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.direction * this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(96, 48, 35);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(126, 82, 57);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(60, 17, 0);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }

    if (this.position.x <= this.minX || this.position.x >= this.maxX) {
      this.direction *= -1;
    }
    pop();
  }
  displayStillLog() {
    push();
    translate(this.position.x, this.position.y);
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(96, 48, 35);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(126, 82, 57);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(60, 17, 0);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    pop();
  }
}
