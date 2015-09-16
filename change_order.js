//Input: String that indicates which type of class or subclass to build from

//Output: Object with keys that we had created previously within our OOP

//What do we need: Create a function that it's argument is a string which should activate which
//class type we want to invoke.

function Automobile(type, model, make, color) {
  this.type = type;
  this.model = model;
  this.make = make;
  this.color = color;
}

function Car(model, make, color) {
  Automobile.call(this, type, model, make, color);
}

Car.prototype = Object.create(Automobile.prototype, {
  constructor: {
    value: Car
  }
});

function Truck(model, make, color) {
  Automobile.call(this, type, model, make, color);
}

Truck.prototype = Object.create(Automobile.prototype, {
  constructor: {
    value: Truck
  }
});

function Minivan(model, make, color) {
  Automobile.call(this, type, model, make, color);
}

Minivan.prototype = Object.prototype(Automobile.prototype, {
  constructor: {
    value: Minivan
  }
});

Automobile.request = function(type, options) { // Orginally had Automobile.prototype.request, but removed to set a static
  if(!options.model || !options.make || !options.color){
    throw new Error('Invalid');
  }

  if( type.toLowerCase() === 'car' ) {
    return new Car(options.model, options.make, options.color);
      }

  if( type.toLowerCase() === 'truck' ) {
    return new Truck(options.model && options.make && options.color);
        }

  if( type.toLowerCase() === 'minivan' ) {
    return new Minivan(options.model && options.make && options.color);
        }

    throw new Error('Invalid input request');
};