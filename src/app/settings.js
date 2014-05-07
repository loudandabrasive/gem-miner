App.Settings = DS.Model.extend({
	costPerMiner:		DS.attr("number"),
	upkeepFlatRate:		DS.attr("number"),
	chanceToFindGem: 	DS.attr("number")
});

App.SettingsRoute = Ember.Route.extend({ 
	model: function(){
		var store = this.get('store');
		return store.find('settings', '1').then(function (record){
			if(! record.id){
				record = store.createRecord('settings', {
					id: '1',
					costPerMiner: 5,
					upkeepFlatRate: 500,
					chanceToFindGem: 0.001,
				});
				record.save();
			}

			return record;
		});
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
