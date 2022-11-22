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

    drive() {
        console.log("Drive: ", this.type, this.make, this.model, this.year);
    }

    fillFuel() {
        console.log("Fill fuel: ", this.type, this.make, this.model, this.year);
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

class TwoWheeler extends Vehicle {
    constructor(details) {
        super("twowheeler", details.make, details.model, details.year);
        this.twoWheelerType = details.twoWheelerType;
    }

    printDetails() {
        super.printDetails();
        console.log("twoWheeler type:", this.twoWheelerType);
    }
};


class VehicleFactory {
    constructor(vehicleType) {
        this.vehicleConstructor = Car;
        switch(vehicleType) {
            case "car": this.vehicleConstructor = Car; break;
            case "truck": this.vehicleConstructor = Truck; break;
            case "twoWheeler": this.vehicleConstructor = TwoWheeler; break;
        }
    }

    create(details) {
        return new this.vehicleConstructor(details);
    }
};

class CarFactory extends VehicleFactory {
    constructor() {
        super("car");
    }
};

class TruckFactory extends VehicleFactory {
    constructor() {
        super("truck");
    }
}

class TwoWheelerFactory extends VehicleFactory {
    constructor() {
        super("twoWheeler");
    }
}

var abstractVehicleFactory = (function() {
    var factoryTypes = {};
    return {
        getVehicle: function(vehicleType, details) {
            var vehicleFactory = factoryTypes[vehicleType];
            if(vehicleFactory) {
                return vehicleFactory.create(details);
            }

            return null;
        },

        registerVehicleFactory: function(vehicleType, vehicleFactory) {
            if(!vehicleFactory.__proto__.create) {
                throw Error("create() method expected on factory.");

            }
            if(!vehicleFactory.vehicleConstructor) {
                throw Error("vehicleConstructory expected on factory.");
                
            }
            if(!vehicleFactory.vehicleConstructor.prototype.drive || 
                !vehicleFactory.vehicleConstructor.prototype.fillFuel) {
                throw Error("Vehicles constructed should have drive() and fillFuel() methods.");
                
            }

            factoryTypes[vehicleType] = vehicleFactory;
        }
    };
})();

abstractVehicleFactory.registerVehicleFactory("car", new CarFactory());
abstractVehicleFactory.registerVehicleFactory("truck", new TruckFactory());

console.log("abstractVehicleFactory", abstractVehicleFactory);

var carDetails1 = {
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "carType": "sedan"
};

var car1 = abstractVehicleFactory.getVehicle("car", carDetails1);
console.log("created car:", car1);
console.log("Is instance of Car?", (car1 instanceof Car));
car1.printDetails();

var truckDetails1 = {
    "make": "SomeMake",
    "model": "SomeModel",
    "year": 2022,
    "truckType": "small truck"
};
var truck1 = abstractVehicleFactory.getVehicle("truck", truckDetails1);
console.log("created truck:", truck1);
console.log("Is instance of Truck?", (truck1 instanceof Truck));
truck1.printDetails();

// Won't work!
var twoWheelerDetails1 = {
    "make": "BWM",
    "model": "SomeBWMModel",
    "year": "2019",
    "twoWheelerType": "motorbike"
};
var twoWheeler1 = abstractVehicleFactory.getVehicle("twoWheeler", twoWheelerDetails1);
console.log("created twoWheeler:", twoWheeler1);
console.log("Is instance of TwoWheeler?", (twoWheeler1 instanceof TwoWheeler));

abstractVehicleFactory.registerVehicleFactory("twoWheeler", new TwoWheelerFactory());

// Now works!
var twoWheelerDetails2 = {
    "make": "BWM",
    "model": "AnotherBWMModel",
    "year": "2018",
    "twoWheelerType": "motorbike"
};
var twoWheeler2 = abstractVehicleFactory.getVehicle("twoWheeler", twoWheelerDetails2);
console.log("created twoWheeler:", twoWheeler2);
console.log("Is instance of TwoWheeler?", (twoWheeler2 instanceof TwoWheeler));
twoWheeler2.printDetails();
