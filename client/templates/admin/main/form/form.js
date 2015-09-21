Template.formAdmin.events({ // добавляемо годину и день через форму
	'submit form':function(e){
		e.preventDefault();

		var formAdmin = {
			day: $(e.target).find('[name=day]').val(),
			hour: $(e.target).find('[name=hour]').val()
		};
		if(formAdmin.day === '' || formAdmin.hour === ''){
			alert('Не вси поля булы заповнени')
		}else{
			Meteor.call('addFormAdmin',formAdmin,function (err,res) {
			if(res){
				alert('Ви успишно добавили');
			}
			});
		}		
	}
});