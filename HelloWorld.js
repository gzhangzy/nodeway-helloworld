"use strict";

class HelloWorld {
    constructor() {
        this.events = {};
        this.greeting = 'Hello World!';
    }
    on(eventName, fn) {
        this.events[eventName] = fn;
        this.constructor.prototype.emit =
        this.constructor.prototype.emit ||
        function() {
            let args = Array.from(arguments),
                fn = this.events[args.shift()];
            fn && fn.apply(this, args);
        };
    }
    welcome(callback) {
        callback(null, this.greeting);
        setInterval(() => {
            this.emit && this.emit('again', null, this.greeting);
        }, 6000);
    }
}

exports.default = HelloWorld;  // export default HelloWorld;
