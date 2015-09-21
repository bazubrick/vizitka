Template.formPhotoMak.events({ // вытягуем дани з формы и додаем их в колекцию через метод додаем фотку
	'submit form':function(e){
		e.preventDefault();
		var forPhoto = $(e.target).find('[name=photoMak]').val();
		if(forPhoto === ''){
			alert('Поле пусте');
		}else{
			Meteor.call('PhotoAddMak', forPhoto, function (err,res) {
				if(res){
					alert('Фото добавлено');
				}
			});
		}

	}
});