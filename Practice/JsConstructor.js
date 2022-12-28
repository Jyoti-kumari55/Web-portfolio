function Car(make, model, price, engine){
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
}
let s60Engine={
    cylinder: 5,
    displacement: 2000,
    horsepower: 250
}
let myCar = new Car("volvo", "s90", 67000, s60Engine);
console.log(`My car is a ${myCar.make} and ${myCar.model}`);