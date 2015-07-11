var config = require('./config.js');
var renderer = require('./renderer.js');
var player = require('./player.js');
var SymbolView = require('./views/SymbolView.js');
var SymbolIntent = require('./intents/SymbolIntent.js');

var printVersion = function () {
  if (window.console && window.console.log) {
    console.log('Troppo - version ' + config.version);
  }
};

window.onload = function () {
  SymbolIntent.observe(SymbolView);
  SymbolView.observe(SymbolIntent);

  renderer.init();
  player.init();

  printVersion();
};
