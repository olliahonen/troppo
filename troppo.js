// Namespace
troppo = {};

troppo.audio = null;

troppo.initialize = function() {

	troppo.audio = new Audio();
	
	// Listen to key strokes
	$(window).keypress(function(event) {
		// Show the symbol
		var inputSymbol = String.fromCharCode(event.which);
		$('#characterDisplay').html(inputSymbol.toUpperCase() + ' ' + inputSymbol.toLowerCase());

		// Play the sound
		var audio = troppo.audio;
		audio.pause();

		var artist = 'olli';
		if (Math.random() > 0.5) {
			artist = 'alvar';
		}
		var audioPath = 'audio/' + artist + '/v1/' + inputSymbol + '.wav'
		try {
			audio.src = audioPath;
		} catch (exception) {
			// Pokemon!
		}
		audio.play();
	});
};
