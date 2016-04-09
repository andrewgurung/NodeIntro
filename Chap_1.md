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
