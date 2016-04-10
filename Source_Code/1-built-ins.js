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
