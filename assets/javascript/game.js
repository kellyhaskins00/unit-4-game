//pseudo code
//create variables
$(document).ready(function() {
	var magicNumber; //random number to be generated at start of game
	var totalScore = 0;
	var wins = 0; 
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;
//create random numbers for magic number and crystal images
	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 120) + 19;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);
	}
//start the game over and create a new random number
	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#magicNumber").text(magicNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1Num);
		$("#crystal2").attr("data-crystalvalue", crystal2Num);
		$("#crystal3").attr("data-crystalvalue", crystal3Num);
		$("#crystal4").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");
	}
//if you win add a point to win count and alert you win
	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}
//if you lose add a point to lose count and alert you lose
	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();
//create a hover effect for images
	$(".crystalImg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

// Function to add the crystal values together
	$(".crystalImg").on("click", function() {
		if (totalScore >= magicNumber) {
			return;
        }
        
		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === magicNumber) {
			youWin();
		} else if (totalScore > magicNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});
