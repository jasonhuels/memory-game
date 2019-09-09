export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 10;
    this.sleep = 10;
    this.fun = 10;
    this.sleeping = false;
    this.sick = false;
    this.dead = false;
    this.decrementFood();
    this.sleepState();
    this.decrementFun();
  }

  decrementFood() {
    let time = 0;
    if(!sleeping) {
      time = 30000;
    } else {
      time = 60000;
    }
    if(!dead) {
      let foodTimer = setInterval(() => {
        this.food--}, time);

        this.warn();
        this.die();
    } else {
      clearInterval(foodTimer);
    }
  }

  sleepState() {
    if(!sleeping) {
      let sleepTimer = setInterval(() => {
        this.sleep--}, 30000);
    } else {
      let sleepTimer = setInterval(() => {
        this.sleep++}, 30000);
    }
    this.warn();
    this.die();
  }

  decrementFun() {
    let time = 0;
    if(!sleeping) {
      time = 30000;
    } else {
      time = 60000;
    }
    if(!dead) {
      let funTimer = setInterval(() => {
        this.fun--}, 30000);
        this.warn();
        this.die();
    }
  }
  warn() {
    if(this.food <= 0 || this.food >= 20 || this.sleep <=0 || this.fun <=0 || this.fun >= 20) {
      this.sick = true;
    }
  }

  feed() {
    if(!this.dead && !this.sleeping) {
      this.food++;
    }
  }

  changeSleepState() {
    if(!this.dead) {
      if(!sleeping) {
        sleeping = true;
      } else {
        sleeping = false
      }
    }
  }

  play() {
    if(!this.dead && !this.sleeping) {
      this.fun++;
    }
  }

  die() {
    if(this.food <= -1 || this.food >= 21 || this.sleep <=-1|| this.sleep >= 21 || this.fun <=-1 || this.fun >= 21) {
      this.dead = true;
    }
  }
}
