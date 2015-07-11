var config = require('./config.js');
var SymbolView = require('./views/SymbolView.js');

var audio = null;

var init = function () {
  audio = new Audio();
  SymbolView.symbols.subscribe(playSound)
};

var playSound = function (symbol) {
  if (!audio.error && !audio.ended && audio.src) {
    // Still playing, abort
    return;
  }

  audio.pause();

  try {
    audio.src = createAudioPath(symbol);
  } catch (exception) {
    // Pokemon!
  }
  audio.play();
};

var createAudioPath = function (symbol) {
  var artists = config.artists;
  // Pick artist
  var artistIndex = Math.floor(Math.random() * artists.length);
  var artistName = artists[artistIndex].name;
  var artistVersion = artists[artistIndex].version;

  return 'audio/' + artistName + '/v' + artistVersion + '/' + symbolToAudioFilename(symbol) + '.wav';
};

var symbolToAudioFilename = function (symbol) {
  if (symbol === 'å') {
    return 'a-ring';
  }
  if (symbol === 'ä') {
    return 'a-uml';
  }
  if (symbol === 'ö') {
    return 'o-uml';
  }
  return symbol;
};

module.exports = {
  init: init
};
