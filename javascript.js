var bossHealth = 5;
var playerHealth = 5;
var end = false;

var rand = Math.floor(Math.random() * 3);

var conditions = [
	[2, 1, 0], //rock: rock/paper/scissors
	[0, 2, 1], //paper: rock/paper/scissors
	[1, 0, 2] //scissors: rock/paper/scissors
];

var answerInText = ["Rock", "Paper", "Scissors"]
var resultsInText = ["won", "lost", "tied"]


function updateBossHealth(){
	var percenatage = bossHealth/5*100; 
	$('#boss').css("width", percenatage+"%");
	return;
}

function updatePlayerHealth(){
	var percenatage = playerHealth/5*100; 
	$('#player').css("width", percenatage+"%");
	return;
}

function play(playerAnswer){
	if (end == true)
		return;
	var result = conditions[playerAnswer][rand];
	if (result == 0) {
		bossHealth--;
		updateBossHealth();
	}
	if (result == 1) {
		playerHealth--;
		updatePlayerHealth();
	}
	$('#dialogue').html('Private chose '+ answerInText[rand]+ '. You ' + resultsInText[result] + ' in previous round.' + '<p>Please choose.</p>');
	rand = Math.floor(Math.random() * 3);
	if(bossHealth == 0 || playerHealth == 0){
		end = true;
		//var text = $('#dialogue').text();
		if (bossHealth == 0){
			$('#dialogue').append("<p>Congratulations! You defeated the pirate.</p>");
		} else {
			$('#dialogue').append("<p>You are defeated. Refresh to try again.</p>");
		}
	}
}
$(function(){
	$('#rock').on('click', function() {
		play(0);
	});

	$('#paper').click(function() {
		play(1)
	});

	$('#scissors').click(function() {
		play(2)
	});
});
