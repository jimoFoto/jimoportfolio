$(function() {
	
	"use strict";
	
	var topOffset = 50; //navbar height

	//Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topOffset
	});
	
	//add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if(hash !=='#intro') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
	}


	//Add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
	
		var hash = $(this).find('li.active a').attr('href');
	
		if(hash !=='#intro') {
				$('header nav').addClass('inbody');
			} else {
				$('header nav').removeClass('inbody');
		}
	});
	
	
	//Use smooth scrolling when clickin on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') ===	
				this.pathname.replace(/^\//,'') &&
				location.hostname === this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-topOffset+2
						}, 500);
						return false;
					}
				}
	});

});