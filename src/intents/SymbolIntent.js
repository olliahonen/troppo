var Rx = require('rx-lite');

var symbols = new Rx.Subject();

var observe = function (SymbolView) {
  SymbolView.keypresses
    .map(function (kpEvent) {
      return String.fromCharCode(kpEvent.which).toLowerCase();
    })
    .subscribe(symbols);
};

module.exports = {
  observe: observe,
  symbols: symbols
};
