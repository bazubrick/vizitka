Session.setDefault('tabsId','0');
var rezId = new ReactiveVar();
var rezHour = new ReactiveVar();
var rezDay = new ReactiveVar();


// Template.modal.helpers({ // вертаем курсор годин та днив для клиента
// 	rezervsC:function () {
// 		return Rezervs.find({day: Session.get('tabsId')});
// 	},
// 	countRez: function () {
// 		return Rezervs.find({day: Session.get('tabsId')}).count();
// 	}
// });

Template.modal.events({
	'click ul li a':function(e){
		var tabsId = $(e.target).attr('id');
		Session.set('tabsId',tabsId);
		console.log(Session.get('tabsId'));
		
	}
});

Template.modal.events({
	'click .rezervBut':function(e,tmpl){
		// выводимо на яку годину резеруемся
		var textHour = $(e.target).attr('name2');

		var dayRez = $(e.target).attr('name');
		var idRez = $(e.target).attr('id');
		rezHour.set(textHour);
		rezDay.set(dayRez);
		rezId.set(idRez);

		var textF = $('#dH').text('Ви зарезервуєтеся на ' + dayRez + ' о ' + textHour);
		//
	},
	'click #sendForm':function (e,tmpl) {
		var formRezId = rezId.get();
		var formRezWeek = {
			hour: rezHour.get(),
			day:rezDay.get(),
			formName: $('#rezName').val(),
			formEmail: $('#rezEmail').val(),
			formNumber: $('#rezNumber').val(),
			formText: $('#rezText').val()
		};
		
		if(formRezWeek.hour === undefined){
			alert('Ви не вибрали годину');
		}else{
			if(formRezWeek.formName === '' || formRezWeek.formEmail === '' || formRezWeek.formNumber === ''){
				alert('Не всi поля заповненнi');
			}else{
				Meteor.call('delHour',formRezId, function () { // выдаляем годину з клиента
				});
				Meteor.call('addOrder',formRezWeek,function(err,res) { // добавляемо в колецию резерв
					if(res){
						alert('Ми чекаємо вас в: ' + formRezWeek.day + ' о ' + formRezWeek.hour);
					}

				});
				$('#modal1').closeModal();

			}
		}
	}
	

});