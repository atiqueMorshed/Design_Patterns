// See factory pattern and then try this.
// This is like 2-layered factory pattern.
// When we have multiple classes and we need to apply factory pattern to all of them.
// Here the classes and also the class creators are hidden.
// Client can call a specific function and the parameters will define which class creators and then class to hit
class Car {
  constructor(doors, engine, colors) {
    this.doors = doors;
    this.engine = engine;
    this.colors = colors;
  }
}

class CarFactory {
  createCar(type) {
    if (type === 'civic') return new Car(4, 'V6', 'black');
    else if (type === 'honda') return new Car(69, 'V8', 'white');
    else return null;
  }
}

class SUV {
  constructor(doors, engine, colors) {
    this.doors = doors;
    this.engine = engine;
    this.colors = colors;
  }
}

class SUVFactory {
  createSUV(type) {
    if (type === 'suv1') return new SUV(6, 'V26', 'red');
    else if (type === 'suv2') return new SUV(8, 'V28', 'blue');
    else return null;
  }
}

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

const autoManufacture = (type, model) => {
  if (type === 'Car') return carFactory.createCar(model);
  else if (type === 'SUV') return suvFactory.createSUV(model);
  else return null;
};

const car1 = autoManufacture('Car', 'honda');
const suv1 = autoManufacture('SUV', 'suv1');

console.log(car1);
console.log(suv1);
