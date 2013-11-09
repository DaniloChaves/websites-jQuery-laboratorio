$(document).ready(function() {
	$('.error').hide();

	$('.submit').click(function(event) {
		var data = $('.infobox').val();
		var len = data.length;

		if(len < 1) {
			$('.error').show();
			event.preventDefault(); // detiene HTTP o sea, bloquea el flujo de trabajo hasta queno ocurra lo correcto 
									// queda preguntando por la condición
		} else {
			$('.error').hide();
		}
	});
});