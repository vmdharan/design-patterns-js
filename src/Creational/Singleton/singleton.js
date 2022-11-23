// Singleton logger
console.log("Singleton logger.")
var singletonLogger = (function () {
    var instance;

    class Logger {
        constructor() {
            this.randomNumber = Math.random();
        }
    
        log(message) {
            console.log("Logger id: ", this.randomNumber, message);
        }
    };
    
    return {
        getInstance: function () {
            if(!instance) {
                instance = new Logger();
            }
            return instance;
        }
    };
})();

var logger1 = singletonLogger.getInstance();
logger1.log("Logger1");
logger1.log('Message from logger1');

var logger2 = singletonLogger.getInstance();
logger2.log("Logger2");
logger2.log('Message from logger2');
