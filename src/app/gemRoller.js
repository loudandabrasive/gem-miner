function newGem(){
	var gem = {name: "coal", value:0 };
	var category = getGemCategory();
	gem.name = getNameOfGem(GemNames[category]);
	gem.value = getValueOfGem(GemValues[category]);

	return gem;
}

function getGemCategory(){
	gemsType = Math.random();
	if(gemsType < .25)
		return "Lowest";
	else if(gemsType < .5)
		return "Low";
	else if(gemsType < .7)
		return "MiddleLow";
	else if(gemsType < .9)
		return "MiddleHigh";
	else if(gemsType < .99)
		return "High";
	else
		return "Highest";
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
