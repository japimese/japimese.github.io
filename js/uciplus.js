var unheight = $(window).height();
var unwidth = $(window).width();


//FUNCIONES

////deja fixed un elemento (elem) en una posicion (top)
// var quieto = function (cosa, top) {
// 	// var elem_stop = cosa.offset().top - (unheight*top/100); 
// 	$(window).scroll(function () {
// 		var elem_stop = elem.offset().top - (unheight*top/100); 

// 	    if ( $(window).scrollTop() > elem_stop ) {
// 	  //   	console.log(elem_stop + ", " + elem.offset().top + ", " + unheight + ", " + top);
// 			// console.log(elem.offset().top - unheight/2);

// 	        cosa.addClass("fixed");
// 	        cosa.css("top", top + "vh");
// 	    } else {
// 	    	cosa.removeClass("fixed");
// 	      	cosa.css("top", "initial");
// 	    }
// 	})
// }

//deja fixed un elemento (elem) en una posicion (top)
var parao = function (cosa, top, duration) {
	var elem_stop = cosa.offset().top - unheight*top/100; 
	var elem_play = elem_stop + duration*unheight/100; 

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
parao($(".propuesta_color .mockup_gif"), 7, 450 )

//titulo fixed
$(window).scroll(function () {
    if ( $(window).scrollTop() > unheight*0.6) {
        $(".front .dato-big").hide();
    } else {
      	$(".front .dato-big").show();
    }
})



//gif del mockup en la home de ucip

//cargar imagenes al ppio
// $(document).ready(function() {
// 	for (var i =0; i<145; i++) {
// 		$("#mok_1").append("<img class='mockup_in' src='../images/uciplus/nar/nar_" + i + ".jpg' />");	
// 	}
// });
// //avanzar gif en scroll
// $(window).scroll(function () {

// 	var fin = $("#frontmok .mockup_mac").offset().top + $("#frontmok .mockup_mac").height();
// 	var i = parseInt($(window).scrollTop() / 5);
	
// 	if ($(window).scrollTop() < fin ) {
// 		$("#mok_1").attr("src", "../images/uciplus/nar/nar_"+ i +".jpg");
// 	} else {
// 		$("#mok_1").attr("src", "../images/uciplus/nar/nar_0.jpg");
// 	}  
// })


//gif del mockup en la home de ucip

//cargar imagenes al ppio
// $(document).ready(function() {
// 	for (var i =0; i<145; i++) {
// 		$("#midmok .mockup_in").append("<img class='mockup_in' src='../images/uciplus/nar/nar_" + i + ".jpg' />");	
// 	}
// });
// //avanzar gif en scroll
$(window).scroll(function () {

	var ini = $("#midmok .mockup_mac").offset().top - unheight*0.4; ;
	// var fin = ini + unheight;
	var i = parseInt(($(window).scrollTop() - ini) / 2.5);
	
	if ($(window).scrollTop() > ini) {
		$("#midmok .mockup_in").attr("src", "../images/uciplus/gif_home/ucip"+ i +".jpg");
	} else {
		$("#midmok .mockup_in").attr("src", "../images/uciplus/gif_home/ucip0.jpg");
	}  
	if (i > 209)  {
		$("#midmok .mockup_in").attr("src", "../images/uciplus/gif_home/ucip209.jpg");
	}
})


//gif del mockup del mundo ucip

//cargar imagenes al ppio
$(document).ready(function() {
	for (var i =0; i<12; i++) {
		$("#mok_2").append("<img class='mockup_col' src='../images/uciplus/mundo_uciplus/mundo_uciplus_" + i + ".png' />");	
	}
});
//avanzar gif en scroll
$(document).ready(function () {
	var ini = $("#mok_2").offset().top - unheight*0.5; 
	var med = $("#mok_2").offset().top - unheight*0.1; 
	var med2 = $("#mok_2").offset().top + unheight*2.5; 
	var fin = $("#mok_2").offset().top + $(".mundo").height() + unheight;
	console.log("ini: " + ini + ", med2: " + med2 + ", fin: " + fin);
	
	$(window).scroll(function () {
		var i = parseInt(($(window).scrollTop() - ini) / 30);
		if ( ($(window).scrollTop() > ini) && ($(window).scrollTop() < med) ) {
			console.log(i);
			$("#mok_2").attr("src", "../images/uciplus/mundo_uciplus/mundo_uciplus_"+ i +".png");
		} else if ( ($(window).scrollTop() > med) && ($(window).scrollTop() < med2) ) {
			console.log(i);
			$("#mok_2").attr("src", "../images/uciplus/nar/nar_"+ i +".jpg");
		} else if ( ($(window).scrollTop() > med2) && ($(window).scrollTop() < fin) ) {
			console.log(i);
			y = i - 30;
			$("#mok_2").attr("src", "../images/uciplus/gif_usuario/mundo_uciplus_"+ y +".png");
		} else {
			console.log("else");
			$("#mok_2").attr("src", "../images//uciplus/mundo_uciplus/mundo_uciplus_0.png");
		}  
		if (y > 80)  {
			$("#mok_2").attr("src", "../images/uciplus/gif_usuario/mundo_uciplus_80.png");
		}
	})
});



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

	if (activo.data("tit") === "acc") {
		$(".puntos .titulo_med").show();
	} else {
		$(".puntos .titulo_med").hide();
	}

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

	if (activo.data("tit") === "acc") {
		$(".puntos .titulo_med").show();
	} else {
		$(".puntos .titulo_med").hide();
	}

	$(".puntos .pos span").text($(".puntos .active").data("car") + "/" + $(".ultimo").data("car"));
});



//fondo gris de propuesta UCIP

var propuesta_gris = $(".propuesta_gris").offset().top - unheight*0.30;
var propuesta_color = $(".propuesta_color").offset().top - unheight*0.60;

$(window).scroll(function () {
    if ( ($(window).scrollTop() > propuesta_gris) && ($(window).scrollTop() < propuesta_color) ) {
        $(".uciplus").addClass("fondo_gris");
    } else if ( $(window).scrollTop() > propuesta_color) {
    	$(".uciplus").removeClass("fondo_gris");
        $(".uciplus").addClass("fondo_amarillo");
    } else {
      	$(".uciplus").removeClass("fondo_amarillo fondo_gris");
    }
})

$(document).ready(function() {
	$(".propuesta_gris .mockup").click(function(){
		
		if( $(this).hasClass("ulti")) {
			$(this).hide().removeClass("active");;
			$(".propuesta_gris .pri").show().addClass("active");
		} else {
			$(this).hide().next().show();
			$(this).removeClass("active");
			$(this).next().addClass("active");
		}
	});
	$(".propuesta_gris .sig").click(function(){
		$(".propuesta_gris .mockup.active").click();
	});
});







