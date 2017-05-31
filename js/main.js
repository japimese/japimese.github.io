var unheight = $(window).height();
var unwidth = $(window).width();


//FUNCIONES

//deja fixed un elemento (elem) en una posicion (top)
var quieto = function (cosa, top) {
	var elem_stop = cosa.offset().top - (unheight*top/100); 
	$(window).scroll(function () {
		// var elem_stop = elem.offset().top - (unheight*top/100); 

	    if ( $(window).scrollTop() > elem_stop ) {
	  //   	console.log(elem_stop + ", " + elem.offset().top + ", " + unheight + ", " + top);
			// console.log(elem.offset().top - unheight/2);

	        cosa.addClass("fixed");
	        cosa.css("top", top + "vh");
	    } else {
	    	cosa.removeClass("fixed");
	      	cosa.css("top", "initial");
	    }
	})
}

//deja fixed un elemento (elem) en una posicion (top)
var parao = function (cosa, top, duration) {
	var elem_stop = cosa.offset().top - unheight*top/100; 
	var elem_play = elem_stop + duration; 

	$(window).scroll(function () {
	    if ( (elem_stop < $(window).scrollTop()) && ($(window).scrollTop() < elem_play) ) {
	        cosa.addClass("fixed");
	        cosa.css("top", top + "vh");
	    } else {
	    	cosa.removeClass("fixed");
	      	cosa.css("top", "initial");
	    }
	})
}

//titulo fixed
$(window).scroll(function () {
    if ( $(window).scrollTop() > unheight*0.6) {
        $(".front .dato-big").hide();
    } else {
      	$(".front .dato-big").show();
    }
})



//slider detalles

$(".puntos .pos").click(function() {
	// debugger;
	var activo = $(".puntos .active");
	var prox = $(".puntos .active").next();
	var mok = "#" + prox.data("image");


	if (activo.hasClass("ultimo")) {
		$(".puntos .active").removeClass("active");
		$(".puntos .primero").addClass("active");
	} else {
		$(".puntos .active").removeClass("active");
		prox.addClass("active");
	}

	$(mok).addClass("active");
	$(mok).siblings().removeClass("active");

	$(".puntos .pos span").text($(".puntos .active").data("car") + "/" + $(".ultimo").data("car"));
});

$(".puntos .prev").click(function() {
	// debugger;
	var activo = $(".puntos .active");
	var prev = $(".puntos .active").prev();
	var mok = "#" + prev.data("image");

	if (activo.hasClass("primero")) {
		$(".puntos .active").removeClass("active");
		$(".puntos .ultimo").addClass("active");
	} else {
		$(".puntos .active").removeClass("active");
		prev.addClass("active");
	}

	$(mok).addClass("active");
	$(mok).siblings().removeClass("active");
	$(".puntos .pos span").text($(".puntos .active").data("car") + "/" + $(".ultimo").data("car"));
});



//fondo gris de propuesta UCIP

var propuesta_gris = $(".propuesta_gris").offset().top - unheight*0.30;
var propuesta_color = $(".propuesta_color").offset().top - unheight*0.60;

$(window).scroll(function () {
    if ( ($(window).scrollTop() > propuesta_gris) && ($(window).scrollTop() < propuesta_color) ) {
        $("#uciplus").addClass("fondo_gris");
    } else if ( $(window).scrollTop() > propuesta_color) {
    	$("#uciplus").removeClass("fondo_gris");
        $("#uciplus").addClass("fondo_amarillo");
    } else {
      	$("#uciplus").removeClass("fondo_amarillo fondo_gris");
    }
})


//fondo amarillo de propuesta UCIP



// $(window).scroll(function () {
//     if ( $(window).scrollTop() > propuesta_color) {
//         $("#uciplus").addClass("fondo_amarillo");
//     } else {
//       	$("#uciplus").removeClass("fondo_amarillo");
//     }
// })

//gif del mockup en la home de ucip
$(document).ready(function() {
	for (var i =0; i<233; i++) {
		$("#mok_1").append("<img class='mockup_in' src='images/nar/nar_" + i + ".jpg' />");	
	}
});





$(window).scroll(function () {
	//var frame = 900/232;
	var i = parseInt($(window).scrollTop() / 4);
	if ($(window).scrollTop() < 900 ) {
		$("#mok_1").attr("src", "images/nar/nar_"+ i +".jpg");
		//$("#mok_1").parent().append("<img class='mockup_in' src='images/nar/nar_" + i + ".jpg' />");
	} else {
		$("#mok_1").attr("src", "images/nar/nar_0.jpg");
	}
    
})
// $(window).scroll(function () {
// 	var i =  parseInt(($(window).scrollTop() - $(".propuesta_color img").offset().top - unheight*0.3) / 4);
// 	if (($(window).scrollTop() > $(".propuesta_color img").offset().top - unheight*0.3 ) && ($(window).scrollTop() < $(".propuesta_color img").offset().top + unheight)) {
// 		// debugger;
// 		$("#mok_2").attr("src", "images/home/ucip"+ i +".jpg");
// 		//$("#mok_2").parent().append("<img class='mockup_in' src='images/nar/nar_" + i + ".jpg' />");
// 	} else {
// 		$("#mok_2").attr("src", "images/home/ucip0.jpg");
// 	}
    
// })
// if($(window).innerWidth() > 768) {
//    quieto($("#mock_detalles"), 12);
//    quieto($(".caja"), 10);
// } else {
//    quieto($("#mock_detalles"), 6);
//    quieto($(".puntos"), 50);
// }


//parao($("#frontmok img"), 10, 300);






