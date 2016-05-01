var Resource = require('./resource.js');

var r = new Resource(5);

r.on('start', function() {
  console.log('I have started!');
});

r.on('data', function(d) {
  console.log('    I received data -> ' + d);
});


r.on('end', function(t) {
  console.log('I am done with ' + t + " data events.");
});

// Output
/****************************
I have started!
    I received data -> 1
    I received data -> 2
    I received data -> 3
    I received data -> 4
    I received data -> 5
I am done with 5 data events.

***************************/
