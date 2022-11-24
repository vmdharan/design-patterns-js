var Iterator = {
    reset: function() {
        this.index = 0;
    },

    hasNext: function () {
        return this.index < this.items.length;
    },

    next: function () {
        if (!this.hasNext()) {
            throw Error("No more items");
        }

        var currentItem = this.items[this.index];
        this.index++;

        return currentItem;
    },

    first: function() {
        this.reset();
        return this.next();
    },

    each: function(callbackFn) {
        for(var item=this.first(); this.hasNext(); item = this.next()) {
            callbackFn(item);
        }
        callbackFn(item);
    }
};

class Students {
    constructor() {
        this.index = 0;
        this.items = [];
    }

    addStudent(name) {
        this.items.push(name);
    }
}

_.extend(Students.prototype, Iterator);

var students = new Students();
console.log(students);

students.addStudent("Elise");
students.addStudent("Fiona");
students.addStudent("Harold");
students.addStudent("Jeremy");
students.addStudent("Kim");

console.log(students.first());
console.log("Has next?", students.hasNext());
console.log(students.next());
console.log("Has next?", students.hasNext());
console.log(students.next());
console.log("Has next?", students.hasNext());
console.log(students.next());
console.log("Has next?", students.hasNext());
console.log(students.next());

// Will error.
//console.log("Has next?", students.hasNext());
//console.log(students.next());

console.log("Reset", students.reset());
console.log(students.next());
console.log(students.next());
console.log(students.next());
console.log(students.next());
console.log(students.next());

students.each(function(name) {
    console.log("*** in each", name);
});

class Cities {
    constructor () {
        this.index = 0;
        this.items = ["New York", "Singapore", "New Delhi", "Sydney", "Cairo"];
    }
};
_.extend(Cities.prototype, Iterator);

var cities = new Cities();

console.log(cities.next());
console.log(cities.next());

cities.each(function(name) {
    console.log("*** in each", name);
});
