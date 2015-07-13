var Rx = require('rx-lite');
var config = require('../config.js');

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');
var characterDisplay = new Rx.Subject();
var audioPath = new Rx.Subject();

var observe = function (SymbolIntent) {
  SymbolIntent.symbols
    .map(createAudioPath)
    .subscribe(audioPath);

  SymbolIntent.symbols
    .map(function (symbol) {
      return symbol.toUpperCase() + ' ' + symbol.toLowerCase();
    })
    .subscribe(characterDisplay);
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
  observe: observe,
  keypresses: keypresses,
  characterDisplay: characterDisplay,
  audioPath: audioPath
};
