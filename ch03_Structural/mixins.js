// As defined in Wikipedia, a mixin is a class containing methods that can be
// used by other classes without a need to inherit from it.
// In other words, a mixin provides methods that implement a certain behavior,
// but we do not use it alone, we use it to add the behavior to other classes.

// Assigns external object/ functions to one or many classes.

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
///////// MIXINS /////////

const mixinObject = {
  sendEngineStatus() {
    console.log(`This ${this.engine} engine is doing vroom vroom.`);
  },
  sendWheelStatus() {
    console.log(`All ${this.doors} doors are doing great!`);
  },
};

/////////

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

///////// ATTACHING MIXINS Object to a class /////////

Object.assign(Car.prototype, mixinObject);

/////////

const autoManufacture = (type, model) => {
  if (type === 'Car') return carFactory.createCar(model);
  else if (type === 'SUV') return suvFactory.createSUV(model);
  else return null;
};

const car1 = autoManufacture('Car', 'honda');
car1.sendEngineStatus();
car1.sendWheelStatus();
