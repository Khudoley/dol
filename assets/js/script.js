$(document).ready(function () {


	$('.scroll-to').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	})


	var sliderOffer = new Swiper('.slider-offer.swiper-container', {
		loop: true,
		pagination: {
			el: '.slider-offer__pagination',
		},
	});


	var sliderReviews = new Swiper('.slider-reviews.swiper-container', {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 60,
		navigation: {
			nextEl: '.slider-reviews__next',
			prevEl: '.slider-reviews__prev',
		},
	});

	var sliderHit = new Swiper('.hit-slider.swiper-container', {
		slidesPerView: 5,
		navigation: {
			nextEl: '.hit-slider__next',
			prevEl: '.hit-slider__prev',
		},
	});





});
