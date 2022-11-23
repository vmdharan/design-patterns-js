class Vehicle {
    constructor(vehicleType) {
        this.vehicleType = vehicleType;
    }

    printDetails() {
        console.log("Vehicle type:", this.vehicleType, "Make:", this.make, "Model:", this.model);
    }

    drive() {
        console.log("Drive: ", this.vehicleType, this.make, this.model);
    }

    fillFuel() {
        console.log("Fill fuel: ", this.vehicleType, this.make, this.model);
    }
}

class Car extends Vehicle {
    constructor(details) {
        super("car");
    }

    printDetails() {
        super.printDetails();
    }
};

class Truck extends Vehicle {
    constructor(details) {
        super("truck");
    }

    printDetails() {
        super.printDetails();
    }
};

class TwoWheeler extends Vehicle {
    constructor(details) {
        super("twowheeler");
    }

    printDetails() {
        super.printDetails();
    }
};

var vehicleBuilder = (function () {
    vehicleInstance = null;

    return {

        create: function(vehicleType) {
            switch(vehicleType) {
                case "car": vehicleInstance = new Car(); break;
                case "truck": vehicleInstance = new Truck(); break;
                case "twoWheeler": vehicleInstance = new TwoWheeler(); break;
            }
            return this;
        },

        make: function(make) {
            vehicleInstance.make = make;
            return this;
        },

        model: function(model) {
            vehicleInstance.model = model;
            return this;
        },

        colour: function(colour) {
            vehicleInstance.colour = colour;
            return this;
        },

        build: function() {
            if(!vehicleInstance.make || !vehicleInstance.model) {
                throw Error('Specify make / model !');
            }
            return vehicleInstance;
        }
    };
})();

console.log("vehicle builder:", vehicleBuilder);

var car1 = vehicleBuilder.create("car")
    .make("Toyota")
    .model("Corolla")
    .colour("Green")
    .build();

console.log("car1 after build:", car1);

var truck1 = vehicleBuilder.create("truck")
    .make("SomeTruckMake")
    .model("SomeTruckModel")
    .colour("Red")
    .build();

console.log("truck1 after build:", truck1);

var bike1 = vehicleBuilder.create("twoWheeler")
    .make("SomeTwoWheelerMake")
    .model("SomeTwoWheelerModel")
    .colour("Yellow")
    .build();

console.log("bike1 after build:", bike1);
