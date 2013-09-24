function getGemsForNMonths(n){
	var gems = [];
	for (var i = 0; i < n; i++) {
		gems = gems.concat(getGemsForOneMonth());
	};

	return gems;
}

function getGemsForOneMonth(){
	var gems = [];
	for (var i = 0; i < config.daysInMonth; i++) {
		gems = gems.concat(getGemsForOneDay());
	};

	return gems;
}

function getGemsForOneDay(){
	var gems = []
	for(var i=0; i<config.diggers;i++)
	{
		if(Math.random() < config.diggerFindChance)
			gems.push(newGem());
	}
	return gems;
}

function newGem(){
	var gem = {name: "coal", value:0 };
	var category = getGemCategory();
	gem.name = getNameOfGem(gemNames[category]);
	gem.value = getValueOfGem(gemValues[category]);

	return gem;
}

function getGemCategory(){
	gemsType = Math.random();
	if(gemsType < .25)
		return "lowest";
	else if(gemsType < .5)
		return "low";
	else if(gemsType < .7)
		return "middleLow";
	else if(gemsType < .9)
		return "middleHigh";
	else if(gemsType < .99)
		return "high";
	else
		return "highest";
}

function getNameOfGem(gemlist){
	return gemlist[Math.floor(Math.random()*gemlist.length)];
}

function getValueOfGem(gemlist){
	return config.rollGemValues
		? rollValue(gemlist.dice, gemlist.sides, gemlist.multiplier)
		: gemlist.average;
}

function rollValue(rolls, die, multiplier){
	value = 0
	for (k=0; k < rolls; k++){
		value = value + Math.floor(Math.random() * die) + 1;
	}
	value = value * multiplier;
	return value;
}

function getEventsForNMonths(n){
	var events = []
	for(var i=0; i< (n * config.daysInMonth);i++) {
		if(Math.random() < config.dailyEventChance)
			events.push(eventNames[Math.floor(Math.random()*eventNames.length)]);
	}
	return events;
}

function loadConfig(){
	config.months = $('#monthsSlide').val();
	config.diggers = $('#diggerSlide').val();
	config.diggerFindChance = $('#diggerFindChanceSlide').val();
	config.rollGemValues = $('#rollGemValuesInput').is(':checked');
}

function updateInputSlide(fieldId) {
	var value = $("#"+fieldId+"Text").val();
	$("#"+fieldId+"Slide").val(value);
	loadConfig();
	return value;
}

function updateInputText(fieldId) {
	var value = $("#"+fieldId+"Slide").val();
	$("#"+fieldId+"Text").val(value);
	loadConfig();
	return value;
}

function rollAndDisplayForOneDay(){
	var gems = getGemsForOneDay();
	makeTableWithGems(gems);
}

function rollAndDisplayForNMonths(n){
	var gems = getGemsForNMonths(n);
	var events = getEventsForNMonths(n);
	makeTableWithGems(gems);
	addEventsToResults(events);
}

function addEventsToResults(events){
	for(var i=0; i<events.length; i++){
		$('#eventList').append("<li>" + events[i] + "</li>")
	}
}

function makeTableWithGems(gems){
	for(var i=0; i<gems.length; i++){
		var row = "<tr><td>" + (i+1) + 
			"</td><td>" + gems[i].name + 
			"</td><td>" + gems[i].value + 
			"</td></tr>";
		$('#resultTable').append(row);
	}
}

function clearTable(){
	 $("#resultTable").find("tr:gt(0)").remove();
	 $("#eventList").find("li").remove();
}

var config = {
	daysInMonth: 30,
	months: 1,
	diggers: 100,
	diggerFindChance: 0.03,
	dailyEventChance: 0.01,

	rollGemValues: false,
};

var eventNames = ["dwarf attack", "extra rich vein (roll extra day per digger)", "giant attack", "cave in", "cave monsters attack", "discovered natural cave", "found burried magic item",
				"delivery cart is attacked"]

var gemNames = {
	lowest: ["banded agate", "moss agate", "eye agate", "blue quartz", "hematite", "lapis lazuli", "malachite", "obsidian", "rhodochrosite", "tiger eye turquoise", "irregular freshwater pearl" ],
	low: ["bloodstone", "carnelian", "chalcedony", "chrysoprase", "citrine", "iolite", "jasper", "moonstone", "onyx", "peridot", "clear quartz", "sard", "sardonyx", "rose quartz", "smoky quartz", "star rose quartz", "zircon"],
	middleLow: ["amber", "amethyst", "chrysoberyl", "coral", "red garnet", "brown-green garnet", "jade", "jet", "white pearl", "golden pearl", "pink pearl", "silver pearl", "red spinel", "red-brown, spinel", "deep green spinel", "tourmeline"],
	middleHigh: ["alexandrite", "aquamarine", "violet garnet", "black pearl", "deep blue spinel", "golden yellow topaz"],
	high: ["emerald", "white opal", "black opal", "fire opal", "blue sapphire", "fiery yellow corundum", "rich purple corundum", "blue star sapphire", "black star sapphire", "star ruby"],
	highest: ["bright green emerald", "blue-white diamond", "canary diamond", "pink diamond", "brown diamond", "blue diamond", "jacinth"]
};

var gemValues = {
	lowest: 	{ average: 10,		dice:4,	sides:4,	multiplier: 1	},
	low: 		{ average: 50,		dice:2,	sides:4,	multiplier: 10 	},
	middleLow : { average: 100, 	dice:4,	sides:4,	multiplier: 10 	},
	middleHigh: { average: 500,		dice:2,	sides:4,	multiplier: 100	},
	high: 		{ average: 1000,	dice:4,	sides:4,	multiplier: 100	},
	highest: 	{ average: 5000,	dice:2,	sides:4,	multiplier: 1000}
};