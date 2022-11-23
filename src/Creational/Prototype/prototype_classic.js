var vehicle = {
    make: 'Toyota',
    model: 'Camry',
    getMakeModelYear: function(year) {
        console.log("MakeModelYear:", this.make, this.model, year);
    },
    getVehicleMake: function() {
        console.log("VehicleMake:", this.make);
    }
};

var vehicle2 = Object.create(vehicle);
console.log("vehicle", vehicle);
console.log("vehicle2", vehicle2);

vehicle2.getMakeModelYear("2005"),
vehicle2.getVehicleMake();

vehicle2.make = "Subaru";
vehicle2.model = "Legacy";
vehicle2.getMakeModelYear("2008");

vehicle.model = "Corolla";
vehicle.getMakeModelYear("2010");

console.log("vehicle", vehicle);
console.log("vehicle2", vehicle2);
