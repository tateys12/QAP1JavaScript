const EventEmitter = require('events');

var eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (msg) => {
  console.log(msg);
});

eventEmitter.emit('myEvent', 'First Event');

// Additional events and listeners
eventEmitter.on('anotherEvent', () => {
  console.log('Another event occurred');
});

eventEmitter.emit('anotherEvent');
