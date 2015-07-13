var Rx = require('rx-lite');

var symbols = new Rx.Subject();

var observe = function (SymbolIntent) {
  SymbolIntent.symbols.subscribe(symbols);
};

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');

module.exports = {
  observe: observe,
  symbols: symbols,
  keypresses: keypresses
};
