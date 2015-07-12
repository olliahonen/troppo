var symbols = null; // TODO: initialize to an observer or sth

var observe = function (SymbolView) {
  this.symbols = SymbolView.keypresses
    .map(function (kpEvent) {
      return String.fromCharCode(kpEvent.which).toLowerCase();
    });
};

module.exports = {
  observe: observe,
  symbols: symbols
};
