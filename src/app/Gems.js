App.GemsRoute = Ember.Route.extend({
	model: function() {
		 return this.store.find("gem");
	}
});

App.GemsController = Ember.ArrayController.extend({

});
