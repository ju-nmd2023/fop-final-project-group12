export default function drawLevel1 (){
    image(backgroundImage1, 0, 0, 600, 600);
  
    noStroke();
    waterLevelOne.displayWater();
    rock.displayRock();
    rockTwo.displayRock();
    car.displayCar();
  
    busOne.displayBus();
    busTwo.displayBus();
    busThree.displayBus();
    busFour.displayBus();
  
    veronica.display();
    veronica.movement();
  
    veronica.collide(busOne);
    veronica.collide(busTwo);
    veronica.collide(busThree);
    veronica.collide(busFour);
  
    veronica.collidePlatforms(rock);
    veronica.collidePlatforms(rockTwo);
    veronica.collidePlatforms(car);
    }

export default function drawLevel2() {
    image(backgroundImage2, 0, 0, 600, 600);
  
    birdOne.displayBird();
    birdTwo.displayBird();
    birdThree.displayBird();
    log.displayLog();
    logTwo.displayLog();
    logThree.displayLog();
    logFour.displayStillLog();
  
    veronica.display();
    veronica.movement();
  
    veronica.collide(birdOne);
    veronica.collide(birdTwo);
  
  
    veronica.collidePlatforms(log);
    veronica.collidePlatforms(logTwo);
    veronica.collidePlatforms(logThree);
    veronica.collidePlatforms(logFour);    
  }
