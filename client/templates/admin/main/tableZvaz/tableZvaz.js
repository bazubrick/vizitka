Template.tableZvaz.helpers({
	tableZvaz: function () {
		return Zvaz.find();
	}
});

Template.tableZvaz.events({
	'click .delAdmTableZvaz':function(e){
		var zvazId = $(e.target).attr('id');
		Meteor.call('delZvazAdmin', zvazId ,function () {

		})
		
	}
});

