var unheight = $(window).height();
var unwidth = $(window).width();

//iluminar

console.log("hola");

$(".abuelapp").scroll(function () { 
    var paso_active = $(".active");
    var ini = paso_active.offset().top - unheight*0.7;
    var fin = ini + unheight*0.5;

    console.log("scroll");

    if($(window).scrollTop() < $(".pri").offset().top ) {
        console.log("prepri");
        $(".pri").addClass("active").siblings().removeClass("active");
    } else if ($(window).scrollTop() > fin)  {
        paso_active.removeClass("active").next().addClass("active");
        console.log("in");

    } else if ($(window).scrollTop() < ini) {
        paso_active.removeClass("active").prev().addClass("active");
    }
});



//gifs

// $(window).scroll(function () {

// 	if($(".historia .sec").hasClass("active")) {
// 		$(".mockup").attr("src", "../images/abuelapp/abp_1.gif");
// 	} else if ($(".historia .sec").hasClass("active")) {
// 		$(".mockup").attr("src", "../images/abuelapp/abp_2.gif");
// 	} else if ($(".historia .ter").hasClass("active")) {
// 		$(".mockup").attr("src", "../images/abuelapp/abp_3.gif");
// 	}
// })






