// Счетчик
var block_show = false;
var el = $('.statistic');

function scrollTracking(){
	if (block_show) {
		return false;
		//el.removeClass('active');
	}

	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = el.offset().top + 130;
	var eh = el.outerHeight();
	var dh = $(document).height();

	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		//el.addClass('active');

		incrementalNumber();
	}
}

$(window).scroll(function(){
	if (el.length === 0)  {
		return;
	}
	else {
		scrollTracking();
	}
});

$(document).ready(function(){
	if (el.length === 0)  {
		return;
	}
	else {
		scrollTracking();
	}
});