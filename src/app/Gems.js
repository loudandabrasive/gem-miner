App.Gem = DS.Model.extend({
	name:		DS.attr("string"),
	category:	DS.attr("string"),
	value:		DS.attr("number")
});

App.GemsRoute = Ember.Route.extend({
	model: function() {
		return this.get('store').find('gem');
	}
});

App.GemsController = Ember.ArrayController.extend({

});
