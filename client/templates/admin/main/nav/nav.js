Template.navAdmin.events({
	'click #hourDel':function(e){
		var ola = confirm('Оля ти точно хочеш видалити всi години?');
		if(ola){
			Meteor.call('delAllHour',function () {

		});
		}
		
	}
});
Template.navAdmin.events({
	'click #orderDel':function(e){
		var ola = confirm('Оля ти точно хочеш видалити всi резерви?');
		if(ola){
			Meteor.call('delAllOrder',function () {

		});
		}
	}
});
Template.navAdmin.events({
	'click #navZvazDel':function(e){
		var ola = confirm('Оля ти точно хочеш видалити всi звязки?');
		if(ola){
			Meteor.call('delAllZvaz',function () {

		});
			}
	}
});