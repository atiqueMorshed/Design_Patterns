//We create an object without exposing creation logic to the client.
//Also, we can define what kind of objects can be created,
//if anyone tries to create an object that is not defined by us, they will get null in return.
//EG: We can do a lot of stuff with a knife, we can cut fruits, wires, kill people with it,
//Here knife is the class, we can abstract the class from user and can only allow users to
// cut fruits and wires with knife and also hide how we are making the knife.
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

const factory = new CarFactory();

const car1 = factory.createCar('civic');
const car2 = factory.createCar('honda');
const car3 = factory.createCar('xx');

console.log(car1);
console.log(car2);
console.log(car3);
