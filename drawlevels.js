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

