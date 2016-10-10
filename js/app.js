$(function() {

	//Hero Image Change
	var $hero = $('#hero');
	var $button = $('.button');
	
	var firstImage = 'url(images/slides/image4.jpeg';
	var slides = ['url(images/slides/image1.jpeg)',
		'url(images/slides/image2.jpeg)',
		'url(images/slides/image3.jpeg)'];

	//Hero Heading Change
	var $mainHeadline = $('.mainHeadline');
	var $mainSubheadline = $('.mainSubheadline');
	var $defaultHeadline = $('#defaultHeadline');
	var $defaultSubheadline = $('#defaultSubheadline');
	
	$hero.css('background-image', firstImage);
	$mainHeadline.hide();
	$mainHeadline.removeClass('hide');
	$mainSubheadline.hide();
	$mainSubheadline.removeClass('hide');

	//Hero Image Change on focus
	$button.on('mouseover', function(){
		var buttonId = $(this).attr('data-buttonId');
		var slidesIndex = parseFloat(buttonId)-1;
		$hero.css('background-image', slides[slidesIndex]);
		//Change Headline
		$defaultHeadline.hide();
		$mainHeadline.hide();
		$('#headline' + buttonId).show();
		//Change Subheadline
		$defaultSubheadline.hide();
		$mainSubheadline.hide();
		$('#subheadline' + buttonId).show();
	});



	//Hero Image Revert on mouseleave
	$hero.on('mouseleave', function(){
		$hero.css('background-image', firstImage);
		//Revert Headline
		$mainHeadline.hide();
		$defaultHeadline.show();
		//Revert Subheadline
		$mainSubheadline.hide();
		$defaultSubheadline.show();

	});


// Options Toggle
var $optionsButton = $('#options-btn');
var $tierTwo = $('.tier-two');

$optionsButton.on('click', function() {
		$tierTwo.slideToggle(1000);
		});







});