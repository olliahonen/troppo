var troppo = window.troppo;

troppo.audio = null;

troppo.initialize = function() {

	troppo.audio = new Audio();
	
	// Listen to key strokes
	$(window).keypress(function(event) {
		var inputSymbol = String.fromCharCode(event.which);
		troppo.showSymbol(inputSymbol);
		troppo.playSound(inputSymbol);
	});
};

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
		audio.src = troppo.createAudioPath() + '/' + symbol + '.wav';
	} catch (exception) {
		// Pokemon!
	}
	audio.play();
};

troppo.createAudioPath = function() {
	var artists = troppo.artists;
	// Pick artist
	var artistIndex = Math.floor(Math.random() * artists.length);
	var artistName = artists[artistIndex].name;
	var artistVersion = artists[artistIndex].version;

	return 'audio/' + artistName + '/v' + artistVersion;
};
