'use strict';

// var Emitter = require('./emitter'); //using the custom even emitter we made
var EventEmitter = require('events');
var eventConfig = require('./config');
var util = require('util');
// var emtr = new Emitter();
// emtr.on(eventConfig.GREET, function() {
//     console.log('Someone said hello!');
// });

// emtr.on(eventConfig.GREET, function() {
//     console.log('A greeting occured!');
// });

// emtr.emit(eventConfig.GREET);

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello World!';
    }

    greet (data) { 
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);
    }
}
var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Casey!');
