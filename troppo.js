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

	var artist = 'olli';
	if (Math.random() > 0.5) {
		artist = 'alvar';
	}
	var audioPath = 'audio/' + artist + '/v1/' + symbol + '.wav';
	try {
		audio.src = audioPath;
	} catch (exception) {
		// Pokemon!
	}
	audio.play();
};
