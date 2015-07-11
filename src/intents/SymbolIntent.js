var symbols = null;

var observe = function (SymbolView) {
  this.symbols = SymbolView.keypresses // TODO check `this` usage
    .map(function (kpEvent) {
      return String.fromCharCode(kpEvent.which).toLowerCase();
    });
};

module.exports = {
  observe: observe,
  symbols: symbols
};
