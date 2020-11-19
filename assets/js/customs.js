$(document).ready(function() {
	$('.slider-works').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 300,
        easing: 'swing',
        slidesToShow: 1,
        initialSlide: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<div class="arrow-slider"><span class="slick_prev" href="#"><img src="./assets/images/arrow-left.png" alt="arrow left"></span></div>',
        nextArrow: '<div class="arrow-slider"><span class="slick_next" href="#"><img src="./assets/images/arrow-right.png" alt="arrow right"></span></div>',
        responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        variableWidth: false,
                adaptiveHeight: true,
                centerMode: false,
                centerPadding: '0px',
		      }
		    }
		]
	});

	$('.scroll-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 500);
	});

	$('.btn-menusp, .nav-header li').click(function(){
		$('.btn-menusp').toggleClass('active');
		$('.hd-menu').toggleClass('active');
	});

	$('.title-lm').click(function() {
		$(this).toggleClass('active');
		$('.list-month .drop-menu').toggle(200);
	});

	$('.menu-item .sub-menu').after('<a class="mean-expand" href="#"></a>');

	$('.mean-expand').click(function(){
		$(this).toggleClass('open');
		$(this).parents('.menu-item').find('.sub-menu').toggleClass('open');
		return false;
	});

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		}, 1000);
	});

	$('.tab-content').hide();
	$('.tab-content:last').show();
	$('.tabs li:last').addClass('active');
	$('.tabs li').click(function(event) {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		var selectTab = $(this).find('a').attr("href");

		$(selectTab).fadeIn();
	});

	jQuery('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	jQuery('.slider-work-detail .slider-nav').slick({
		adaptiveHeight: false,
  		variableWidth: false,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	arrows: false,
	  	dots: false,
	 	centerMode: true,
	  	focusOnSelect: true
	});
});