class Vehicle {
    constructor(type, make, model, year) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    printDetails() {
        console.log("Vehicle type:", this.type, "Make:", this.make, "Model:", this["model"], "Year:", this.year);
    }
};

class Car extends Vehicle {
    constructor(details) {
        super("car", details.make, details.model, details.year);
        this.carType = details.carType;
    }

    printDetails() {
        super.printDetails();
        console.log("car type:", this.carType);
    }
};

class Truck extends Vehicle {
    constructor(details) {
        super("truck", details.make, details.model, details.year);
        this.truckType = details.truckType;
    }

    printDetails() {
        super.printDetails();
        console.log("truck type:", this.truckType);
    }
};

class CustomVehicleFactory {
    constructor(vehicleType) {
        if(vehicleType == 'car') {
            this.vehicleConstructor = Car;
        } else if (vehicleType == 'truck') {
            this.vehicleConstructor = Truck;
        }
    }

    createVehicle(details) {
        return new this.vehicleConstructor(details);
    }
}
var carFactory = new CustomVehicleFactory("car");
var truckFactory = new CustomVehicleFactory("truck");
console.log("Vehicle factory:", CustomVehicleFactory);

var carDetails1 = {
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "carType": "sedan"
};
var car1 = carFactory.createVehicle(carDetails1);
console.log("created car:", car1);
console.log("Is instance of Car?", (car1 instanceof Car));
car1.printDetails();

var truckDetails1 = {
    "make": "SomeMake",
    "model": "SomeModel",
    "year": 2022,
    "truckType": "small truck"
};
var truck1 = truckFactory.createVehicle(truckDetails1);
console.log("created truck:", truck1);
console.log("Is instance of Truck?", (truck1 instanceof Truck));
truck1.printDetails();