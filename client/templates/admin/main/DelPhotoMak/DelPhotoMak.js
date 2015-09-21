Template.DelPhotoMak.helpers({
	makiyajPhoto: function () {
		return MakPhoto.find();
	}
});

Template.DelPhotoMak.events({ // по клику видаляемо фотогарфию
	'click #photoMak img':function(e){
		var flag = confirm('Оля ти точно хочеш видалити фото?');
		var idDel = $(e.target).attr('id');
		if(flag){
			Meteor.call('delPhotoMak',idDel, function () {
			});
		}
		
	}
});