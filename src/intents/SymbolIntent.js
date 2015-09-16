var Rx = require('rx-lite');

var keypressesInput = new Rx.Subject();
var maximumFrequency = new Rx.Observable.interval(530);

var observe = function (SymbolView) {
  SymbolView.keypresses.subscribe(keypressesInput);
};

var symbols = maximumFrequency
  .sample(keypressesInput)
  .withLatestFrom(keypressesInput, function (i, kpEvent) {
    return kpEvent;
  })
  .map(function (kpEvent) {
    return String.fromCharCode(kpEvent.which).toLowerCase();
  });

module.exports = {
  observe: observe,
  symbols: symbols
};
