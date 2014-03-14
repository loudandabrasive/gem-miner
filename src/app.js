App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision: 12
    ,	adapter: "DS.FixtureAdapter"
});

App.Router.map(function(){
   this.route("gemUtil");
	this.route("mine");
	this.route("gems");
	this.route("settings");
});