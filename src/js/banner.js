let $ = require('jquery');

function bannerLogic() {
	$(function() {
		// cache DOM
		let $dismiss = $('#dismiss');
		let $banner = $('#banner');

		// functions
		function removeBanner() {
			$banner.fadeOut(500);
		}

		// bind events
		$dismiss.on('click', removeBanner);

	});
}

module.exports = bannerLogic;
