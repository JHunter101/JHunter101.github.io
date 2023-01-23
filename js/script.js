var dicePool = {
	classic: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultB_"
		],
		rounds: 7
	},
	challenge: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Challenge/images/challenge_defaultA_",
			"Challenge/images/challenge_defaultB_"
		],
		rounds: 7
	},
	giant: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Challenge/images/challenge_defaultA_",
			"Challenge/images/challenge_defaultB_"
		],
		rounds: 12
	},
	epic: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Challenge/images/challenge_defaultA_",
			"Challenge/images/challenge_defaultB_",
			"Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_"
		],
		rounds: 10
	}
};
var expansions = {
	"none": {
		dice: [],
		rounds: 0
	},
	"airline": {
		dice: ["Sky/images/sky_airportA_",
			"Sky/images/sky_airportB_"
		],
		rounds: -1
	},
	"alien-farmer": {
		dice: ["Future/images/future_alienFarmerA_",
			"Future/images/future_alienFarmerA_"
		],
		rounds: -1
	},
	"canyon": {
		dice: ["Yellow/images/yellow_canyonA_",
			"Yellow/images/yellow_canyonA_"
		],
		rounds: -1
	},
	"city-builder": {
		dice: ["Future/images/future_citybuilderA_",
			"Future/images/future_citybuilderB_"
		],
		rounds: -1
	},
	"construction": {
		dice: ["Engineer/images/engineer_constructionA_",
			"Engineer/images/engineer_constructionA_"
		],
		rounds: -1
	},
	"desert": {
		dice: ["Yellow/images/yellow_desertA_",
			"Yellow/images/yellow_desertB_"
		],
		rounds: -1
	},
	"forest": {
		dice: ["Green/images/green_forestA_",
			"Green/images/green_forestA_"
		],
		rounds: -1
	},
	"galactic-invaders": {
		dice: ["Arcade/images/arcade_galacticInvaderA_",
			"Arcade/images/arcade_galacticInvaderA_"
		],
		rounds: -1
	},
	"investigation": {
		dice: ["Cthulu/images/cthulu_investigationA_",
			"Cthulu/images/cthulu_investigationA_"
		],
		rounds: -1
	},
	"lake": {
		dice: ["Blue/images/blue_lakeA_",
			"Blue/images/blue_lakeA_"
		],
		rounds: -1
	},
	"lava": {
		dice: ["Red/images/red_lavaA_",
			"Red/images/red_lavaA_"
		],
		rounds: -1
	},
	"meteor": {
		dice: ["Red/images/red_meteorA_",
			"Red/images/red_meteorB_"
		],
		rounds: -1
	},
	"pluck-man": {
		dice: ["Arcade/images/arcade_plucManA_",
				"Arcade/images/arcade_plucManA_"
		],
		rounds: -1
	},
	"portal": {
		dice: ["Cthulu/images/cthulu_portalA_",
			"Cthulu/images/cthulu_portalA_"
		],
		rounds: -1
	},
	"power-grid": {
		dice: ["Electricity/images/electricity_powergridA_",
			"Electricity/images/electricity_powergridA_"
		],
		rounds: -1
	},
	"rainbow": {
		dice: ["Arcade/images/arcade_rainbowA_", 
		"Arcade/images/arcade_rainbowA_"],
		rounds: -1
	},
	"renovation": {
		dice: ["Engineer/images/engineer_renovationA_",
			"Engineer/images/engineer_renovationA_"
		],
		rounds: -1
	},
	"ritual": {
		dice: ["Cthulu/images/cthulu_ritualA_",
			"Cthulu/images/cthulu_ritualA_"
		],
		rounds: -1
	},
	"river": {
		dice: ["Blue/images/blue_riverA_",
			"Blue/images/blue_riverA_"
		],
		rounds: -1
	},
	"separation": {
		dice: ["Engineer/images/engineer_separationA_",
			"Engineer/images/engineer_separationA_"
		],
		rounds: -1
	},
	"special": {
		dice: ["Engineer/images/engineer_specialA_",
			"Engineer/images/engineer_specialA_"
		],
		rounds: -1
	},
	"street-lamps": {
		dice: ["Electricity/images/electricity_streetLampsA_",
			"Electricity/images/electricity_streetLampsA_"
		],
		rounds: -1
	},
	"superconnection": {
		dice: ["Future/images/future_superconnectionA_",
			"Future/images/future_superconnectionA_"
		],
		rounds: -1
	},
	"tentacle": {
		dice: ["Cthulu/images/cthulu_tentacleA_",
			"Cthulu/images/cthulu_tentacleA_"
		],
		rounds: -1
	},
	"tetromino": {
		dice: ["Arcade/images/arcade_tetrominoA_",
			"Arcade/images/arcade_tetrominoA_"
		],
		rounds: -1
	},
	"trail": {
		dice: ["Green/images/green_trailA_",
			"Green/images/green_trailA_"
		],
		rounds: -1
	},
	"underground": {
		dice: ["Underground/images/underground_defaultA_",
			"Underground/images/underground_defaultB_",
			"Underground/images/underground_defaultC_",
			"Underground/images/underground_defaultD_"
		],
		rounds: -1
	},
	"weather": {
		dice: ["Sky/images/sky_weatherA_",
			"Sky/images/sky_weatherB_"
		],
		rounds: -1
	}
};

function rollDice() {
	
	var mainSetting = document.getElementById("main-setting").value;
	var firstExpansion = document.getElementById("first-expansion").value;
	var secondExpansion = document.getElementById("second-expansion").value;
	var currentDicePool = dicePool[mainSetting].dice.concat(expansions[firstExpansion].dice, expansions[secondExpansion].dice);
	var maxRounds = dicePool[mainSetting].rounds + expansions[firstExpansion].rounds + expansions[secondExpansion].rounds;
		
	if (currentRound < maxRounds) {
	var imgSize = Math.round(document.documentElement.clientWidth / (currentDicePool.length + 1.1));
	var roundImg = document.createElement("img");
	var row = document.createElement("div");
	
	roundImg.height = 200;
	roundImg.width = 200;
	currentRound += 1;
	roundImg.src = "RRI/round_" + currentRound + ".png";
	row.appendChild(roundImg);
	row.classList.add("image-row");
	
	for (var i = 0; i < currentDicePool.length; i++) {
		var roll = Math.floor(Math.random() * 6) + 1;
		var diceImg = document.createElement("img");
		diceImg.height = 200;
		diceImg.width = 200;
		diceImg.classList.add("disable-dbl-tap-zoom", "blur");
		diceImg.setAttribute('onclick', "spoiler(this)")
		diceImg.src = "RRI/dice/" + currentDicePool[i] + roll + ".png";
		row.appendChild(diceImg);
	}
	
	container.appendChild(row);
	
	}
	
}

function unhide_elem(elem) {
	var element = document.getElementById(elem);
  	element.classList.remove('hidden');
}

function hide_elem(elem) {
	var element = document.getElementById(elem);
  	element.classList.add('hidden');
}

function spoiler(elem) {
  	elem.classList.toggle('blur');
}

var currentRound = 0;

function clearBox(elementID)
{
	currentRound = 0;
    document.getElementById(elementID).innerHTML = "";
}