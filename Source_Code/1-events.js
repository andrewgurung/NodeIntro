var EventEmitter = require('events').EventEmitter;

// Pattern 1: Return an EventEmitter
var getResource = function(c) {
  var e = new EventEmitter();
  process.nextTick(function() {
    var count = 0;
    e.emit('start');
    var t = setInterval(function(){
      e.emit('data', ++count);
      if(count === c) {
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
  return (e);
};

var r = getResource(5);

r.on('start', function() {
  console.log('I have started!');
});

r.on('data', function(d) {
  console.log('    I received data -> ' + d);
});


r.on('end', function(t) {
  console.log('I am done with ' + t + "data events.");
});

// Output
// ****************************/
I have started!
    I received data -> 1
    I received data -> 2
    I received data -> 3
    I received data -> 4
    I received data -> 5
I am done with 5data events.

// ****************************/
