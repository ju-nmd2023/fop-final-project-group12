export default function drawLevel1() {
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

  nina.displayNina();
  nina.movement();

  nina.collide(busOne);
  nina.collide(busTwo);
  nina.collide(busThree);
  nina.collide(busFour);

  nina.collidePlatforms(rock);
  nina.collidePlatforms(rockTwo);
  nina.collidePlatforms(car);
}
