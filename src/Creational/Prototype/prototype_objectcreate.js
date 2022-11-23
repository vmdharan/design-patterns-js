var vehiclePrototype = {
    getMakeModelYear: function(year) {
        console.log("MakeModelYear:", this.make, this.model, year);
    },
    getVehicleMake: function() {
        console.log("VehicleMake:", this.make);
    }
};

vehicle1 = Object.create(vehiclePrototype, {
    make: {
        value: "Toyota",
        writable: true,
        enumerable: true,
        configurable: true
    },
    model: {
        value: "Corolla",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(vehicle1);
vehicle1.getMakeModelYear("2008");
vehicle1.getVehicleMake();

vehicle2 = Object.create(vehiclePrototype, {
    make: {
        value: "Subaru",
        writable: true,
        enumerable: true,
        configurable: true
    },
    model: {
        value: "Legacy",
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(vehicle2);
vehicle2.getMakeModelYear("2010");
vehicle2.getVehicleMake();
