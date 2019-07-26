jQuery(document).ready(function($) {

	// menu global
	var $btmenuretratil = $("#header button.btmenuglobal");
	var $menuretratil = $("#header .itens-globais");
	var $btfecharetratil = $menuretratil.find("button.fecha-menu-retratil");

	$menuretratil
	.on('click', function(event) {
		$menuretratil.removeClass('visivel');
		$('html, body').removeClass('noscroll');
	})
	.find('.lista-globais')
	.on('click', function(event) {
		console.log($(this));
		event.stopPropagation();
	});;

	$btmenuretratil.on('click', function(event) {
		$menuretratil.addClass('visivel');
		$('html, body').addClass('noscroll');
	});

	$btfecharetratil.on('click', function(event) {
		$menuretratil.removeClass('visivel');
		$('html, body').removeClass('noscroll');
	});


	// busca
	var $btbusca = $("#btbusca");
	var $areabusca = $("#busca");

	$btbusca.on('click', function(event) {
		$areabusca.addClass('visivel');
		$('html, body').addClass('noscroll');
	});

	$areabusca
	.on('click', function(event) {
		$areabusca.removeClass('visivel');
		$('html, body').removeClass('noscroll');
	})
	.find("form")
	.on('click', function(event) {
		event.stopPropagation();
	});

	// bxSlider
	var widthJanela = $(window).width();

	var nSlidesDicas = 2;
	if (widthJanela < 840) {
		nSlidesDicas = 1;
	}


	var $slider_dicas = $("section.dicas-para-blogs .slider-dicas");
	if ($slider_dicas.length > 0){
		var bxDicas = $slider_dicas.bxSlider({
			touchEnabled: false,
			controls: false,
			slideSelector: $slider_dicas.find('.item-dica'),
			slideWidth: 1000,
			slideMargin: 0,
			minSlides: nSlidesDicas,
			maxSlides: nSlidesDicas,
			moveSlides: 1,
		});

	var $btControlDicas = $("section.dicas-para-blogs button");
	$btControlDicas.on('click', function(event) {
		if ($(this).is(".bt-prev")) {
			bxDicas.goToPrevSlide();
		}
		else if ($(this).is(".bt-next")) {
			bxDicas.goToNextSlide();
		}
	});
	} else{
		console.log("não existe o elemento html do slide de dicas, portanto o slider não gerado.")
	}



	var nSlidesMarcas = 6;
	if (widthJanela < 840) {nSlidesMarcas = 5}
	if (widthJanela < 600) {nSlidesMarcas = 3}
	if (widthJanela < 400) {nSlidesMarcas = 2}

	var $slider_logos_midias = $("section.na-midia ul");
	if ($slider_logos_midias.length > 0) {
		$slider_logos_midias.bxSlider({
			auto: true,
			pause: 2000,
			autoStart: true,
			touchEnabled: true,
			pager: false,
			controls: false,
			slideWidth: 200,
			slideMargin: 30,
			minSlides: nSlidesMarcas,
			maxSlides: nSlidesMarcas,
			moveSlides: 1,
		});
	} else{
		console.log("não existe o elemento html do slide de logos, portanto o slider não gerado.")
	}

	var $janela = $(window);
	
	// redes sociais post
	var $redes_sociais_post = $("#redes-sociais-post");

	if ($redes_sociais_post.length > 0) {
		var scrollAtual = $janela.scrollTop();
		var $areapost = $("#post");
		var $header = $("#header");
		var posicoesFixacao = {};
		var definirPosicoesFixacao = function(){
			posicoesFixacao = {
				iniciaFixo : $areapost.offset().top - $header.height(),
				encerraFixo : $areapost.offset().top - $header.height() + $areapost.height() - $redes_sociais_post.height(),
				topRedes : $areapost.height() - $redes_sociais_post.height()
			}
		}

		$janela.on('resize', definirPosicoesFixacao);

		definirPosicoesFixacao();
		$janela
		.on('scroll', function(event) {
			if ($(this).scrollTop() < posicoesFixacao.iniciaFixo) {
				$redes_sociais_post.removeClass('fixado').css('top', '');
			}

			else if($(this).scrollTop() > posicoesFixacao.encerraFixo){
				$redes_sociais_post.removeClass('fixado').css('top', posicoesFixacao.topRedes+"px");
			}

			else{
				$redes_sociais_post.addClass('fixado').css('top', ($header.height())+"px");
			}
		})
		.trigger("scroll");
	}

});




