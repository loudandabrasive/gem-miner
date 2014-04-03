App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function(){
   this.route("gemUtil");
	this.route("mine");
	this.route("gems");
	this.route("settings");
});