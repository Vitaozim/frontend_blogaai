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

	var widthJanela = $(window).width();

	var nSlidesDicas = 2;
	if (widthJanela < 1000) {nSlidesDicas = 3}
	if (widthJanela < 840) {nSlidesDicas = 2}
	if (widthJanela < 400) {nSlidesDicas = 1}


	var $slider_dicas = $("section.dicas-para-blogs .slider-dicas");
	$slider_dicas.bxSlider({
		touchEnabled: false,
		controls: false,
		slideSelector: $('.item-dica'),
		slideWidth: 1000,
		slideMargin: 0,
		minSlides: nSlidesDicas,
		maxSlides: nSlidesDicas,
		moveSlides: 1,
	});


	var nSlidesMarcas = 6;
	if (widthJanela < 840) {nSlidesMarcas = 5}
	if (widthJanela < 600) {nSlidesMarcas = 3}
	if (widthJanela < 400) {nSlidesMarcas = 2}

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
		minSlides: nSlidesMarcas,
		maxSlides: nSlidesMarcas,
		moveSlides: 1,
	})
});