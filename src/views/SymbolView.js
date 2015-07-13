var Rx = require('rx-lite');

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');

var symbols = new Rx.Subject();

var characterDisplay = new Rx.Subject();

var observe = function (SymbolIntent) {
  SymbolIntent.symbols.subscribe(symbols);
  SymbolIntent.symbols
    .map(function (symbol) {
      return symbol.toUpperCase() + ' ' + symbol.toLowerCase();
    })
    .subscribe(characterDisplay);
};

module.exports = {
  observe: observe,
  symbols: symbols,
  keypresses: keypresses,
  characterDisplay: characterDisplay
};
