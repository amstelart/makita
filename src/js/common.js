jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS



	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu").click(function () {

		// $(this).toggleClass("on");
		// $(".toggle-mnu-2").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});

	$(document).mouseup(function (e) {
		var container = $(".hidden-mnu.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		$(".item-prod--compare-js").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил

		var topH = $(window).innerHeight() * .2;
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.btn-top  ').addClass('active');
			} else {
				$('.btn-top  ').removeClass('active');
			}
		});

		// конец добавил
	}


	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});

	$(window).scroll(function () {
		heightses();

	});

	$(window).on("load", function () {
		heightses();

	})


	heightses();



	// листалка по стр
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});




	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';
	var icon2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"/>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);

	var arrl3 = (' <div class="l">' + icon2),
		arrr3 = (' <div class="r">' + icon2);

	// карусель
	$('.header-block__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		dots: true,
		arrows: false,
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
	});


	$('.s-catalog__slider--js').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: false,
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows: '.s-catalog .arrow-wrap',
		responsive: [{

			breakpoint: 1299,
			settings: {
				slidesToShow: 2,
			}

		}]
	});

	$('.s-catalog__slider--js-4-prod').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		// loop: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows: '.s-catalog .arrow-wrap',
		responsive: [{

				breakpoint: 1299,
				settings: {
					slidesToShow: 3,
				}

			},

			{

				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}

			},

		]
	});

	function hiddenSlider() {

		$('.s-catalog__slider--js-2-prod').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 450,
			infinite: true,
			loop: true,
			prevArrow: arrr2,
			nextArrow: arrl2,
			// appendArrows: '.s-catalog .arrow-wrap',
			responsive: [


				{

					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}

				},

			]
		});
	}


	hiddenSlider();
	// табы  .
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');
		});
	};

	tabscostume('tabs');
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(".s-catalog__slider--js-2-prod").slick('destroy');
		hiddenSlider();

	})
	tabscostume('tabs-po');

	$('.s-logo__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows: '.s-logo .arrow-wrap',
		responsive: [{

			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}

		}]
	});

	$('.s-sert__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows: '.s-sert .arrow-wrap',
		mobileFirst: true,
		responsive: [{
				breakpoint: 1299,
				settings: {
					slidesToShow: 5,
				}
			},

			{
				breakpoint: 767,
				settings: {
					slidesToShow: 5,
				}
			}
		]
	});


	$('.card-head__slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		asNavFor: '.card-head__slider-small',
		infinite: false,
		loop: false,
		arrows: false,

	});
	$('.card-head__slider-small').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: false,
		loop: false,
		arrows: false,

		// prevArrow: arrr2,
		// nextArrow: arrl2,
		// centerMode: true,

		focusOnSelect: true,
		asNavFor: '.card-head__slider-big',

		// swipeToSlide: false
	});
	$('  .carusel')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});

	$(' .tabs__caption, .s-order__slider ').slick({
		dots: false,
		arrows: false,
		infinite: false,
		loop: false,
		speed: 450,
		slidesToShow: 1,

		// centerMode: true,

		variableWidth: true
	});

	$('  .tabs-po__caption').slick({
		dots: false,
		infinite: false,
		loop: false,
		speed: 450,
		slidesToShow: 1,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		focusOnSelect: true,
		// centerMode: true,

		variableWidth: true
	});
	$('.tabs-po__caption').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		// console.log(currentSlide);
		$(this).find(".slick-slide").eq(nextSlide).click();
	});


	$('.s-catalog__btn--more-js').click(function () {
		$('.s-catalog').find(".s-catalog__slide:hidden").slideDown();
		$(this).hide();
	})
	$('.s-sert__btn--more-js').click(function () {
		$('.s-sert').find(".s-sert__slide:hidden").slideDown();
		$(this).hide();
	})

	// modal window
	// $('.popup-with-move-anim').magnificPopup({
	// 	type: 'inline',

	// 	fixedContentPos: true,
	// 	fixedBgPos: true,

	// 	overflowY: 'auto',

	// 	closeBtnInside: true,
	// 	preloader: false,

	// 	midClick: true,
	// 	removalDelay: 300,
	// 	mainClass: 'my-mfp-zoom-in'
	// });

	// / modal window

	// modal галерея
	// галерея
	$('[data-fancybox="images"]').fancybox({
		protect: true,
		toolbar: true,
		smallBtn: true,
		loop: true,
		keyboard: true,
		buttons: [
			"zoom",
			// "share",
			// "slideShow",
			'info',
			"fullScreen",
			// "download",
			"thumbs",
			"close"
		],

	});
	// /modal галерея
	$(".link-modal").fancybox({
		arrows: false,
		infobar: false,
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	})

	// mask for input
	var customOptions = {
		onKeyPress: function (val, e, field, options) {

			if (val.replace(/\D/g, '').length === 2 && !field.val() === '+7(') {
				val = val.replace('8', '1');
				field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input


	//Replace all SVG images with inline SVG
	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}


			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});




	$(".pretty-embed__bg").each(function () {
		// загрузка фона видео
		$(this).css("background-image", 'url(http://img.youtube.com/vi/' + $(this).data("src") + '/0.jpg)')
		// включение видео при клике по блоку
		$(this).click(function () {
			$(this).removeClass("on").next()
				.attr("src", 'https://www.youtube.com/embed/' + $(this).data("src") + '?autoplay=1').addClass("on");
		})
	})


	$(".catalog-nav__btn-toggle").click(function () {
		$(this).toggleClass("active").next().toggleClass("active").parent().toggleClass("active");
	})

	$(document).mouseup(function (e) {
		var container = $(".top-line .catalog-nav.active");
		if (container.has(e.target).length === 0 && !container.hasClass('not-click')) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			container.removeClass("active");
			$(".top-line .catalog-nav__btn-toggle").removeClass("active").next().removeClass("active");
		}
	});

	$(".footer__title").click(function () {
		$(this).toggleClass("active").next().slideToggle().toggleClass("active");
	})



	// тут все настройки  ionden.com/a/plugins/ion.rangeSlider/demo_interactions.html

	$('.slider-rang-wrap').each(function () {
		var th = $(this),
			inMinus = th.find('.minus'),
			inPlus = th.find('.plus');
		var slider = th.find(".range-slider").ionRangeSlider({
			type: "double",
			grid: false,
			min: 0,
			max: 1000,
			grid_snap: false,
			force_edges: true,
			hide_min_max: true,
			hide_from_to: true,
			// hide_grid_text: true,
			onStart: function (data) {
				inMinus.val(data.from);
				inPlus.val(data.to);
			},
			onChange: function (data) {
				inMinus.val(data.from);
				inPlus.val(data.to);
			},
			onFinish: function (data) {
				inMinus.val(data.from);
				inPlus.val(data.to);
			},
			onUpdate: function (data) {
				inMinus.val(data.from);
				inPlus.val(data.to);
			}
		});



	});

	// скрыть/показать фильтр
	$(".aside__btn--js").click(function () {
		$(this).toggleClass("active").next().slideToggle();
	})

	// для плаваюещего label
	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');

	// $('input, textarea').keyup(function () {
	// 	if ($(this).val().trim() !== '') {
	// 		$(this).closest('label').removeClass('empty');
	// 	} else {
	// 		$(this).closest('label').addClass('empty');
	// 	}
	// });

	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').each(function(){
		if ($(this).val() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
		$(this).on('.keyup', function () {
			if ($(this).val() !== '') {
				$(this).closest('label').removeClass('empty');
			} else {
				$(this).closest('label').addClass('empty');
			}
		});
	})

	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').on('keyup change click input cut copy paste', function () {

		if ($(this).val() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
		$(this).on('.keyup', function () {
			if ($(this).val() !== '') {
				$(this).closest('label').removeClass('empty');
			} else {
				$(this).closest('label').addClass('empty');
			}
		});
	})

	// form Validate
	$('.js-form-validate').parsley();


	// табы на радиокнопках
	$('input[data-tab-radio]').change(function () {
		var th = $(this),
			tabRadio = th.data('tab-radio');
		$('#' + tabRadio).fadeIn(100).addClass("active")
			.siblings('.tab-radio-content').removeClass('active').hide();
	})

	//  если радио таб выбран показать блок
	$('input[data-tab-radio]').each(function () {
		var th = $(this),
			tabRadio = th.data('tab-radio');
		if (th.is(":checked")) {

			$('#' + tabRadio).fadeIn(100).addClass("active")
				.siblings('.tab-radio-content').removeClass('active').hide();
		}
	})
	//  $(".tab-radio-content-close").click(function(){
	// 	 var thpar = $(this).parents('.tab-radio-content'),
	// 			thtab = thpar.attr('id');

	// 			thpar.fadeOut(100).removeClass("active");
	// 			$('[data-tab-rad='+thtab+']').prop('checked', false);
	//  })
	// /табы на радиокнопках

	//  аккордион
	$(".accordion__toggle-btn").click(function () {
		$(this).toggleClass('active').next().slideToggle().toggleClass('active');
	})
	//  /аккордион


	$('.btn-tab-js').click(function (e) {
		e.preventDefault();
		var th = $(this),
			tabRadio = th.data('tab-block');
		console.log(tabRadio);
		//  th.hide();
		$('#' + tabRadio).fadeIn(100).addClass("active")
			.siblings('.tab-radio-content').removeClass('active').hide();

	})
	$(".tab-radio-content-close--js").click(function () {
		var thpar = $(this).parents('.tab-radio-content'),
			thtab = thpar.attr('id');

		thpar.fadeOut(100).removeClass("active");
	})


	// кастомный инпут файл

	var file = $(".add-file input.add-file__input[type=file]");
	file.change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		var name = $(".add-file__filename  ");
		name.text(filename);

	});

	$(".table-history__tr--js").click(function () {
		$(this).toggleClass("active").next().find('.table-history__inner-block--js').slideToggle(150);
	})

	// показать/скрыть блок в поиске
	var hblock = $('.search-block, .search-block__btn-close, .search-block__toggle-block');
	$('body').on('keyup', '.search-block__input', function () {
		// console.log("1");
		$(this).val().length > 2 ? hblock.addClass('active') : hblock.removeClass('active');
	})
	$('.search-block__btn-close').click(function () {
		hblock.removeClass('active');
	})

	$(document).mouseup(function (e) {
		var container = $(".search-block.active");
		if (container.has(e.target).length === 0) {
			hblock.removeClass('active');
		}
	});
	// показать/скрыть блок в поиске



	$(".date-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			// minDate: today,
			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			maxDate: function () {
				return th.find('.endDate').val();
			}
		});
		th.find('.endDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',

			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			minDate: function () {
				return th.find('.startDate').val();
			}
		});
		th.find('input').next().hide();
		th.find('input').click(function () {
			$(this).next().click();
		})
	})



	//  слайдер сравнения
	$('.s-compare__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		speed: 450,
		infinite: false,
		dots: false,
		useTransform: false,
		arrows: true,
		touchMove: false,
		// swipe: false,
		prevArrow: arrr3,
		nextArrow: arrl3,
		asNavFor: '.s-compare__slider--js'
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
	});

	// var swiper = new Swiper('.s-compare__slider--js', {
	// 	slidesPerView: 'auto',
	// 	// spaceBetween: 30,
	// 	// pagination: {
	// 	// 	el: '.swiper-pagination',
	// 	// 	clickable: true,
	// 	// },
	// 	virtualTranslate: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// });

	$(".s-compare__slider-wrap").stick_in_parent({
		parent: '.s-compare',
		recalc_every: 1,
	});
	// $('.s-compare__slider--js').on('setPosition', function(event, slick){
	// 	console.log(slick);
	// 	$(".item-prod--compare-js ").stick_in_parent({
	// 		parent: '.s-compare__body',
	// 		recalc_every: 1,
	// 	});
	// });

	// var sticky = new Sticky('.item-prod--compare-js',{
	// 	data-sticky-class: '.is_stuck'
	// });

	// sticky.update();

	// $("  .s-compare .slick-arrow").stick_in_parent({
	// 	// parent: '.s-compare__item'
	// 	parent: '.s-compare',
	// });


	// подсветка при наведении пуктов в сравнении
	$('.s-compare__group--js').hover(function () {
		var theq = $(this).index();

		// $(this).toggleClass('hover');
		$(".s-compare__slide").each(function () {
			$(this).find('.s-compare__group--js').eq(theq).toggleClass('hover');
		})

	})

	// кнопка наверх
	$(" .btn-top").click(function () {

		$('html, body').animate({
			scrollTop: 0
		}, 1100);

		return false;
	});

});
