// Namespace
troppo = {};

troppo.initialize = function() {
	
	// Listen to key strokes
	$(window).keypress(function(event) {
		var inputSymbol = String.fromCharCode(event.which);
		$('#characterDisplay').html(inputSymbol.toUpperCase() + ' ' + inputSymbol.toLowerCase());
	});
};
