// Слайдер
(function($) {
  $('.promo-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    prevArrow: '<button type="button" class="slick-prev">Назад</button>',
    nextArrow: '<button type="button" class="slick-next">Вперед</button>'
  });
}(jQuery));