var SymbolView = require('./views/SymbolView.js');

var init = function () {
  SymbolView.symbols.subscribe(showSymbol);
};

var showSymbol = function (symbol) {
  document.querySelector('#characterDisplay').innerHTML = symbol.toUpperCase() + ' ' + symbol.toLowerCase();
};

module.exports = {
  init: init
};
