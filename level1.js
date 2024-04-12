let backgroundImage1;

function preload() {
    // Load the image
    backgroundImage1 = loadImage('images/backgroundlevel1.png');
}

function setup() {
    createCanvas(800, 600); // Increase canvas size
    // Set the background to the loaded image
    // Draw the image with desired width and height
    image(backgroundImage1, 0, 0, 600, 600);
}

///array busses

let dataBus = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1],
    [1,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1],
    [1,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1],
    [1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,],
];

const size = 4;

function draw (){
    image(backgroundImage1, 0, 0, 600, 600);

    noStroke();
    push();
    translate(10, 370);
    for (let y in dataBus) {
      for (let x in dataBus[y]) {
        let pixel = dataBus[y][x];
        if (pixel === 1) {
          fill("red");
          rect(x * size, y * size, size, size);
        } else if (pixel === 2) {
          fill("black");
          rect(x * size, y * size, size, size);
        } else if (pixel === 3) {
          fill(216,36,41);
          rect(x * size, y * size, size, size);
        }
      }
    }
    pop();
}


