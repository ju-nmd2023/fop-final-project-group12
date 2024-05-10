export default class Water {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  displayWater() {
    push();
    fill(255, 0, 0, 50);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
