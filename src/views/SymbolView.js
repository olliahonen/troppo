var Rx = require('rx-lite');

var symbols = null;

var observe = function (SymbolIntent) {
  this.symbols = SymbolIntent.symbols; // TODO check `this` usage
};

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');

module.exports = {
  observe: observe,
  symbols: symbols,
  keypresses: keypresses
};
