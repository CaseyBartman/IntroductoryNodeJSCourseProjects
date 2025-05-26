// function Emitter() {
//     this.events = {};
//     //prop: [];
// }

// //Creating an 'on' function that is given a type and listener
// //Creates a new property on the object, makes sure its an array, then adds functions (the listener) to each one
// Emitter.prototype.on = function(type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
// }

// //Emitting an event
// Emitter.prototype.emit = function(type) {
//     if(this.events[type]) {
//         this.events[type].forEach(function(listener) {
//             listener();
//         }
//     )}
// }

// module.exports = Emitter;