## Modules, require() and NPM

### Introduction, Accessing Built-in Modules
Using modules in your application
1. Modules can export variables including functions
2. Modules can export objects which can be instantiated
3. Modules can export a single variable/function from a large module

 ```js
 // 1. Modules can export variables including functions
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

### Demo: Accessing Built-in Modules
### Using require() to Modularize Your Application
### Demo: Accessing Application Files with require()
### Finding 3rd Party Modules via NPM
### Demo: Installing and Using 3rd Party Modules
### Publishing Your Own Module, Conclusion
