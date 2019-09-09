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

    let foodTimer = setInterval(() => {
      if (!this.sleeping) {
        this.food-=2;
      }
        else {
          this.food-=1;
        }}, 30000);

        this.warn();
        this.die();
  }

  sleepState() {
    let sleepTimer = setInterval(() => {
      if (!this.sleeping) {
        this.sleep-=2;
      }
        else {
          this.sleep+=2;
        }}, 30000);

        this.warn();
        this.die();
    }

  decrementFun() {
    let funTimer = setInterval(() => {
      if (!this.sleeping) {
        this.fun-=2;
      }
        else {
          this.fun-=1;
        }}, 30000);

        this.warn();
        this.die();
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
      if(!this.sleeping) {
        this.sleeping = true;
      } else {
        this.sleeping = false
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
