var unheight = $(window).height();
var unwidth = $(window).width();


//FUNCIONES

//deja fixed un elemento (elem) en una posicion (top)
var quieto = function (elem, top) {
	var elem_stop = elem.offset().top - (unheight*top/100); 
	$(window).scroll(function () {
		// var elem_stop = elem.offset().top - (unheight*top/100); 

	    if ( $(window).scrollTop() > elem_stop ) {
	  //   	console.log(elem_stop + ", " + elem.offset().top + ", " + unheight + ", " + top);
			// console.log(elem.offset().top - unheight/2);

	        elem.addClass("fixed");
	        elem.css("top", top + "vh");
	    } else {
	    	elem.removeClass("fixed");
	      	elem.css("top", "initial");
	    }
	})
}

//deja fixed un elemento (elem) en una posicion (top)
var parao = function (elem, top, duration) {
	var elem_stop = elem.offset().top - unheight*top/100; 
	var elem_play = elem_stop + duration; 

	$(window).scroll(function () {
	    if ( (elem_stop < $(window).scrollTop()) && ($(window).scrollTop() < elem_play) ) {
	        elem.addClass("fixed");
	        elem.css("top", top + "vh");
	    } else {
	    	elem.removeClass("fixed");
	      	elem.css("top", "initial");
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

//minimokup de detalles

$(".puntos ul li").click(function() {
	var mok = "#" + $(this).data("image");

	$(mok).addClass("active");
	$(mok).siblings().removeClass("active");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");

});

//fondo amarillo de propuesta UCIP

var propuesta = $(".propuesta_color").offset().top - unheight*0.60;

$(window).scroll(function () {
    if ( $(window).scrollTop() > propuesta) {
        $("#uciplus").addClass("fondo-verde");
    } else {
      	$("#uciplus").removeClass("fondo-verde");
    }
})

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
if($(window).innerWidth() > 768) {
   quieto($("#mock_detalles"), 12);
} else {
   quieto($("#mock_detalles"), 6);
   quieto($(".puntos"), 50);
}


//parao($("#frontmok img"), 10, 300);






