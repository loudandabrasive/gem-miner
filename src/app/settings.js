App.SettingsRoute = Ember.Route.extend({ 
	model: function(){
		var store = this.get('store');
		return store.find('globals', '1');
	},
});

App.SettingsController = Ember.ObjectController.extend({
	actions:{
		save: function(){
			var model = this.get('model');
			model.save();
		}
	}
});
