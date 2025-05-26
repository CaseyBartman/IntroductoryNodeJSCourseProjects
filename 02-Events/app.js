var Emitter = require('./emitter');

var emtr = new Emitter();
emtr.on('greet', function() {
    console.log('Someone said hello!');
});

emtr.on('greet', function() {
    console.log('A greeting occured!');
});

emtr.emit('greet');