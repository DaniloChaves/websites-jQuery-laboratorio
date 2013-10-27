$(document).ready(function(){
	// ----------------------------------------------
	// elementos ocultos inicialmente
	$('#borrarDesorden').hide();

	$('#probarToggle').hide();
	// ----------------------------------------------
	// aplicando estilo CSS desde javaScript
	$('h1').css({
		'color': '#454657',
		'font-size': '88px',
		'font-family': 'Marvel', 
	});
	$('h2').css({
		'color': '#e58b24',
	});
		$('h3').css({
		'color': '#454657',
	});
	// esta es una manera lenta de hacer cambios en el css
	// no es aconsejable que se implemente 

	// aplicando clase 'colores' del documento 'boton.css'
	$('section').addClass('colores');

	// alicando clase a 'animacion'+
	$('#animaciones').addClass('animacion');

	// quitando estilos a través de jQuery
	$('#quitarClase').click(function(event){
		$('section').removeClass('colores').removeattr('class');
	});
});