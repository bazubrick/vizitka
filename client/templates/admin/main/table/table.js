Template.table.helpers({
	table: function () {
		return Order.find();
	}
});

Template.table.events({
	'click .delAdmTable':function(e){
		var zvazId = $(e.target).attr('id');
		Meteor.call('delOrd', zvazId ,function () {

		});
		
	}
});