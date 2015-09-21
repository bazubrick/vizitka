Template.nav.events({ // плавна прокрутка до якоря
	'click #navB':function(e){
		e.preventDefault();
		var destination = $('#Logo').offset().top;
		var minus = destination - 30;
		$("body,html").animate({scrollTop: minus }, 800);
	}
});

Template.nav.events({ // плавна прокрутка до якоря
	'click li a':function(e){
		e.preventDefault();
		var lol = $(e.target).attr("href");
		var destination = $('#' + lol).offset().top;
		var minus = destination - 60;
		$("body,html").animate({scrollTop: minus }, 800);
	}
});

/*Template.nav.onRendered(function () {
	$(".button-collapse").sideNav();
});*/
