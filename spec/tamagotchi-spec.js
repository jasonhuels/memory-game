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
    expect(tomagotchi.sleeping).toEqual(false);
  });
  it("should test that value levels are decremented every 30 seconds", function() {
    jasmine.clock().tick(30001);
    expect(tamagotchi.food).toEqual(9);
    expect(tamagotchi.sleep).toEqual(9);
    expect(tamagotchi.fun).toEqual(9);
  });
  it("should increment values if the user uses the appropriate function", function() {
    jasmine.clock().tick(30001);
    tamagotchi.feed();
    tamagotchi.play();
    expect(tamagotchi.food).toEqual(10);
    expect(tamagotchi.fun).toEqual(10);
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
