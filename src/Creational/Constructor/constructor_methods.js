// Method 1
var car = {};
console.log("Empty car object: ", car);

car.type = "Toyota";
car["model"] = "Camry";
car.year = 2020;
console.log("Car: ", car);

car.printDetails = function() {
    console.log("Type:", this.type, "Model:", this.model, "Year:", this.year);
}
console.log("car with function properties: ", car);

car.printDetails();


// Method 2
var vehicle = Object.create(Object.prototype);
console.log("Empty vehicle", vehicle);

vehicle.type = "Toyota";
vehicle["model"] = "Corolla";
vehicle.year = 2014;
console.log("Vehicle: ", vehicle);

vehicle.printDetails = function() {
    console.log("Type:", this.type, "Model:", this["model"], "Year:", this.year);
}
console.log("vehicle with function properties: ", car);

vehicle.printDetails();


// Method 3
var suv = new Object();
console.log("Empty suv", suv);

suv.type = "Mitsubishi";
suv["model"] = "Pajero";
suv.year = 2022;
console.log("suv: ", suv);

suv.printDetails = function() {
    console.log("Type:", this.type, "Model:", this["model"], "Year:", this.year);
}
console.log("suv with function properties: ", suv);

suv.printDetails();