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

// emtr.emit(eventConfig.GREET);s

function Greetr() {
    this.greeting = 'Hello World!';
}

//Here, we are making it so that any objects created from Greetr also have access to anything in EventEmmitter!
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) { 
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Casey!');
