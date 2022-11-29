class Person {

    constructor(name, city, country) {
        this.name = name;
        this.city = city;
        this.country = country;
    }

    introduction() {
        console.log("name: ", this.name, "city: ", this.city, "country: ", this.country);
    }
};

var artistMixin = {
    paintBeautifully: function() {
        console.log(this.name, "can paint beautifully");
    },
    
    danceGracefully: function() {
        console.log(this.name, "can dance gracefully");
    },

    singMelodiously: function() {
        console.log(this.name, "can sing melodiously");
    }
};

_.extend(Person.prototype, artistMixin);

var artistPerson = new Person("Harry", "New York", "USA");
console.log(artistPerson);

artistPerson.introduction();
artistPerson.paintBeautifully();
artistPerson.danceGracefully();
artistPerson.singMelodiously();

var scientistMixing = {
    doMath: function() {
        console.log(this.name, "is great at math!");
    }
};

_.extend(Person.prototype, scientistMixing);

var artistScientistPerson = new Person("Lily", "London", "England");
console.log(artistScientistPerson);

artistScientistPerson.introduction();
artistScientistPerson.paintBeautifully();
artistScientistPerson.danceGracefully();
artistScientistPerson.singMelodiously();
artistScientistPerson.doMath();
