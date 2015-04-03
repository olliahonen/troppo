var config = require('./config.js');

var troppo = {};

troppo.audio = null;

troppo.showSymbol = function (symbol) {
  document.querySelector('#characterDisplay').innerHTML = symbol.toUpperCase() + ' ' + symbol.toLowerCase();
};

troppo.playSound = function (symbol) {
  var audio = troppo.audio;

  if (!audio.error && !audio.ended && audio.src) {
    // Still playing, abort
    return;
  }

  audio.pause();

  try {
    audio.src = troppo.createAudioPath(symbol);
  } catch (exception) {
    // Pokemon!
  }
  audio.play();
};

troppo.createAudioPath = function (symbol) {
  var artists = config.artists;
  // Pick artist
  var artistIndex = Math.floor(Math.random() * artists.length);
  var artistName = artists[artistIndex].name;
  var artistVersion = artists[artistIndex].version;

  return 'audio/' + artistName + '/v' + artistVersion + '/' + troppo.symbolToAudioFilename(symbol) + '.wav';
};

troppo.symbolToAudioFilename = function (symbol) {
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

window.onload = function () {
  troppo.audio = new Audio();
  
  // Listen to key strokes
  $(window).keypress(function (event) {
    var inputSymbol = String.fromCharCode(event.which).toLowerCase();
    troppo.showSymbol(inputSymbol);
    troppo.playSound(inputSymbol);
  });
};
