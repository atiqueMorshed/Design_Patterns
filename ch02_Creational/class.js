class Car {
  constructor(doors, engine, colors) {
    this.doors = doors;
    this.engine = engine;
    this.colors = colors;
  }
}

const civic = new Car(4, 'V6', 'black');

console.log(civic);
