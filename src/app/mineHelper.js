

var mineHelper = {
	mineForMonth: function(dailyChance, minersCount){
		gems = [];
		for(var day=0; day < 30; day++){
			for(var m=0; m < minersCount; m++){
				if(Math.random() < dailyChance)
					gems.push(newGem());
			}
		}
		return gems;
	}
}
