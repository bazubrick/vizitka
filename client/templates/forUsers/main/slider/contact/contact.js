Template.contact.events({ // вытягуем дани з формы и додаем их в колекцию через метод
	'submit form':function(e){
		e.preventDefault();
		console.log(e.target);
		var formZvaz = {
			formName:$(e.target).find('[name=firstname]').val(),
			formEmail: $(e.target).find('[name=email]').val(),
			formNumber: $(e.target).find('[name=number]').val(),
			formText: $(e.target).find('[name=text]').val()
		};		
		if(formZvaz.formName === '' || formZvaz.formEmail === '' || formZvaz.formNumber === ''){
			alert('Не всi поля заповненнi');
		}else{
			Meteor.call('addzvazForm',formZvaz,function(err,res) { // добавляемо в колецию резерв
				if(res){
					alert('Ваше повiдомленя доставленно!Ми з вами зв\'яжемося як зможем');
				}

			});
			var destination = $('#Logo').offset().top;
			var minus = destination - 30;
			$("body,html").animate({scrollTop: minus }, 800);
		}
		
	}
});