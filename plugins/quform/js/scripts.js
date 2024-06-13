jQuery(document).ready(function($) {
	$('form.quform').Quform();

	// Tooltip settings
	if ($.isFunction($.fn.qtip)) {
		$('.quform-tooltip').qtip({
			content: {
				text: false
			},
			style: {
				classes: 'qtip-default qtip-shadow quform-tt',
				width: '180px'
			},
			position: {
				my: 'left center',
				at: 'right center',
				viewport: $(window),
				adjust: {
					method: 'shift'
				}
			}
		});
	}

	// Changes subject to a text field when 'Other' is chosen
	$('#subject').replaceSelectWithTextInput({onValue: 'Other'});
}); // End document ready

(function ($) {
	$(window).on('load', function () {
		// Preload images
		var images = [
			'quformimages/close.png',
			'quformimages/success.png',
			'quformimages/error.png',
			'quformimages/default-loading.gif'
		];

		// Preload images for any active themes
		if ($('.quform-theme-light-light, .quform-theme-light-rounded').length) {
			images = images.concat([
				'quform/themes/lightimages/button-active-bg-rep.png',
				'quform/themes/lightimages/close.png',
				'quform/themes/lightimages/input-active-bg-rep.png'
			]);
		}

		if ($('.quform-theme-dark-dark, .quform-theme-dark-rounded').length) {
			images = images.concat([
				'quform/themes/darkimages/button-active-bg-rep.png',
				'quform/themes/darkimages/close.png',
				'quform/themes/darkimages/input-active-bg-rep.png',
				'quform/themes/darkimages/loading.gif'
			]);
		}

		if ($('.quform-theme-minimal-light').length) {
			images = images.concat([
				'quform/themes/minimalimages/close-light.png'
			]);
		}

		if ($('.quform-theme-minimal-dark').length) {
			images = images.concat([
				'quform/themes/minimalimages/close-dark.png',
				'quform/themes/minimalimages/loading-dark.gif'
			]);
		}

		$.preloadImages(images);
	});
})(jQuery);