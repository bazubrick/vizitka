Template.slider.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(49.554799, 25.596734),
        zoom: 12
      };
    }
  }
});
Template.slider.onCreated(function() {  
  	GoogleMaps.ready('map', function(map) {
	    var markers = {};
	    var marker = new google.maps.Marker({
	        draggable: false,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(49.553763, 25.647177),
	      	map: map.instance              
	        });
	  	});
});

Template.slider.events({ // плавна прокрутка до якоря
	'click .proDown':function(e){
		e.preventDefault();
		var destination = $('#Gallery').offset().top;
		var minus = destination - 60;
		$("body,html").animate({scrollTop: minus }, 800);
	}
});

