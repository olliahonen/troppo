(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.artists = [
	{name: 'alvar', version: 1},
	{name: 'olli', version: 1}
];

},{}],2:[function(require,module,exports){
var config = require('./config.js');

var troppo = {};

troppo.audio = null;

troppo.showSymbol = function(symbol) {
	$('#characterDisplay').html(symbol.toUpperCase() + ' ' + symbol.toLowerCase());
};

troppo.playSound = function(symbol) {
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

troppo.createAudioPath = function(symbol) {
	var artists = config.artists;
	// Pick artist
	var artistIndex = Math.floor(Math.random() * artists.length);
	var artistName = artists[artistIndex].name;
	var artistVersion = artists[artistIndex].version;

	return 'audio/' + artistName + '/v' + artistVersion + '/' + troppo.symbolToAudioFilename(symbol) + '.wav';
};

troppo.symbolToAudioFilename = function(symbol) {
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

},{"./config.js":1}]},{},[2]);