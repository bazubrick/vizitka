Template.DelPhotoMan.helpers({
	manikyrPhoto: function () {
		return ManPhoto.find();
	}
});

Template.DelPhotoMan.events({ // по клику видаляемо фотогарфию
	'click #photoMan img':function(e){
		var flag = confirm('Оля ти точно хочеш видалити фото?');
		var idDel = $(e.target).attr('id');
		if(flag){
			Meteor.call('delPhotoMan',idDel, function () {
			});
		}	
	}
});