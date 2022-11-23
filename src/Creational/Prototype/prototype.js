var vehiclePrototype = {
    init: function(make, model) {
        this.make = make;
        this.model = model;
    },
    getMakeModelYear: function(year) {
        console.log("MakeModelYear:", this.make, this.model, year);
    },
    getVehicleMake: function() {
        console.log("VehicleMake:", this.make);
    }
};

function createVehicle(make, model) {
    function Vehicle() {

    };

    Vehicle.prototype = vehiclePrototype;

    var newVehicle = new Vehicle();
    newVehicle.init(make, model);

    return newVehicle;
};

var vehicle1 = createVehicle("Toyota", "Corolla");
console.log("vehicle1", vehicle1);

vehicle1.getMakeModelYear("2008");
vehicle1.getMakeModelYear("2010");
vehicle1.getVehicleMake();
