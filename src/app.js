App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'gemMiner'
});

App.Router.map(function(){
   this.route("gemUtil");
	this.route("mine");
	this.route("gems");
	this.route("settings");
});