var Rx = require('rx-lite');

var symbols = null;

var observe = function (SymbolIntent) {
  this.symbols = SymbolIntent.symbols;
};

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');

module.exports = {
  observe: observe,
  symbols: symbols,
  keypresses: keypresses
};
