export default class Obstacle {
    constructor(position, data, size, speed) {
      this.position = position;
      this.data = data;
      this.size = size;
      //speed was added to make sure it could be changed independently for the busses in other lanes
      this.speed = speed;
    }
  
    display() {
      push();
      translate(this.position.x, this.position.y);
      this.position.x += this.speed;
      for (let y in this.data) {
        for (let x in this.data[y]) {
          let pixel = this.data[y][x];
          if (pixel === 1) {
            fill(190, 10, 20);
            rect(x * size, y * size, size, size);
          } else if (pixel === 2) {
            fill(139, 0, 0);
            rect(x * size, y * size, size, size);
          } else if (pixel === 3) {
            fill(216, 36, 41);
            rect(x * size, y * size, size, size);
          } else if (pixel === 4) {
            fill(108, 20, 19);
            rect(x * size, y * size, size, size);
          }
        }
      }
      //creates a loop for the busses, with the speed controlling for the start and end points
      //a speed less than 0, meaning it will move right to left, makes the bus start at 700 after it reaches -150
      //and the inverse is true for busses with a speed greater than 0.
      if (this.speed > 0 && this.position.x > 640) {
        this.position.x = -150;
      } else if (this.speed < 0 && this.position.x < -140) {
        this.position.x = 700;
      }
  
      pop();
    }
  }