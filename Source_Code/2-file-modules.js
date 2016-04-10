// require() mathfun.js file
var mathfun = require('./mathfun');

// Error is the first parameter of a callback function
var handleRequests = function(err, result, time) {
  if(err) {
    console.log( "ERROR:" + err.message );
  } else {
    console.log( "The results are: " + result + " (" + time + "ms )" );
  }
};

for(var i = 1; i <= 5; i++) {
  console.log( "Calling evenDoubler for value: " + i );
  mathfun.evenDoubler(i, handleRequests);
};

console.log( "----" );

console.log( " The foo variable from mathfun = " + mathfun.foo );
console.log( " The maxTime variable from mathfun is not exported = " + mathfun.mathFun );

// Output:
/*
Calling evenDoubler for value: 1
Calling evenDoubler for value: 2
Calling evenDoubler for value: 3
Calling evenDoubler for value: 4
Calling evenDoubler for value: 5
----
 The foo variable from mathfun = bar
 The maxTime variable from mathfun is not exported = undefined
ERROR:Odd input
The results are: 8 (158ms )
ERROR:Odd input
ERROR:Odd input
The results are: 4 (857ms )
*/
