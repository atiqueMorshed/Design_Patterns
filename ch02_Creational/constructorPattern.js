// basically inheritance.
class Car {
  constructor(doors, engine, colors) {
    this.doors = doors;
    this.engine = engine;
    this.colors = colors;
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const civic = new Car(4, 'V6', 'black');
const cx5 = new SUV(4, 'V8', 'white');
console.log(cx5);
