App.Globals = DS.Model.extend({
	costPerMiner:		DS.attr("number"),
	upkeepFlatRate:		DS.attr("number"),
	chanceToFindGem:	DS.attr("number")
});

App.IndexRoute = Ember.Route.extend({
	model: function(){
		var store = this.get('store');
		return store.find('globals', '1').then(function (record) {
			if(! record.id){
				record = store.createRecord('globals', {
					id: '1',
					costPerMiner: 5,
					upkeepFlatRate: 500,
					chanceToFindGem: 0.001,
				});
				record.save();
			}
			return record;
		});
	}
});
