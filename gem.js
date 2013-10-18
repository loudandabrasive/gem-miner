App.Gem = DS.Model.extend({
    name:       DS.attr("string"),
    category:   DS.attr("string"),
    value:      DS.attr("int")
});

var GemCategory = {
    Lowest:     "Lowest",
    Low:        "Low",
    MiddleLow:  "MiddleLow",
    MiddleHigh: "MiddleHigh",
    High:       "High",
    Highest:    "Highest"
};

var GemNames = {
    Lowest: ["Banded Agate", "Moss Agate", "Eye Agate", "Azurite", "Blue Quartz", "Hematite", "Lapis Lazuli", "Malachite", "Obsidian", "Rhodochrosite", "Tiger Eye Turquoise", "Irregular Freshwater Pearl" ],
    Low: ["Bloodstone", "Carnelian", "Chalcedony", "Chrysoprase", "Citrine", "Iolite", "Jasper", "Moonstone", "Onyx", "Peridot", "Clear Quartz", "Sard", "Sardonyx", "Rose Quartz", "Smoky Quartz", "Star Rose Quartz", "Zircon"],
    MiddleLow: [ "Amber", "Amethyst", "Chrysoberyl", "Coral", "Red Garnet", "Brown-Green Garnet", "Jade", "Jet", "White Pearl", "Golden Pearl", "Pink Pearl", "Silver Pearl", "Red Spinel", "Red-Brown", "Spinel", "Deep Green Spinel", "Tourmeline"],
    MiddleHigh: [ "Alexandrite", "Aquamarine", "Violet Garnet", "Black Pearl", "Deep Blue Spinel", "Golden Yellow Topaz"],
    High: [ "Emerald", "White Opal", "Black Opal", "Fire Opal", "Blue Sapphire", "Fiery Yellow Corundum", "Rich Purple Corundum", "Blue Star Sapphire", "Black Star Sapphire", "Star Ruby"],
    Highest: ["Bright Green Emerald", "Blue-White Diamond", "Canary Diamond", "Pink Diamond", "Brown Diamond", "Blue Diamond", "Jacinth"]
};

var GemValues = {
    Lowest: 	{ average: 10,		dice:4,	sides:4,	multiplier: 1	},
    Low: 		{ average: 50,		dice:2,	sides:4,	multiplier: 10 	},
    MiddleLow : { average: 100, 	dice:4,	sides:4,	multiplier: 10 	},
    MiddleHigh: { average: 500,		dice:2,	sides:4,	multiplier: 100	},
    High: 		{ average: 1000,	dice:4,	sides:4,	multiplier: 100	},
    Highest: 	{ average: 5000,	dice:2,	sides:4,	multiplier: 1000}
};

App.Gem.FIXTURES = [
    {
        id: 	1
        ,name:      "Bloodstone"
        ,category:	GemCategory.Low
        ,value:     50
    },
    {
        id: 	2
        ,name:      "White Opal"
        ,category:	GemCategory.High
        ,value:     1000
    },{
        id: 	3
        ,name:      "Brown-Green Garnet"
        ,category:	GemCategory.MiddleLow
        ,value:     100
    }
];