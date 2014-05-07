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
			var store = this.get('store');
			var gemsMined = store.find('globals', 1).then(function(globals){
				var miners = globals.get('miners');
				console.log(globals);
				return mineHelper.mineForMonth(globals.get('chanceToFindGem'), miners);
			});

			gemsMined.then(function(gems){
				gems.forEach(function(mined, index){
					var gem = store.createRecord('gem', {
						name: mined.name,
						category: mined.category,
						value: mined.value,
					});
					
					gem.save();
				});
			});

			store.find('globals', 1).then(function(config){
				var currentMoney = config.get('money');
				var upkeep = config.get('totalUpkeep');
				var months = config.get('monthsPassed');

				config.set('money', (currentMoney - upkeep));
				config.set('monthsPassed', (months +1));
				config.save();
			});
		},
	}
});
