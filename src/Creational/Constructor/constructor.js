class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

        this.printDetails = function() {
            console.log("Make:", this.make, "Model:", this["model"], "Year:", this.year);
        }
    }

    showDetails() {
        console.log("Make:", this.make, "Model:", this["model"], "Year:", this.year);
    }
};

var vehicle1 = new Vehicle('Toyota', 'Camry', '2020');
console.log(vehicle1);

vehicle1.printDetails();
vehicle1.showDetails();