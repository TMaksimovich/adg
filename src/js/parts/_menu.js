(function($) {

	// hamburger menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("toogle-menu--active");
		$(this).closest("header").find(".main-menu").toggleClass("main-menu--open");
	});

	//плавный скролл к якорю
	$('a[href^="#"]').click(function(){
		$('.menu-link').removeClass("active");
        var el = $(this).attr('href');
        $(this).addClass("active");
        $('body, html').animate({
            scrollTop: $(el).offset().top - ($('header').height() + 40)}, 2000);
        return false;
	});
}(jQuery));