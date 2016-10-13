$(function() {

// Options Toggle
var $optionsButton = $('#options-btn');
var $tierTwo = $('.tier-two');

$optionsButton.on('click', function() {
		$tierTwo.slideToggle(1000);
		});


});