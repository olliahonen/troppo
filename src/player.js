var SymbolView = require('./views/SymbolView.js');

var audio = null;

var init = function () {
  audio = new Audio();
  SymbolView.audioPath.subscribe(playSound);
};

var playSound = function (path) {
  if (!audio.error && !audio.ended && audio.src) {
    // Still playing, abort
    return;
  }

  audio.pause();

  try {
    audio.src = path;
  } catch (exception) {
    // Pokemon!
  }
  audio.play();
};

module.exports = {
  init: init
};
