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
	actions:{
		sellAll: function(){
			var store = this.get('store');
			var payLoad = store.find('gem').then(function(gems){
				var worth = 0;
				console.log(gems);
				gems.forEach(function(gem, index){
					worth += gem.get('value');
					gem.deleteRecord();
					gem.save();
				});

				return worth;
			});

			payLoad.then(function(worth){
				var confing = store.find('globals', 1).then(function(record){
					var money = record.get('money');
					record.set('money', money+worth);
					record.save();
				});
			});
		},
	}
});
