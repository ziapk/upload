jQuery(document).ready(function (argument) {
	// DOM elements
	var $rslider = $('.rslider');
	var $cSlider = $('.carosel-slider');
	var $4item	 = $('.4item');
	var $winWidth = $(window).width();
	var $custommenu = $('.dropdown-btn');
	$rslider.bxSlider({pager : false})
	$cSlider.bxSlider({
		pager : false,
		slideWidth: 370,
		minSlides: $winWidth >1023 ? 3 : $winWidth > 479 ? 2 : 1,
		maxSlides: $winWidth >1023 ? 3 : $winWidth > 479 ? 2 : 1,
		moveSlides: 1,
		slideMargin: 20
	});
	$4item.bxSlider({
		pager : false,
		slideWidth: 270,
		minSlides: $winWidth >1023 ? 4 : $winWidth > 767 ? 3 : $winWidth > 479 ? 2 : 1,
		maxSlides: $winWidth >1023 ? 4 : $winWidth > 767 ? 3 : $winWidth > 479 ? 2 : 1,
		moveSlides: 1,
		slideMargin: 20
	});
	
	// init
	var $container = $('.products');

		setTimeout(function(){

			$container.isotope({
			  // options
			  itemSelector: '.item',
			  layoutMode: 'masonry',
			  masonry: {
			    columnWidth: '.item.col-sm-3,.item.col-sm-4'
			  },
			});

		},1000);



	$custommenu.on('click', function (el) {
		$el = $(this);
		if($(this.hash).is(':hidden')){
			$('.dropdown-btn').removeClass('active');
			$('.dropdown-custom-menu').slideUp();
			$el.addClass('active');
			$(this.hash).stop(true, true).slideDown();
		}
		else{
			$el.removeClass('active');
			$(this.hash).stop(true, true).slideUp();	
		}
		var $hash = $(this.hash);
			$hash.click(function(e) {
   				e.stopPropagation();
	   		})
		$('body').on('click', function () {
			$el.removeClass('active');
			$hash.slideUp();
		})
		return false;
	});

	$('.collapse-toggle').each(function () {
		var $hash = $(this.hash);
		$(this).click(function () {
			if($(this.hash).is(':visible')){
				$(this).attr('aria-expanded', 'true');
				$('[rel="seller"]').slideUp();
			}
			else{
				$('[rel="seller"]').slideUp();
				$(this).attr('aria-expanded', 'false');
				$(this.hash).css({'visibility': 'visible'}).slideDown();				
			}
			return false;
		})
	})
	var $searchnav = $('.search-nav-fixed-top');
	$searchnav.stick_in_parent();

	$('.sortbtns').find('a').click(function () {
		if($(this).hasClass('fitrows')){
			$(this).parents('.container').removeClass('search-container');
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			$container.isotope();
		}else{
			$(this).parents('.container').addClass('search-container');
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			$container.isotope();
		}
		return false;
	});

		$('.selectmenu').each(function () {
			$(this).selectmenu().selectmenu( "widget" ).addClass('ui-corner-all-o');
			$(this).selectmenu().selectmenu().selectmenu( "menuWidget" ).addClass( "selectmenu-overflow" );
		})
		$('.add').on('click',function (argument) {
			var txtNumber = document.getElementById("txtNumber");
			txtNumber.value = parseInt(txtNumber.value) + 1
		});
		$('.sub').on('click',function (argument) {
			var txtNumber = document.getElementById("txtNumber");
			if(parseInt(txtNumber.value) > 1){
				txtNumber.value = parseInt(txtNumber.value) - 1				
			}
		});


})