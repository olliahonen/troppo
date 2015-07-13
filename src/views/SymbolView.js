var Rx = require('rx-lite');
var config = require('../config.js');

var keypresses = Rx.Observable.fromEvent(document.body, 'keypress');
var intentSymbols = new Rx.Subject();

var observe = function (SymbolIntent) {
  SymbolIntent.symbols.subscribe(intentSymbols);
};

var characterDisplay = intentSymbols
  .map(function (symbol) {
    return symbol.toUpperCase() + ' ' + symbol.toLowerCase();
  });

var audioPath = intentSymbols
  .map(function (symbol) {
    var artist = pickArtist();
    return 'audio/' + artist.name + '/v' + artist.version + '/' + symbolToAudioFilename(symbol) + '.wav';
  });

var pickArtist = function () {
  var artists = config.artists;
  var artistIndex = Math.floor(Math.random() * artists.length);
  return {
    name: artists[artistIndex].name,
    version: artists[artistIndex].version
  };
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
