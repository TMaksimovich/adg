(function($) {

	// hamburger menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("toogle-menu--active");
		$(this).closest("header").find(".main-menu").toggleClass("main-menu--open");
	});

}(jQuery));


// function setLocation(curLoc){
// 	location.hash = curLoc;
// }

function scroll(){
    var $sections = $('.section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top - 400;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');

    	if( scroll > top && scroll < bottom){
            $('.menu-link.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');
        }
   //      if( scroll > $(el).offset().top && scroll < bottom){
			// setLocation(id);
   //      }
    })
}
jQuery(window).on("scroll", scroll);

$(".main-menu").on("click","a", function (event) {
	jQuery(window).off("scroll", scroll);
	$(".toggle-menu.toogle-menu--active").removeClass("toogle-menu--active");
	$(this).closest("header").find(".main-menu").toggleClass("main-menu--open");
	$('.menu-link.active').removeClass('active');
	$(event.target).addClass('active');

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

    // находим высоту, на которой расположен блок
        top = $(id).offset().top - 100;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({
    	scrollTop: top
    }, 2000, null, function() {
      	jQuery(window).on("scroll", scroll);
      });
});