(function($) {

	// hamburger menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("toogle-menu--active");
		$(this).closest("header").find(".main-menu").toggleClass("main-menu--open");
	});

	//плавный скролл к якорю
	$('a[href^="#"]').click(function(){
		$('.menu-link').removeClass("active");
		$('.toggle-menu').removeClass("toogle-menu--active");
		$('.main-menu').removeClass("main-menu--open");

        var el = $(this).attr('href');
        $(this).addClass("active");
        $('body, html').animate({
            scrollTop: $(el).offset().top - ($('header').height() + 40)}, 2000);
        return false;
	});
}(jQuery));