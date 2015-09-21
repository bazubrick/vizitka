Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'NotFound'
});

Router.route('homes',{
	path:'/',
	template: 'homes'
});
Router.route('gal',{
	path:'manikyr',
	template: 'manikyr',
	waitOn: function() {
	  return Meteor.subscribe('manphoto'); 
	}
});
Router.route('makiyaj',{
	path:'makiyaj',
	template: 'makiyaj',
	waitOn: function() {
	  return Meteor.subscribe('makphoto'); 
	}
});

Router.route('admin',{
	path:'admin',
	template:'adminka',
	onBeforeAction: function () {
		if(!Meteor.user()){
			 this.render('logIn');
		}else{
			this.next();
		}
		
	},
   
      
	waitOn: function() {
	  return [
	  Meteor.subscribe('rezerv'),
	  Meteor.subscribe('order'),
	  Meteor.subscribe('zvaz'),
	  Meteor.subscribe('manphoto'),
	  Meteor.subscribe('makphoto')
	  ]; 
	}

});
Router.onBeforeAction('loading');


