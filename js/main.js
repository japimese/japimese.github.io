var unheight = $(window).height();
var unwidth = $(window).width();


// SCROLL

$(".esp").click(function() {
	$('html,body').animate({scrollTop: unheight}, 'slow'); 
});

$(".dos, .tres, .cuatro").click(function() {
	var scrolltop = $(window).scrollTop();
	$('html,body').animate({scrollTop: scrolltop + unheight*1.1}, 'slow'); 
});


    // if ($(window).scroll()) {
    // 	var top = $(window).scrollTop();
    //     console.log($(window).scrollTop());
    // 	// console.log(($(window).scrollTop()/unheight) - (parseInt($(window).scrollTop()/unheight)));
    // 	// if ( ((top/unheight) - (parseInt(top/unheight))) > 0.8) {
    // 		// console.log("subiendo: " + ((top/unheight) - (parseInt(top/unheight))));
    // 		// $('html,body').animate({scrollTop: $("section").offset()}, 'slow'); 

    // 	// } else if ( ((top/unheight) - (parseInt(top/unheight))) < 0.2) {
    // 	// 	console.log("bajando: " + ((top/unheight) - (parseInt(top/unheight))));
    // 	// 	$('html,body').animate({scrollTop: (parseInt(top/unheight)*unheight - unheight)}, 'slow'); 
    //  //    }
    // }






// PORFOLIO


$(".trabajo").click(function() {
	$(this).addClass("selected");
    $(this).removeClass("trabajo");
	$(this).siblings().hide();
	$(".cerrar").show();
});

$(".cerrar").click(function() {
    $(".selected").addClass("trabajo");
	$(".selected").removeClass("selected");
	$(this).hide();
	$(".trabajo").show();
});

//UCIPLUS MOCKUP

$(".mockup_canal li").click(function() {
	var up = $(this).data("img");

	$(".mockup_fondo img").attr("src", "images/nueva_uciplus_" + up + ".jpg");
    $(".mockup_fondo").scrollTop(0);
	$(this).html("&#9702;").siblings().html("&#8226;");
});




var clicked = false, clickX;
$(window).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
        //console.log(clickX);
    },
    'mousedown': function(e) {
        clicked = true;
        clickX = e.pageX;
    },
    'mouseup': function() {
        clicked = false;
        $(".selected").css('cursor', '-webkit-grab');
    }
});

var updateScrollPos = function(e) {
    $(".selected").css('cursor', '-webkit-grabbing');
    $(".porfolio").scrollLeft($(".porfolio").scrollLeft() + (clickX - e.pageX)*0.1);
}




// MAIL


var mailtop = $(".email").offset().top - unheight*0.50;

$(window).scroll(function () {
    if ( $(window).scrollTop() > mailtop ) {
        $(".email").addClass("email_fixed");
    } else {
      	$(".email").removeClass("email_fixed");
    }
})

// $(".email").click(function() {
// 	$(this).toggleClass("mail-click");
// 	$(".mail_content").toggleClass("mail_content-click");
// 	if ($(this).html() === "@") {
// 		$(this).html("X");
// 	} else {$(this).html("@");}
// });



//apuela

// $(".appuela > div").click(function() {

// 	$(this).hide().next().show();
// });







// function isElementVisible(elementToBeChecked, delay) {
//     var TopView = $(window).scrollTop();
//     var BotView = TopView + $(window).height();
//     var TopElement = $(elementToBeChecked).offset().top + delay;
//     var BotElement = TopElement + $(elementToBeChecked).height();
//     return ((BotElement <= BotView) && (TopElement >= TopView));
// }