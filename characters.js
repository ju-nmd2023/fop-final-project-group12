//let size = 4;

// let x = 100;
// let y = 100;




// let positionVeronica = {x: 30, y: 30};

import Obstacle from "./obstacles.js";

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
    // Calculate bounding box coordinates for character
    let charLeft = this.x;
    let charRight = this.x + this.size * this.data[0].length;
    let charTop = this.y;
    let charBottom = this.y + this.size * this.data.length;

    // Calculate bounding box coordinates for obstacle
    let obsLeft = obstacle.position.x;
    let obsRight = obstacle.position.x + this.size * obstacle.data[0].length;
    let obsTop = obstacle.position.y;
    let obsBottom = obstacle.position.y + this.size * obstacle.data.length;

    // Check for collision
    if (
      charLeft < obsRight &&
      charRight > obsLeft &&
      charTop < obsBottom &&
      charBottom > obsTop
    ) {
      // Collision detected, reset character to starting position
      this.x = 275; // Set starting X position
      this.y = 510; // Set starting Y position
    }
  }
}



