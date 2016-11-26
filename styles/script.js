// JS Menu

$(function() {
				$nav = $('.nav-list');

				$('.menu-icon').click(function() {
					$nav.slideToggle();
				});

				$(window).resize(function() {
					if ( $(window).width() >= 640 ) {
						$nav.show();
					} else {
						$nav.hide();
					}
				});

			});
