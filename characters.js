export default class Character {
  constructor(x, y, size, data) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.data = data;
    this.speedX = 0;
    this.speedY = 0;
    this.startingX = x;
    this.startingY = y;
  }

  display() {
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
    let obstacleLeft = obstacle.position.x;
    let obstacleRight =
      obstacle.position.x + this.size * obstacle.data[0].length;
    let obstacleTop = obstacle.position.y;
    let obstacleBottom = obstacle.position.y + this.size * obstacle.data.length;

    //detect collision
    if (
      characterLeft < obstacleRight &&
      characterRight > obstacleLeft &&
      characterTop < obstacleBottom &&
      characterBottom > obstacleTop
    ) {
      //if collision is detected, the position of the character
      this.x = 275;
      this.y = 550;
    }
  }

  collidePlatforms(platform) {
    //character bounding box
    let characterLeft = this.x;
    let characterRight = this.x + this.size * this.data[0].length;
    let characterTop = this.y + 50;
    let characterBottom = this.y + this.size * this.data.length;

    //obstacle bounding box
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
      //if collision is detected, the position of the character
      this.x = platform.position.x;
    }
  }
}
