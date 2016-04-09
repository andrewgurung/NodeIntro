## Getting Started with Node.js

### Getting Node.js
- Downloading installers or binaries
  - https://nodejs.org/en/download/
- Build from source code
- For OSX and Linux environment, manage multiple version using `nvm` tool

### Node Version Manager `nvm`
```shell
## Manual install
$ git clone https://github.com/creationix/nvm.git ~/nvm

## Use `source` command load function file(nvm.sh) into the command prompt
$ . ~/nvm/nvm.sh

## Test nvm
$ nvm

## Install multiple versions of node
$ nvm install v4.4.2
$ nvm install v5.10.1

## List installed node versions
$ nvm ls

## Display current version
$ node -v

## Switch node version
$ nvm use v4.2.2

## Alias default
$ nvm alias default v5.10.1

## Run node (Enters REPL[Read Eval Print Loop] Terminal)
$ node
> console.log("Node Intro");
Hello World
undefined
>
(^C again to quit)
>
##
```

### A simple web server
- Save the following file in server.js
- Then run `$ node server.js`
- Open `http://127.0.0.1:1337` in browser

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node Intro\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
### Node's Event Loop
- Node brings the key concept of `Event Loop` from browser
- Browsers constantly listen for DOM events such as mouse clicks
- Similarly Node's event loop is listening for events on server side
  - External http request
  - timers
  - internal events such as open a file
- Node implements a non-blocking event driven approach
- Different from traditional server side programming model, which requires multiple threads to achieve such concurrency

### Writing asynchronous code

- A typical approach which is blocking
```js
var conn = getDbConnection(connectionString);
var stmt = conn.createStatement();
var results = stmt.executeQuery(sqlQuery);
for (var i = 0; i < results.length; i++) {
  // print results[i];
}
```

- An asynchronous "non-blocking" approach uses function callbacks so that node doesn't have to wait (Eg: when getting database connection)
```js
getDbConnection(connectionString, function(err, conn) {
  conn.createStatement(function(err, stmt) {
    var results = stmt.executeQuery(sqlQuery);
    results.on('row', function(result) {
      // print result
    });
  });
});
```

### Convention for asynchronous functions with callbacks
- Callback is the last parameter in async function call


getStuff(inputParam, handleRequests);
