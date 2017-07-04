var latitud;
var longitud;

$(document).ready(function() {

	navigator.geolocation.getCurrentPosition(function(position) {
		latitud = position.coords.latitude;
		longitud = position.coords.longitude;
		window.setTimeout(function() {
			console.log(latitud + ", " + longitud);
		}, 2000);
	});
	
	if ($(window).width() <= 768) {  

    	function calcVH() {
	   		$('.movil').innerHeight( $(this).innerHeight() );
		}

		calcVH();

		$(window).on('resize orientationchange', function() {
			calcVH();
		});
	}     
	

});