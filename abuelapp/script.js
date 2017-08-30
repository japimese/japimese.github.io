var latitud;
var longitud;
var alto;

// function calcVH() {
// 	alto = document.documentElement.clientHeight;
// 	console.log("js = " + alto);
// 	$('.movil').css("height", alto);
// }

$(document).ready(function() {

	navigator.geolocation.getCurrentPosition(function(position) {
		latitud = position.coords.latitude;
		longitud = position.coords.longitude;
		// window.setTimeout(function() {
		// 	console.log(latitud + ", " + longitud);
		// }, 2000);
	});
	
	// if ($(window).width() <= 768) {  
	// 	calcVH();

	// 	$(window).on('resize orientationchange hashchange', function() {
	// 		calcVH();
	// 	});
	// }     
	var izda;
	var dcha;

		$(document).on("input" , ".mano", function() {
			
			var mano = $(".mano").val();
			console.log(mano);

			if (mano < 10) {
				izda = 1;
			} else if (mano > 90) {
				dcha = 1;
			}
			if (izda && dcha) {
				window.setTimeout(function() {
					$(".logo_home").attr("src", "images/app_consejo.png");
					$(".salir").show();
					$(".adios").hide();
				}, 700);

				window.setTimeout(function() {
					window.location.replace("#/consejo");
					$("#mano_click").click();
					console.log("click");
					calcVH();
				}, 2500);
			}
		});

});