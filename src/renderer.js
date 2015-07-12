var SymbolView = require('./views/SymbolView.js');

var element = document.querySelector('#characterDisplay');

var init = function () {
  SymbolView.symbols.subscribe(showSymbol);
};

var showSymbol = function (symbol) {
  element.innerHTML = symbol.toUpperCase() + ' ' + symbol.toLowerCase();
};

module.exports = {
  init: init
};
