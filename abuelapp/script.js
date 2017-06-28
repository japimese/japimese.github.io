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
	
});