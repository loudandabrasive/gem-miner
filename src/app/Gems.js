App.Gem = DS.Model.extend({
	name:		DS.attr("string"),
	category:	DS.attr("string"),
	value:		DS.attr("number")
});

App.GemRoute = Ember.Route.extend({
	model: function() {
		return this.get('store').find('gem');
	}
});

App.GemController = Ember.ArrayController.extend({

});
