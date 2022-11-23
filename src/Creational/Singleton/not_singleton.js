// Not Singleton logger
console.log("Not a Singleton logger.")
class Logger {
    constructor() {
        this.randomNumber = Math.random();
    }

    log(message) {
        console.log("Logger id: ", this.randomNumber, message);
    }
};

var loggerFunc = (function () {
    var instance;
    
    return {
        getInstance: function () {
            instance = new Logger();
            return instance;
        }
    }
})();

var logger1 = loggerFunc.getInstance();
logger1.log("Logger1");
logger1.log('Message from logger1');

var logger2 = loggerFunc.getInstance();
logger2.log("Logger2");
logger2.log('Message from logger2');

// Still not Singleton logger
console.log("Still not a Singleton logger.")
var loggerFuncB = (function () {
    var instance;
    
    return {
        getInstance: function () {
            if(!instance) {
                instance = new Logger();
            }
            return instance;
        }
    }
})();

var logger3 = loggerFuncB.getInstance();
logger3.log("Logger3");
logger3.log('Message from logger3');

var logger4 = loggerFuncB.getInstance();
logger4.log("Logger4");
logger4.log('Message from logger4');

// Not Singleton because direct instantiation creates different random numbers.
var logger5 = new Logger();
logger5.log("Logger5");
logger5.log("Message from logger5");