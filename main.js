'use-strict';

class main() {
  constructor(name) {
    this.name = name
  }

  lookName() {
    console.log(`this is name of user ${this.name}`);
  }

  age(age) {
    console.log(`the age of ${this.name} is ${age}`);
  }
}
