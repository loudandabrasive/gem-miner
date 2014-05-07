App.GemRoute = Ember.Route.extend({
	model: function() {
		 return this.get('store').find('gem');
	}
});

App.GemController = Ember.ArrayController.extend({

});
