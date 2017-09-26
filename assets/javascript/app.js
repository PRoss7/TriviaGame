$(document).ready(function () { 

// function that creates start button

function initialScreen() {
	startScreen = "<a class='rick-button btn btn-primary btn-lg btn-block start-button href='#' role='button'>Come on Morty! There's *buuurp* no time for questions, we need to go play this trivia game!</a>";
	$(".main-section").html(startScreen);
}

initialScreen();

// function that is triggered by the start button and generates the game's HTML

$("body").on("click", ".start-button", function() {
	generateHTML();

	timer();

});

$("body").on("click", ".answer", function(event) {
	selectedAnswer = $(this).text();
	if (selectedAnswer === correctAnswers[questionCounter]) {
		clearInterval(clock);
		win();	
	}
	else {
		clearInterval(clock);
		loss();
	}
});

$("body").on("click", ".reset-button", function(event) {
	reset();
});

}); // closes $(document).ready

function timeOutLoss() {
	unanswered++;
	gameHTML = "<p class='timer-p endGameFont'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='morty'>*Morty Voice* Ahh geez man, looks like you ran out of time. Gee the correct answer was " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/rick.gif'>";
	$(".main-section").html(gameHTML);
	setTimeout(wait, 1000 *7);
}

function win() {
	correct++;
	gameHTML = "<p class='timer-p gameFont'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='rick-game'>*Rick voice* Congra *buuuurp* lations, you got it right hoorayyy *buuuurp* " + "</p>" + imageArray[questionCounter];
	$(".main-section").html(gameHTML);
	setTimeout(wait, 5000);
}

function loss() {
	incorrect++;
	gameHTML = "<p class='timer-p gameFont'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='rick-game'>*Rick voice* That's wrong, *buurp* idiot. The CORRECT answer was *burp* " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/rick.gif'>";
	$(".main-section").html(gameHTML);
	setTimeout(wait, 5000);
}

function generateHTML() {
	gameHTML = "<p class='timer-p gameFont'>Time Remaining: <span class='timer'>30</span></p><p class='text-center gameFont'>" + questionArray[questionCounter] + "</p><p class='first-answer answer gameFont'>A. " + answerArray[questionCounter][0] + "</p><p class='answer gameFont'>B. " + answerArray[questionCounter][1] + "</p><p class='answer gameFont'>C. " + answerArray[questionCounter][2] + "</p><p class='answer gameFont'>D. " + answerArray[questionCounter][3] + "</p>";
	$(".main-section").html(gameHTML);
}

function wait() {
	if (questionCounter < 5) {
		questionCounter++;
		generateHTML();
		counter = 30;
		timer();
	}
	else {
		finalScreen();
	}
}

function timer() {
	clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(clock);
			timeOutLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen () {
	gameHTML = "<p class='timer-p gameFont'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='morty'>*Morty voice* Hey man, gee that was fun, huh? Well, here's how ya did!" + "</p>" + "<p class='gameFont'>Correct Answers: " + correct + "</p>" + "<p class='gameFont'>Wrong Answers: " + incorrect + "</p>" + "<p class='gameFont'>Unanswered: " + unanswered +"</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Hey Rick, uhh do you think we could do that again?</a></p>";
	$(".main-section").html(gameHTML);
}

function reset() {
	questionCounter = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	counter = 30;
	generateHTML();
	timer();
}

var counter = 30;
var clock;
var questionArray = ["What discontinued sauce from McDonalds does Rick love?", "'I turned myslef into a ____ Morty! I'm ____ Riiick!!!'", "Which Morty becomes the president of The Citadel of Ricks?", "What is Rick's Main Catchphrase?", "What is Rick and Morty's favorite Interdimensional Cable show?", "Why does Rick party?"];
var answerArray = [["Sweet Chili Sauce", "Mulan Szechuan Teriyaki dipping sauce", "Green Chili Sauce", "Zesty Italian"], ["High School kid | Tiny", "Pickle", "Cat", "Brain"], ["Smart Morty", "Morty C-137", "Strong Morty", "Evil Morty"], ["'Hit the sack, jack!'", "'And that's why I always say, 'Shumshumschilpiddydah!''", "'Wubalubadubdub!'", "'GRASSSSS... tastes bad!'"], ["Gazorpazorpfield", "The Days and Nights of Mrs. Pancakes", "Ball Fondlers", "Show Me What You Got"], ["TO GET RIGGITY RIGGITY WRECKED SON", "To Socialize", "To perform karaoke", "To dance"]];
var correctAnswers = ["B. Mulan Szechuan Teriyaki dipping sauce", "B. Pickle", "D. Evil Morty", "C. 'Wubalubadubdub!'", "C. Ball Fondlers", "A. TO GET RIGGITY RIGGITY WRECKED SON"];
var imageArray = ["<img class='center-block img-right' src='assets/images/rickszechuan.jpg'>", "<img class='center-block img-right' src='assets/images/picklerick.jpg'>", "<img class='center-block img-right' src='assets/images/evilmorty.jpg'>", "<img class='center-block img-right' src='assets/images/wubrick.jpg'>", "<img class='center-block img-right' src='assets/images/Ball_fondlers.png'>", "<img class='center-block img-right' src='assets/images/riggity.gif'>"]
var questionCounter = 0;
var selectedAnswer;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var startScreen;
var gameHTML;
