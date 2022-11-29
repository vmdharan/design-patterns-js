var counterModule = (function () {
    var counter = 0;

    function getCounter() {
        return counter;
    }

    function incrementCounter() {
        counter++;
        console.log("Counter after increment: ", counter);
    }

    function decrementCounter() {
        counter--;
        console.log("Counter after decrement: ", counter);
    }

    function resetCounter() {
        console.log("Counter before reset: ", counter);
        counter = 0;
        console.log("Counter after reset: ", counter);
    }

    return {
        getCounter: getCounter,
        increment: incrementCounter,
        decrement: decrementCounter,
        reset: resetCounter 
    };
})();

console.log("Counter module: ", counterModule);

counterModule.increment();
counterModule.increment();
counterModule.decrement();

counterModule.increment();
counterModule.decrement();
counterModule.reset();
