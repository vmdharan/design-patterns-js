var counterModule = (function () {
    var counter = 0;

    return {
        getCounter: function() {
            return counter;
        },

        incrementCounter: function() {
            counter++;
            console.log("Counter after increment: ", counter);
        },

        decrementCounter: function() {
            counter--;
            console.log("Counter after decrement: ", counter);
        },

        resetCounter: function() {
            console.log("Counter before reset: ", counter);
            counter = 0;
            console.log("Counter after reset: ", counter);
        }
    };
})();

console.log("Counter module: ", counterModule);

counterModule.incrementCounter();
counterModule.incrementCounter();
counterModule.decrementCounter();

counterModule.incrementCounter();
counterModule.decrementCounter();
counterModule.resetCounter();
