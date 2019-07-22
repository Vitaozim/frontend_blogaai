jQuery(document).ready(function($) {

	// menu global

	var $btmenuretratil = $("#header button.btmenuglobal");
	var $menuretratil = $("#header .itens-globais");
	var $btfecharetratil = $menuretratil.find("button.fecha-menu-retratil");

	$btmenuretratil.on('click', function(event) {
		$menuretratil.addClass('visivel');
	});

	$btfecharetratil.on('click', function(event) {
		$menuretratil.removeClass('visivel');
	});


	// bxSlider

	// var widthJanela = $(window).width();

	// var nSlidesDicas = 2;
	// if (widthJanela < ) {}


	var $slider_dicas = $("section.dicas-para-blogs .slider-dicas");
	$slider_dicas.bxSlider({
		touchEnabled: false,
		controls: false,
		slideSelector: $('.item-dica'),
		slideWidth: 1000,
		slideMargin: 0,
		minSlides: 2,
		maxSlides: 2,
		moveSlides: 1,
	});


	// var nSlidesDicas = 2;
	// if (widthJanela < ) {}

	var $slider_logos_midias = $("section.na-midia ul");
	$slider_logos_midias.bxSlider({
		auto: true,
		pause: 2000,
		autoStart: true,
		touchEnabled: false,
		pager: false,
		controls: false,
		slideWidth: 200,
		slideMargin: 30,
		minSlides: 6,
		maxSlides: 6,
		moveSlides: 1,
	})
});