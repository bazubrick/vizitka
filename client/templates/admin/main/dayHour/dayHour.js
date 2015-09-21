Template.dayHour.helpers({ // выводить курсор в админку
	adminRemove: function () {
		return Rezervs.find();
	}

});

Template.dayHour.events({ // удаляем годину и день з админкы
	'click .admDelBut':function(e){
		var butId = $(e.target).attr('id');
		Meteor.call('delHour',butId,function(){
		});
	}
});