Meteor.startup(function() {
    GoogleMaps.load();
});

Template.homes.onRendered(function () {
	Meteor.subscribe('rezerv');
	$('.modal-trigger').leanModal({
      dismissible: true, 
      opacity: .5, 
      in_duration: 300,
      out_duration: 200 
    });
    $('.materialboxed').materialbox();  
	$('ul.tabs').tabs();
	$('.parallax').parallax();
	$('.navbar-fixed').hide();
	$('.slider').slider({
		full_width: true,
		interval: 7000,
		indicators: false
	});
	$(window).scroll(function () {
		var flag = $(this).scrollTop();
		if(flag > 150){
			$('#showNav').fadeIn(800);	
		}else{
			$('#showNav').fadeOut(800);
		}
	});
});