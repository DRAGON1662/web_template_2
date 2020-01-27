$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000);
});

var init_header_position = $('#header').offset().top;
$(window).on("scroll", function() {
    var header = $('#header');
    scroll = $(window).scrollTop();
    if (scroll >= init_header_position){
        header.addClass('fixed_header');
        $('.description').addClass('padding_top');
    } else {
        header.removeClass('fixed_header');
        $('.description').removeClass('padding_top');
    }
});