$(document).ready(function() {
	$('.error').hide();
	$('.submit').click(function(event) {
		var data = $('.infobox').val();
		if (validate_phoneno(data)) {
			$('.error').hide();
		} else {
			$('.error').show();
			event.preventDefault(); // aquí detiene HTTP y se queda en espera 
			// de que se ingresen datos correctos.
		}
	});
});

function validate_phoneno(ph) {
	var pattern = new RegExp(/^[0-9-+]+$/);   // este es un objeto de JavaScript
	/* var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/); */
	return pattern.test(ph);
}
