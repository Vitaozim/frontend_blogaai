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




	var $slider_dicas = $("section.dicas-para-blogs .slider-dicas");
	$slider_dicas.bxSlider({
		slideSelector: $('.item-dica'),
		slideWidth: 2000,
		slideMargin: 15,
		minSlides: 2,
		maxSlides: 2,
		moveSlides: 2,
	});
});