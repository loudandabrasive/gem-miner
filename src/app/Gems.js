App.GemsRoute = Ember.Route.extend({
	model: function() {
		 return App.Gem.find();
	}
});

App.GemsController = Ember.ArrayController.extend({

});
