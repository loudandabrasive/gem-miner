App.MineModel = Ember.Object.extend({
	gems: null,
	globals: null,	
});

App.MineRoute = Ember.Route.extend({
	model: function(){
		var model = App.MineModel.create();

		var store = this.get('store');

		// model.gems = store.find('gem');
		model.globals = store.find('globals', 1);

		return model;
	}
});

App.MineController = Ember.ObjectController.extend({
	actions:{
		addMiner: function(){
			var store = this.get('store');
			var globals = store.find('globals', 1).then(function(record){
				var miners = record.get('miners');
				record.set('miners', miners+1);
				record.save();
			});
		},

		removeMiner: function(){
			var store = this.get('store');
			var globals = store.find('globals', 1).then(function(record){
				var miners = record.get('miners');
				record.set('miners', miners-1);
				record.save();
			});
		},
		
		advanceMonth: function(){
			
		},
	}
});
