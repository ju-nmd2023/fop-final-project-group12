export default class Powerup {
    constructor(position, data, size) {
      this.position = position;
      this.data = data;
      this.size = size;
      this.isVisible = true;
    }
    display() {
        if(this.isVisible){
           push();
        translate(this.position.x, this.position.y);
        for (let y in this.data) {
            for (let x in this.data[y]) {
          let pixel = this.data[y][x];
          if (pixel === 1) {
            fill(211,211,211);
            rect(x * this.size, y * this.size, this.size, this.size);
          } else if (pixel === 2) {
            fill(50, 82, 123);
            rect(x * this.size, y * this.size, this.size, this.size);
          } else if (pixel === 3) {
            fill(166, 44, 43);
            rect(x * this.size, y * this.size, this.size, this.size);
          } 
        }
      } 
      pop();
        }
      }}