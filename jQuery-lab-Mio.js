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
		'font-family': 'Marvel'
	});

	// esta es una manera lenta de hacer cambios en el css
	// no es aconsejable que se implemente 

	// aplicando clase 'colores' desde el documento 'boton.css'
	$('section').addClass('colores');

	// alicando clase a 'animacion' por CSS3 a un div con id
	$('#animaciones').addClass('animacion');

	// quitando estilos a través de jQuery
	$('#quitarClase').click(function(event){
		$('section').removeClass('colores').removeAttr('class');
	});

	// Agregando clase para el elemento que se retiró
	$('#ponerClase').click(function('event') {
		$('section').addClass('colores');
	})

	// Ocultando el mismo elemento y cabiando elementos de mi sitio
	$('#ocultarBoton').click(function(){
		$(this).hide('slow', function(){
			$('#quitarClase, #ponerClase, .animacion p').css({
				'color':'#e62cd6',
				'font-size': '66px'
			})
		if($('#borrarDesorden').is(':hidden')){
			$('$borrarDesorden').show();
		} else {
			$('#borrarDesorden').hide();
		}
		});
	});

	// Ocultar varios elementos a partir de un elemento que estaba oculto
	$('#borrarDesorden').click(function(event){
		$('#botonesParaOcultar, #animaciones').hide();
		$(this).hide('slow/400/fast', function(){
			$('#probarToggle').show():
			$('<br /><div id="modificarContenido">'+
				'<a class="boton">Agregado elementos</a>'+
				'</div>').appendTo('#elementoAgregado');
		});
	}); 
});