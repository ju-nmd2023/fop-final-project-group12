export default class Character {
  constructor(x, y, size, data, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.data = data;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = 0;
  }

  displayVeronica() {
    noStroke();
    push();
    translate(this.x, this.y);
    scale(0.8);
    this.x += this.speed;
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

  displayNina() {
    noStroke();
    push();
    translate(this.x, this.y);
    scale(0.8);
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
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

  displayEne() {
    noStroke();
    push();
    scale(0.8);
    translate(this.x, this.y);
    for (let y in this.data) {
      for (let x in this.data[y]) {
        let pixel = this.data[y][x];
        if (pixel === 1) {
          fill(139, 0, 0);
          rect(x * size, y * size, size, size);
        } else if (pixel === 2) {
          fill("black");
          rect(x * size, y * size, size, size);
        } else if (pixel === 3) {
          fill(207, 185, 151);
          rect(x * size, y * size, size, size);
        }
      }
    }
    pop();
  }

  movement() {
    push();
    this.x += this.speedX;
    this.y += this.speedY;

    if (keyIsDown(39)) {
      // right arrow
      this.speedX = 5;
    } else if (keyIsDown(37)) {
      // left arrow
      this.speedX = -5;
    } else {
      this.speedX = 0;
    }

    if (keyIsDown(38)) {
      // up arrow
      this.speedY = -5;
    } else if (keyIsDown(40)) {
      // down arrow
      this.speedY = 5;
    } else {
      this.speedY = 0;
    }
    pop();
  }
  collide(obstacle) {
    //character bounding box
    let characterLeft = this.x;
    let characterRight = this.x + this.size * this.data[0].length;
    let characterTop = this.y;
    let characterBottom = this.y + this.size * this.data.length;

    //obstacle bounding box
    let obstacleLeft = obstacle.position.x + 20;
    let obstacleRight =
      obstacle.position.x + this.size * obstacle.data[0].length - 20;
    let obstacleTop = obstacle.position.y + 25;
    let obstacleBottom =
      obstacle.position.y + this.size * obstacle.data.length - 25;

    //detect collision
    if (
      characterLeft < obstacleRight &&
      characterRight > obstacleLeft &&
      characterTop < obstacleBottom &&
      characterBottom > obstacleTop
    ) {
      //if collision is detected, the position of the character is reset
      this.x = 275;
      this.y = 540;
    }
  }

  collidePlatforms(platform) {
    //character bounding box
    let characterLeft = this.x;
    let characterRight = this.x + this.size * this.data[0].length;
    let characterTop = this.y + 50;
    let characterBottom = this.y + this.size * this.data.length;

    //platform bounding box
    let platformLeft = platform.position.x;
    let platformRight =
      platform.position.x + this.size * platform.data[0].length;
    let platformTop = platform.position.y;
    let platformBottom = platform.position.y + this.size * platform.data.length;

    //detect collision
    if (
      characterLeft < platformRight &&
      characterRight > platformLeft &&
      characterTop < platformBottom &&
      characterBottom > platformTop
    ) {
      //if collision is detected, the position of the character is reset
      this.x = platform.position.x + 10;
    }
  }

  collideWater(water) {
    //character bounding box
    let characterLeft = this.x;
    let characterRight = this.x + this.size * this.data[0].length;
    let characterTop = this.y + 50;
    let characterBottom = this.y + this.size * this.data.length;

    //water bounding box
    let waterLeft = 0;
    let waterRight = 600;
    let waterTop = 0;
    let waterBottom = 300;

    //detect collision
    if (
      characterLeft < waterRight &&
      characterRight > waterLeft &&
      characterTop < waterBottom &&
      characterBottom > waterTop
    ) {
      //if collision is detected, the position of the character is reset
      this.x = 275;
      this.y = 540;
    } else if (
      characterLeft < waterRight &&
      characterRight > waterLeft &&
      characterTop < waterBottom &&
      characterBottom > waterTop
    ) {
      this.x = platform.position.x + 10;
    }
  }
}
