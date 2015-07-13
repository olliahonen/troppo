var howler = require('howler');
var SymbolView = require('./views/SymbolView.js');

var init = function () {
  SymbolView.audioPath.subscribe(playSound);
};

var playSound = function (path) {
  (new howler.Howl({urls: [path]})).play();
};

module.exports = {
  init: init
};
