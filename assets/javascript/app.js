//let's make some variables
var gamePage
var startPage
var userAnswer
var clock

var seconds = 10
var questionCount = 0
var winCount = 0
var lossCount = 0
var timeoutCount = 0


var disney = new Audio('assets/images/Disney.mp3');
var wand = new Audio('assets/images/wand.mp3')


var question = ["In Aladdin, what is the name of Jasmine's pet tiger?",
	"In the Lion King, where does Mufasa and his family live?",
	"In Beauty and the Beast, how many eggs does Gaston eat for breakfast?",
	"In Mary Poppins, what animal was on the end of Mary Poppins' umbrella that spoke?",
	"Which of the following is NOT one of the seven Dwarves?",
	"What was the name of the dragon in Mulan?",
	"During the ballroom scene of Beauty & the Beast, what color is Belle's gown?",
	"What name did Princess Aurora use to hide her identity while living in the cottage in the woods?",
	"What was the crew celebrating on the ship at the beginning of The Little Mermaid?",
	"Which princess has a raccoon for a sidekick?"]
var answer = [['Rajah', 'Jafar', 'Abu', 'Iago'],
	['Oakland','Pride Cave','Pride Rock','Neverland'],
	['2 Dozen','3 Dozen','4 Dozen','5 Dozen'],
	['A Cat','A Parrot','A Fox','A Lion'],
	['Happy','Dopey','Angry','Doc'],
	['Mushu','Li Shang','Yao','Chi-Fu'],
	['Red','White','Gold','Blue'],
	['May Showers','Autumn Leaf','Little Red','Briar Rose'],
	["Prince Eric's Birthday","Prince Eric's Battle Victory","Prince Eric's Engagement", "Prince Eric's Homecoming"],
	['Jasmine','Snow White','Pocahontas','Rapunzel']]
var correct = ['Rajah','Pride Rock','5 Dozen','A Parrot','Angry',
	'Mushu','gold','Briar Rose',"Prince Eric's Birthday",'Pocahontas']
var gif = ["<img class='gif center-block' src='https://media.giphy.com/media/huA20PI64xIhW/giphy.gif'>",
	"<img class='gif center-block' src='https://media.giphy.com/media/FJCzc8XyKv7eo/giphy.gif'>",
	"<img class='gif center-block' src='https://media.giphy.com/media/SAYKONNBVkAdW/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/mq9BXwPVKsFfq/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/ObWUvZOqum1NK/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/Moh4h3D0DO9A4/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/10iuzA464T5OF2/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/cAnQDetJF54Ri/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/tOpBKMuYEGypW/giphy.gif'>", 
	"<img class='gif center-block' src='https://media.giphy.com/media/J2pFtdT1X9K36/giphy.gif'>"]


//let's make some functions
function startup(argument){
	// console.log("let's start the game") //-----------make sure startup() is working
	startPage = "<p class = 'buttonDiv'><a class='startBtn btn btn-primary btn-lg btn-block' href='#' role='button'>Start Game</a></p>"
	$('.gameDiv').html(startPage)
}

function game(argument) {
	console.log('game is working yay!')
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>10</span></p><p class='question text-center'>" + question[questionCount] + "</p><p class='answer'>" + answer[questionCount][0] + "</p><p class='answer'>"+answer[questionCount][1]+"</p><p class='answer'>"+answer[questionCount][2]+"</p><p class='answer'>"+answer[questionCount][3]+"</p>"
	$('.gameDiv').html(gamePage);
}

function countdown(argument) {
	clock = setInterval(done, 1000);
	function done() {
		if (seconds === 0) {
			clearInterval(clock);
			timeout();
		}
		if (seconds > 0) {
			console.log('timer is working')
			seconds--;
		}
		$('.timer').html(seconds);
	}
}

function timeout(argument) {
	console.log('out of time')
	timeoutCount++;
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Out of time!  The correct answer was: " + correct[questionCount] + "</p>" + "<img class='gifTime center-block' src='https://media.giphy.com/media/MINCCkQQcYyxq/giphy.gif'>";
	$('.gameDiv').html(gamePage);
	setTimeout(delay, 3000);
}

function delay(argument) {
	if (questionCount < 9) {
		console.log('reset timer and onto the next question')
		questionCount++;
		game();
		seconds = 10;
		countdown();
	}
	else {
		console.log('gameOver')
		gameOver();
	}
}

function win(argument) {
	console.log('good job!')
	winCount++
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correct[questionCount] + "</p>" + gif[questionCount]
	$('.gameDiv').html(gamePage)
	setTimeout(delay, 3000)
}

function loss(argument) {
	console.log('nice try!')
	lossCount++
	gameHTML = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correct[questionCount] + "</p>" + "<img class='gifWrong center-block' src='https://media.giphy.com/media/dsIj7UxXdE4ak/giphy.gif'>"
	$(".gameDiv").html(gameHTML)
	setTimeout(delay, 3000)
}

function gameOver(argument) {
	console.log('game over.  play agian?')
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Thanks for playing!  Here are your results:" + "</p>" + "<p class='text-center'>Correct Answers: " + winCount + "</p>" + "<p class='text-center'>Wrong Answers: " + lossCount + "</p>" + "<p class='text-center'>Unanswered: " + timeoutCount + "</p>" + "<p class='buttonDiv text-center'><a class='resetBtn btn btn-primary btn-lg btn-block ' href='#' role='button'>Take the Quiz Again!</a></p>"
	$('.gameDiv').html(gamePage);
}

function reset(argument) {
	console.log('reset counters. run game and countdown')
	questionCount = 0;
	winCount = 0;
	lossCount = 0;
	timeoutCount = 0;
	seconds = 10;
	game();
	countdown();
}




//THIS IS MY TRIVIA GAME!!  get page ready for jQuery
$(document).ready(function(){

//function to create start button and start page
	startup()

//on startBtn click, run game and start countdown
	$("body").on("click", ".startBtn", function(){
		disney.play()
		game();
		countdown();
	})

//on clicked answer => userAnswer.  if correct, clear clock and alert win; else, clear clock and alert loss
	$("body").on("click", ".answer", function(){
		wand.play()
		console.log(this)
		userAnswer = $(this).text()
		console.log('userAnswer = ' + userAnswer)
		if(userAnswer === correct[questionCount]) {
			clearInterval(clock)
			win()
		}
		else {
			clearInterval(clock)
			loss()
		}
	})

//on resetBtn click
	$("body").on("click", ".resetBtn", function(){
		reset()
	})
})