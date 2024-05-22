export default class Raindrop {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    //empty arrays that will contain random values
    this.raindropX = [];
    this.raindropY = [];
    this.raindropVelocity = [];
    this.raindropLength = [];
    this.initializeRaindrops();
  }

  initializeRaindrops() {
    for (let i = 0; i < 500; i++) {
      //math.floor rounds the number down
      const x = Math.floor(Math.random() * this.width);
      const y = Math.floor(Math.random() * this.height);

      const velocity = Math.random() * 25;

      const length = Math.random() * 10;

      //push the random numbers to the empty arrays we defined before
      this.raindropX.push(x);
      this.raindropY.push(y);
      this.raindropVelocity.push(velocity);
      this.raindropLength.push(length);
    }
  }

  update() {
    for (let index in this.raindropX) {
      this.raindropY[index] += this.raindropVelocity[index];

      //if the random y position is negative (so outside of the screen, higher than the height of the canvas), then its reset to 0
      if (this.raindropY[index] > this.height) {
        this.raindropY[index] = 0;
      }
    }
  }

  display() {
    noStroke();
    fill(80, 80, 255);
    for (let index in this.raindropX) {
      rect(
        this.raindropX[index],
        this.raindropY[index],
        2, //this is the width of raindrops
        this.raindropLength[index]
      );
    }
  }
}

//the code for rain is the one we learned in class with Garrit
