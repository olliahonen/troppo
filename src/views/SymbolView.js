var Rx = require('rx-lite');

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');

var symbols = new Rx.Subject();

var observe = function (SymbolIntent) {
  SymbolIntent.symbols.subscribe(symbols);
};

module.exports = {
  observe: observe,
  symbols: symbols,
  keypresses: keypresses
};
