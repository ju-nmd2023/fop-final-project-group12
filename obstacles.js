export default class Obstacle {
  constructor(position, data, size, speed) {
    this.position = position;
    this.data = data;
    this.size = size;
    //speed was added to make sure it could be changed independently for the busses in other lanes
    this.speed = speed;
  }

  displayBus() {
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(190, 10, 20);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(139, 0, 0);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(216, 36, 41);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill(108, 20, 19);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    //creates a loop for the busses
    //when speed is negative (<0), meaning the bus will move right to left, the bus restarts at 700 after it reaches -140
    //and the inverse is true for busses with a speed greater than 0, restarting at -150.
    if (this.speed > 0 && this.position.x > 640) {
      this.position.x = -150;
    } else if (this.speed < 0 && this.position.x < -140) {
      this.position.x = 700;
    }
    pop();
  }

  displayBird() {
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.speed;
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill("white");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill("black");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill("orange");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill("lightgrey");
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    //same loop logic as in the buses
    if (this.speed > 0 && this.position.x > 640) {
      this.position.x = -150;
    } else if (this.speed < 0 && this.position.x < -140) {
      this.position.x = 700;
    }
    pop();
  }

  displayRando1() {
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.speed;
    scale(0.8);
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(139, 0, 0);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill("black");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(207, 185, 151);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill("blue");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 5) {
          fill("beige");
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }

    //same loop logic as buses and birds
    if (this.speed > 0 && this.position.x > 640) {
      this.position.x = -150;
    } else if (this.speed < 0 && this.position.x < -140) {
      this.position.x = 700;
    }
    pop();
  }

  displayRando2() {
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    this.position.x += this.speed;
    scale(0.8);
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(139, 0, 0);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(139, 69, 19);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill("green");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill("beige");
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 5) {
          fill(210, 180, 140);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }

    //same loop logic
    if (this.speed > 0 && this.position.x > 640) {
      this.position.x = -150;
    } else if (this.speed < 0 && this.position.x < -140) {
      this.position.x = 700;
    }
    pop();
  }
}
