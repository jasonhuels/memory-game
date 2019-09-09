import {Tamagotchi} from './../src/tamagotchi.js';

describe("Tamagotchi", function() {
  let tamagotchi;

  beforeEach(function() {
    jasmine.clock().install();
    tamagotchi = new Tamagotchi("Rover");
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should be created with a name and starting values of 10", function() {
    expect(tamagotchi.name).toEqual("Rover");
    expect(tamagotchi.food).toEqual(10);
    expect(tamagotchi.sleep).toEqual(10);
    expect(tamagotchi.fun).toEqual(10);
    expect(tamagotchi.sleeping).toEqual(false);
    expect(tamagotchi.sick).toEqual(false);
    expect(tamagotchi.dead).toEqual(false);
  });
  it("should test that value levels are decremented every 30 seconds", function() {
    jasmine.clock().tick(30001);
    expect(tamagotchi.food).toEqual(8);
    expect(tamagotchi.sleep).toEqual(8);
    expect(tamagotchi.fun).toEqual(8);
  });
  it("should increment values if the user uses the appropriate function", function() {
    jasmine.clock().tick(30001);
    tamagotchi.feed();
    tamagotchi.play();
    expect(tamagotchi.food).toEqual(9);
    expect(tamagotchi.fun).toEqual(9);
  });
  it("should change the sleep state when commanded to rest", function() {
    tamagotchi.changeSleepState();
    expect(tamagotchi.sleeping).toEqual(true);
  });

  it("should increment sleep while sleeping is true", function() {
    tamagotchi.changeSleepState();
    console.log(tamagotchi.sleeping);
    jasmine.clock().tick(30001);
    expect(tamagotchi.sleep).toEqual(12);
  });

  it("should decrement hunger and fun slower while sleeping is true", function() {
    tamagotchi.changeSleepState();
    jasmine.clock().tick(60001);
    expect(tamagotchi.food).toEqual(8);
    expect(tamagotchi.fun).toEqual(8);
  });

  it("pet should get sick if food, sleep or fun levels reach 0", function() {
    tamagotchi.food = 0;
    tamagotchi.sleep = 0;
    tamagotchi.fun = 0;
    tamagotchi.warn();
    expect(tamagotchi.sick).toEqual(true);
  });

  it("pet should die if any value is negative", function() {
    tamagotchi.food = -1;
    tamagotchi.sleep = -1;
    tamagotchi.fun = -1;
    tamagotchi.die();
    expect(tamagotchi.dead).toEqual(true);
  });

  it("User can't feed a dead pet", function() {
    tamagotchi.food = -1;
    tamagotchi.die();
    tamagotchi.feed();
    expect(tamagotchi.food).toEqual(-1);
  });
});
