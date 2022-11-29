function Car(make, model, totalCost) {
    this.make = make;
    this.model = model;

    totalCost = totalCost;
    customFeatures = [];

    this.getTotalCost = function() {
        return totalCost;
    }

    this.getCustomFeatures = function() {
        return customFeatures;
    }

    this.printDetails = function() {
        console.log("make: ", this.make,
            "model: ", this.model,
            "totalcost: ", this.getTotalCost(),
            "customFeatures: ", this.getCustomFeatures()
        );
    }
};

function customColour(car, colour, cost) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("color " + colour);

    car.customFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + cost;
    }

    return car;
};

function alloyWheels(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("alloy wheels");

    car.customFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + 400;
    }

    return car;
};

function leatherSeats(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("leather seats");

    car.customFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + 350;
    }

    return car;
};

function musicSystem(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("music system");

    car.customFeatures = function() {
        return customFeatures.concat();
    }

    car.getTotalCost = function() {
        return totalCost + 150;
    }

    return car;
};

var plainCar = new Car("Toyota", "Camry", 12000);
console.log("Plain car: ", plainCar);
plainCar.printDetails();

var customisedCar = customColour(plainCar, "red", 200);
console.log("customised car: ", customisedCar);
customisedCar.printDetails();

customisedCar = alloyWheels(customisedCar);
customisedCar.printDetails();

customisedCar = leatherSeats(customisedCar);
customisedCar.printDetails();

customisedCar = musicSystem(customisedCar);
customisedCar.printDetails();

var anotherCustomisedCar = alloyWheels(leatherSeats(customColour(
    new Car("Honda", "Civic", 15000), "gold", 600
)));
anotherCustomisedCar.printDetails();
