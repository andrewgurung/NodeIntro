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
2. Custom Modules
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


### Using require() to Modularize Your Application
### Demo: Accessing Application Files with require()
### Finding 3rd Party Modules via NPM
### Demo: Installing and Using 3rd Party Modules
### Publishing Your Own Module, Conclusion
