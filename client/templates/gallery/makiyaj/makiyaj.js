Template.makiyaj.onRendered(function () {
	$('.superbox').SuperBox();
	Meteor.subscribe('rezerv');
	$('ul.tabs').tabs();
	$('.modal-trigger').leanModal({
      dismissible: true, 
      opacity: .5, 
      in_duration: 300,
      out_duration: 200 

    }
  );
});
