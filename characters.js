export default class Character {
  constructor(x, y, size, data, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.data = data;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = 0;

    this.collisionRedbull = false;
    this.collisionSnus = false;
  }
  /* this code was adapted from Chat GPT. We wanted to avoid the repetition of the creation of the bounding box of the character, but we ended up deciding to make a function that creates the bounding boxes for everything without having to specify the same things each time. https://chatgpt.com/share/8df306a1-53f7-46bf-b4e0-9561eea17455 */
  createBoundingBox(offsetX = 0, offsetY = 0) {
    return {
      left: this.x + offsetX,
      right: this.x + offsetX + this.size * this.data[0].length,
      top: this.y + offsetY,
      bottom: this.y + offsetY + this.size * this.data.length,
    };
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
          fill(207, 185, 151);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 2) {
          fill(43, 29, 20);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 3) {
          fill(194, 197, 204);
          rect(x * this.size, y * this.size, this.size, this.size);
        } else if (pixel === 4) {
          fill(119, 129, 92);
          rect(x * this.size, y * this.size, this.size, this.size);
        }
      }
    }
    pop();
  }

  displayEne() {
    noStroke();
    push();
    translate(this.x, this.y);
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
        }
      }
    }
    pop();
  }

  movement() {
    push();

    if (this.collisionRedbull) {
      this.x += this.speedX * 2;
      this.y += this.speedY * 2;
    } else if (this.collisionSnus) {
      this.x += this.speedX * 0.5;
      this.y += this.speedY * 0.5;
    } else {
      this.x += this.speedX;
      this.y += this.speedY;
    }

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

    //charecters cannot move outside of canvas
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x >= 560) {
      this.x = 560;
    }

    if (this.y >= 550) {
      this.y = 550;
    }

    pop();
  }

  collide(obstacle) {
    //create bounding boxes
    let characterBox = this.createBoundingBox();
    let obstacleBox = {
      left: obstacle.position.x + 20,
      right: obstacle.position.x + this.size * obstacle.data[0].length - 20,
      top: obstacle.position.y + 25,
      bottom: obstacle.position.y + this.size * obstacle.data.length - 25,
    };

    //detect collision
    if (
      characterBox.left < obstacleBox.right &&
      characterBox.right > obstacleBox.left &&
      characterBox.top < obstacleBox.bottom &&
      characterBox.bottom > obstacleBox.top
    ) {
      return true;
    }
    return false;
  }

  collidePlatforms(platform) {
    //create bounding boxes
    let characterBox = this.createBoundingBox(0, 0);
    let platformBox = {
      left: platform.position.x,
      right: platform.position.x + this.size * platform.data[0].length,
      top: platform.position.y,
      bottom: platform.position.y + this.size * platform.data.length,
    };

    //detect collision
    if (
      characterBox.left < platformBox.right &&
      characterBox.right > platformBox.left &&
      characterBox.top < platformBox.bottom &&
      characterBox.bottom > platformBox.top
    ) {
      this.x = platform.position.x + 10;
      return true;
    }
    return false;
  }

  collideWater() {
    //create bounding boxes
    let characterBox = this.createBoundingBox(0, 20);
    let waterBox = {
      left: 0,
      right: 600,
      top: 0,
      bottom: 280,
    };
    //detect collision
    if (
      characterBox.left < waterBox.right &&
      characterBox.right > waterBox.left &&
      characterBox.top < waterBox.bottom &&
      characterBox.bottom > waterBox.top
    ) {
      return true;
    }
  }

  collideRedbull(powerup) {
    let characterBox = this.createBoundingBox();
    let powerupBox = {
      left: powerup.position.x,
      right: powerup.position.x + this.size * powerup.data[0].length,
      top: powerup.position.y,
      bottom: powerup.position.y + this.size * powerup.data.length,
    };

    if (
      characterBox.left < powerupBox.right &&
      characterBox.right > powerupBox.left &&
      characterBox.top < powerupBox.bottom &&
      characterBox.bottom > powerupBox.top
    ) {
      this.collisionRedbull = true;
      this.collisionSnus = false;
      powerup.isVisible = false;
    }
  }

  collideSnus(powerup) {
    let characterBox = this.createBoundingBox();
    let powerupBox = {
      left: powerup.position.x,
      right: powerup.position.x + this.size * powerup.data[0].length,
      top: powerup.position.y,
      bottom: powerup.position.y + this.size * powerup.data.length,
    };

    if (
      characterBox.left < powerupBox.right &&
      characterBox.right > powerupBox.left &&
      characterBox.top < powerupBox.bottom &&
      characterBox.bottom > powerupBox.top
    ) {
      this.collisionSnus = true;
      this.collisionRedbull = false;
      powerup.isVisible = false;
    }
  }
}
