var maxTime = 1000;

var evenDoubler = function(v, callback) {
  var waitTime = Math.floor(Math.random()*(maxTime+1));
  if(v%2) {
    setTimeout(function() {
      callback(new Error("Odd input"));
    }, waitTime);
  } else {
    setTimeout(function(){
      callback(null, v*2, waitTime);
    }, waitTime);
  }
};

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
  evenDoubler(i, handleRequests);
};

console.log( "----" );

/*----------------
 Output:
 -----------------
Calling evenDoubler for value: 1
Calling evenDoubler for value: 2
Calling evenDoubler for value: 3
Calling evenDoubler for value: 4
Calling evenDoubler for value: 5
----
ERROR:Odd input
ERROR:Odd input
ERROR:Odd input
The results are: 4 (876ms )
The results are: 8 (930ms )
*/
