// Only allows one instance of a class.

let instance = null;

class Car {
  constructor(doors, engine, colors) {
    if (!instance) {
      // If the instance variable is null, only then create an instance and set the instance variable to current object
      this.doors = doors;
      this.engine = engine;
      this.colors = colors;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, 'V6', 'black');
const honda = new Car(69, 'V8', 'white');
console.log(civic);
console.log(honda); // This instance will not be created, instead previous value will be copied here.
