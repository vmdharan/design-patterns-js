var randomCounterModule = (function () {
    var randomCounter = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    function logCounterValue(message) {
        console.log(message, randomCounter);
    }

    return {
        getCounter: function() {
            return randomCounter;
        },

        incrementCounter: function() {
            randomCounter += getRandomNumber();
            logCounterValue("Counter after increment: ", randomCounter);
        },

        decrementCounter: function() {
            randomCounter -= getRandomNumber();
            logCounterValue("Counter after decrement: ", randomCounter);
        },

        randomlyIncrementOrDecrement: function() {
            var number = getRandomNumber();

            if(number%2 ==0) {
                this.incrementCounter();
            } else {
                this.decrementCounter();
            }
        },

        resetCounter: function() {
            logCounterValue("Counter before reset: ", randomCounter);
            randomCounter = 0;
            logCounterValue("Counter after reset: ", randomCounter);
        }  
    };
})();

console.log("Random counter module: ", randomCounterModule);

randomCounterModule.incrementCounter();
randomCounterModule.incrementCounter();
randomCounterModule.decrementCounter();

randomCounterModule.incrementCounter();
randomCounterModule.decrementCounter();
randomCounterModule.resetCounter();

randomCounterModule.randomlyIncrementOrDecrement();
randomCounterModule.resetCounter();