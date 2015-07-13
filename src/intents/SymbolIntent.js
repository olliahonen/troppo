var Rx = require('rx-lite');

var keypressesInput = new Rx.Subject();

var observe = function (SymbolView) {
  SymbolView.keypresses.subscribe(keypressesInput);
};

var symbols = keypressesInput
  .map(function (kpEvent) {
    return String.fromCharCode(kpEvent.which).toLowerCase();
  });

module.exports = {
  observe: observe,
  symbols: symbols
};
