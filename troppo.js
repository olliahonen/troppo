// Namespace
troppo = {};

troppo.audio = new Audio();

troppo.initialize = function() {
	
	// Listen to key strokes
	$(window).keypress(function(event) {
		// Show the symbol
		var inputSymbol = String.fromCharCode(event.which);
		$('#characterDisplay').html(inputSymbol.toUpperCase() + ' ' + inputSymbol.toLowerCase());

		// Play the sound
		var audio = troppo.audio;
		audio.pause();

		var audioPath = 'audio/olli/v1/' + inputSymbol + '.wav'
		try {
			audio.src = audioPath;
		} catch (exception) {
			// Pokemon!
		}
		audio.play();
	});
};
