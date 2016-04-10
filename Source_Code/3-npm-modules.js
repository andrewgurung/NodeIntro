// require() 3rd party npm module

var request = require('request');

request('http://andrewgurung.github.io', function(error, response, body) {
  if(!error && response.statusCode === 200) {
    console.log(body);
  }
});

// Output: Return the homepage of http://andrewgurung.github.io
