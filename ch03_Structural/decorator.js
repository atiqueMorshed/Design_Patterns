// Much like Mixins
// Not officially supported in javascript yet, supported in typescript.

class Car {
  constructor(doors, engine, colors) {
    this.doors = doors;
    this.engine = engine;
    this.colors = colors;
  }
  @decoratorObject; // Here, we are attaching an external object to our class.
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

const decoratorObject = {
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


/////////

const autoManufacture = (type, model) => {
  if (type === 'Car') return carFactory.createCar(model);
  else if (type === 'SUV') return suvFactory.createSUV(model);
  else return null;
};

const car1 = autoManufacture('Car', 'honda');
car1.sendEngineStatus();
car1.sendWheelStatus();







//TypeScript Code: https://www.typescriptlang.org/docs/handbook/decorators.html
// function f() {
//   console.log('f(): evaluated');
//   return function (
//     target,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('f(): called');
//   };
// }

// function g() {
//   console.log('g(): evaluated');
//   return function (
//     target,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('g(): called');
//   };
// }

// class C {
//   @f()
//   @g()
//   method() {}
// }
/////////////////////////////////////////////////////////////////////////////////
