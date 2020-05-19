(function($) {

	// hamburger menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("toogle-menu--active");
		$(this).closest("header").find(".main-menu").toggleClass("main-menu--open");
	});

	// header menu
	$(".page-menu-toggle").click(function() {
		$(".page-menu-toggle").removeClass("page-menu-toggle--active");
		$(".page-menu-list-child").removeClass("page-menu-list-child--open");
		$(this).toggleClass("page-menu-toggle--active");
		$(this).closest(".page-menu-item").find(".page-menu-list-child").toggleClass("page-menu-list-child--open");
	});
}(jQuery));