Template.Hours.helpers({
	rezervsC:function () {
		return Rezervs.find({day: Session.get('tabsId')});
	},
	countRez: function () {
		return Rezervs.find({day: Session.get('tabsId')}).count();
	}

});