Meteor.methods({
	addFormAdmin: function (form) { // добавляем день и годину через админку
		var flag = Rezervs.insert({
			day: form.day,
			hour: form.hour
		});
		return flag; 
	},
	delHour: function (id){ // видаляемо день и годину коли робимо резерв
		Rezervs.remove({_id: id});
	},
	addOrder: function (order) { // добавляем заказ чи резерв
		var leleka = Order.insert({
			name: order.formName,
			email: order.formEmail,
			number: order.formNumber,
			text: order.formText,
			day: order.day,
			hour: order.hour
		});
		return leleka;
	},
	delOrd: function (id) { // выдаляем  конкретный заказ
		Order.remove({_id: id});

	},
	addzvazForm: function (zvazForm) {
		var retId = Zvaz.insert({
			name: zvazForm.formName,
			email: zvazForm.formEmail,
			number: zvazForm.formNumber,
			text: zvazForm.formText
		});
		return retId;
	},
	delZvazAdmin: function (id) {
		Zvaz.remove({_id:id});
	},
	delAllHour: function () { // выдаляем вси години
		Rezervs.remove({});
	},
	delAllOrder: function () { // выдаляем вси заказы
		Order.remove({});
	},
	delAllZvaz: function () { // выдаляем вси звязки
		Zvaz.remove({});
	},
	PhotoAddMan: function (photo) { // добавляем фото в колекцию
		var flag = ManPhoto.insert({
			photo: photo
		});
		return flag; 
	},
	delPhotoMan: function (idDel) { // видаляемо фото через админ
		ManPhoto.remove({_id: idDel});
	},
	PhotoAddMak: function (photo) { // добавляем фото в колекцию
		var flag = MakPhoto.insert({
			photo: photo
		});
		return flag; 
	},
	delPhotoMak: function (idDel) { // видаляемо фото через админ
	MakPhoto.remove({_id: idDel});
	}
	
});
 Meteor.startup(function() {
 	if(!Meteor.users.findOne()){
 		Meteor.users.insert({
    		services : {
		password : {
			bcrypt : "$2a$10$P4EtNx.UUlR29TBGVhOlYe9TCsSzG/o88ebsZpeBTYB2syvHUBg36"
		},
		resume : {
			loginTokens : [
				{
					hashedToken : "i88k8033AGDxYmOC8UsNzCusUXafcg+qaW3MGQULVCU="
				}
			]
		}
	},
	emails : [
		{
			address : "admin@test",
			verified : false
		}
	]
		});
 	}																																																																																																																																										

});
/*{
	"_id" : "gx7bjcm3cQK3F4GmA",
	"services" : {
		"password" : {
			"bcrypt" : "$2a$10$8ywOp8rH0EEshiIRIVo6QO80ZCYb2PJopIJmiqJb0rEDQnBlKkeg6"
		},
		"resume" : {
			"loginTokens" : [
				{
					"hashedToken" : "Gp133Ya0rzojPaHVH8PxMpJHX4wCamwIN3wjW7rVH+g="
				}
			]
		}
	},
	"emails" : [
		{
			"address" : "macon@ola.love",
			"verified" : false
		}
	]
}*/


