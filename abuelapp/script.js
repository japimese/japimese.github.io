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


//geolocalizacion

var apiGeolocationSuccess = function(position) {
	latitud = position.coords.latitude;
	longitud = position.coords.longitude;
    console.log("API geolocation success!\n\nlat = " + latitud + "\nlng = " + longitud);
};

var tryAPIGeolocation = function() {
    jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function(success) {
        apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
	})
  .fail(function(err) {
    console.log("API Geolocation error! \n\n"+err);
  });
};

var browserGeolocationSuccess = function(position) {
    console.log("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
};

var browserGeolocationFail = function(error) {
  switch (error.code) {
    case error.TIMEOUT:
      console.log("Browser geolocation error !\n\nTimeout.");
      break;
    case error.PERMISSION_DENIED:
      if(error.message.indexOf("Only secure origins are allowed") == 0) {
        tryAPIGeolocation();
      }
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Browser geolocation error !\n\nPosition unavailable.");
      break;
  }
};

var tryGeolocation = function() {
  	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
	        browserGeolocationSuccess,
	      	browserGeolocationFail,
	      	{maximumAge: 20000, timeout: 10000, enableHighAccuracy: false}
	    );
  	}
};

tryGeolocation();