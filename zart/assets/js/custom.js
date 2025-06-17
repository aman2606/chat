$(document).ready(function() {
    $(".accordion-tab .content").hide();
    $(".accordion-tab ").click(function() {
        $(this).toggleClass("active");
        $(".accordion-tab").not(this).removeClass("active");
    });

    $(".works_tag").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".how_it_works").offset().top},
	        'slow');
	    $("#tabs-nav li").removeClass("tabactive");
	    $(this).parent().addClass("tabactive");
	    
	});
	$(".inlcude_tag").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".include").offset().top},
	        'slow');
	    $("#tabs-nav li").removeClass("tabactive");
	    $(this).parent().addClass("tabactive");
	});
	$(".pricing_tag").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".pricing").offset().top},
	        'slow');
	    $("#tabs-nav li").removeClass("tabactive");
	    $(this).parent().addClass("tabactive");
	});
});