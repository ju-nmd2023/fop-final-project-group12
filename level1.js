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

function draw (){
    image(backgroundImage1, 0, 0, 600, 600);
}

///idqcbkjwnecd