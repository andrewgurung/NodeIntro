## Events and Streams

### Events and the EventEmitter class
- Non-blocking doesn't always mean callbacks

Consider Callbacks:
- Request/Reply model
- No results until all results. Callback isn't called until all items are ready
- Either error or results

```js
getThem(param, function(err, items) {
  // check for error
  // operate on items
});
```

Consider Events:
- Publish/Subscribe model
- Act on results as they arrive
- Partial results before error

```js
// `getThem(..)` returns an object of EventEmitter class
// This `results` object has an `on` function
var results = getThem(param);

// For each `item` event, execute the function(){..}
results.on('item', function(i) {
  // do something with this one item
});

// For `done` event, when there are no more items
results.on('done', function(){
  // No more items
});

// If there is an `error`, invoke this function by passing the `err`
results.on('error', function(err) {
  // React to error
});
```

#### Node's `EventEmitter` class
- Provides a construct to build event driven interfaces
- Consists of:
  - The publisher: `emitter.emit(event, [args])`
  - The subscriber: `emitter.on(event, listener)`
- The `event` can be any string. Eg: item, done, error
- The publisher event can emit zero or more arguments

Common patterns for EventEmitter:
1. Returning an EventEmitter from a function
2. Objects that extend EventEmitter to emit events themselves

### Demo: Returning an EventEmitter from a function
Refer: `Source_Code/1-events.js`

### Demo: Inheriting from EventEmitter
### Readable and Writable Streams, the Pipe function
### Demo: Readable and Writable Streams
### Demo: Piping Between Streams
### Conclusion
