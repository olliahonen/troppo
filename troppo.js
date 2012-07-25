// Namespace
troppo = {};

troppo.initialize = function() {
	
	$(window).keypress(function(event) {
		var inputSymbol = String.fromCharCode(event.which);
		$('#characterDisplay').html(inputSymbol.toUpperCase() + ' ' + inputSymbol.toLowerCase());
	});
};
