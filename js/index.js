// JavaScript Document

//Hero Slider
'use strict';

$(function() {
	
    //settings for slider
if ($(window).width() < 768){
    var width = 767;
    var animationSpeed = 1000;
    var pause = 6000;
    var currentSlide = 1;
}
if (($(window).width() >= 768) && ($(window).width() < 992)){
    var width = 991;
	var animationSpeed = 1000;
    var pause = 6000;
    var currentSlide = 1;
}
if (($(window).width() >= 992) && ($(window).width() < 1200)){
    var width = 1199;
	var animationSpeed = 1000;
    var pause = 6000;
    var currentSlide = 1;
}
if ($(window).width() >= 1200){
    var width = 1400;
	var animationSpeed = 1000;
    var pause = 6000;
    var currentSlide = 1;
}
    //cache DOM elements
    var $slider = $('.hero-slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
});

//Options Toggle

$(function() {
	
	$('#options-btn').on('click', function() {
		$('.tier-two').slideToggle(1000);
		});
	
});