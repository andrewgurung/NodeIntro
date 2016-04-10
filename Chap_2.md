## Modules, require() and NPM

### Introduction, Accessing Built-in Modules

#### Using modules in your application

1. Modules can export variables including functions
2. Modules can export objects which can be instantiated
3. Modules can export a single variable/function from a large module

```js
//1. Modules can export variables including functions
var foo = require('foo');

var f = 2 + foo.alpha;  // variable
var b = foo.beta() + 3; // function

// 2. Modules can export objects which can be instantiated
var Bar = require('bar'); // First letter is capitalized `Bar`
var bar = new Bar();

// 3. Modules can export a single variable/function from a large module
var justOne = require('largeModule').justOne;
console.log( justOne() );
```

#### Three sources of Node Modules
1. Built-in Modules
2. Custom Modules (Your Project's files)
3. 3rd Party Modules

### Built-in Modules
- Come pre-packaged with Node
- Required with string identifier
- Sample: fs, http, crypto, os

#### Demo: Accessing Built-in Modules
- Using Built-in Node's `os` module

```js
// Require Built-in 'os' node module
var os = require('os');

// Convert to Megabyte
var toMB = function(f) {
  return (Math.round((f/1024/1024)*100)/100);
};

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMB(os.freemem()) + ' of ' + toMB(os.totalmem()) + ' MB free');

// Output
/*
Host: Andrews-MBP.fios-router.home
15 min. load average: 1.33984375
1653.07 of 8192 MB free
*/
```

### Custom Modules (Your Project's files)
- Using require() to Modularize Your Application
- Each .js file is its own module which can be exported
- Each file is `require()'d` with file system-like semantic
  - Same directory: `var data = require('./data');`
  - Other sub directory: `var foo = require('./other/foo');`
  - Up and over other directory: `var bar = require('../lib/bar');`

#### Variables are marked for export via `module.exports`
```js
var count = 2;
var doIt = function(){ };

module.exports.doIt = doIt;
module.exports.greeting = 'Hello World';
```

### Demo: Accessing Application Files with require()

1. mathfun.js:
  - Export `evenDoubler` and `foo`
  - `maxTime` is not exported

  ```js
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

  module.exports.evenDoubler = evenDoubler;
  module.exports.foo = 'bar';
  ```

2. 2-file-modules.js

  - Import `mathFun.js` file
  - `evenDoubler` and `foo` are imported
  - `maxTime` is not imported. Hence results in `undefined`

  ```js
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

  ```

### Finding 3rd Party Modules via NPM
### Demo: Installing and Using 3rd Party Modules
### Publishing Your Own Module, Conclusion
