class ECommerceWebsite {
    constructor() {
        this.products = [
            'mobile phones',
            'books',
            'stationery',
            'laptops',
            'fashion'
        ];

        this.observerMap = {};

        for(var i=0; i<this.products.length; i++) {
            this.observerMap[this.products[i]] = [];
        }
    }

    subscribe(product, observerFn) {
        this.observerMap[product].push(observerFn);
    }

    unsubscribe(product, observerFn) {
        var observerFns = this.observerMap[product];

        for(var i=0; i<observerFns.length; i++) {
            if(observerFns[i] == observerFn) {
                observerFns.splice(i, 1);
                break;
            }
        }
    }

    publish(product, message) {
        console.log("Published message for product: ", product);

        var observerFns = this.observerMap[product];

        for(var i=0; i<observerFns.length; i++) {
            observerFns[i](product, message);
        }
    }
};

var eCommerceWebsite = new ECommerceWebsite();

function observer_alice(product, message) {
    console.log("Received by Alice:", product, message);
}

function observer_bob(product, message) {
    console.log("Received by Bob:", product, message);
}

function observer_irene(product, message) {
    console.log("Received by Irene:", product, message);
}

function observer_julia(product, message) {
    console.log("Received by Julia:", product, message);
}


eCommerceWebsite.subscribe("mobile phones", observer_alice);
console.log("E-commerce website:", eCommerceWebsite);

eCommerceWebsite.publish("mobile phones", "The iPhone 10 is now available.");

eCommerceWebsite.subscribe("mobile phones", observer_irene);
eCommerceWebsite.publish("mobile phones", "The Samsung S10 has sold out.");
console.log("E-commerce website:", eCommerceWebsite);

eCommerceWebsite.subscribe("books", observer_irene);
eCommerceWebsite.subscribe("books", observer_julia);
eCommerceWebsite.publish("books", "Books by Roald Dahl are on sale!");
console.log("E-commerce website:", eCommerceWebsite);

eCommerceWebsite.unsubscribe("mobile phones", observer_irene);
eCommerceWebsite.publish("books", "Harry Potter books are now back in stock.");
eCommerceWebsite.publish("mobile phones", "Mobile accessories at a discount.");
console.log("E-commerce website:", eCommerceWebsite);

eCommerceWebsite.unsubscribe("books", observer_irene);
eCommerceWebsite.publish("books", "New titles available in travel.");
console.log("E-commerce website:", eCommerceWebsite);
