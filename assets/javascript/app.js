//let's make some variables
var gamePage
var startPage
var userAnswer
var clock

var seconds = 30
var questionCount = 0
var winCount = 0
var lossCount = 0
var timeoutCount = 0


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
	['2 dozen','3 dozen','4 dozen','5 dozen'],
	['a cat','a parrot','a fox','a lion'],
	['Happy','Dopey','Angry','Doc'],
	['Mushu','Li Shang','Yao','Chi-Fu'],
	['red','white','gold','blue'],
	['May Showers','Autumn Leaf','Little Red','Briar Rose'],
	["Prince Eric's Birthday","Prince Eric's Battle Victory","Prince Eric's Engagement", "Prince Eric's Homecoming"],
	['Jasmine','Snow White','Pocahontas','Rapunzel']]
var correct = ['Rajah','Pride Rock','5 dozen','a parrot','Angry',
	'Mushu','gold','Briar Rose',"Prince Eric's Birthday",'Pocahontas']
var gif = []


//let's make some functions
function timeout(argument) {
	console.log('out of time')
	timeoutCount++;
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Out of time!  The correct answer was: " + correct[questionCount] + "</p>" + "<p>insert out of time image</p>";
	$('.gameDiv').html(gamePage);
	setTimeout(delay, 3000);
}

function delay(argument) {
	if (questionCount < 9) {
		console.log('reset timer and onto the next question')
		questionCount++;
		game();
		seconds = 30;
		countdown();
	}
	else {
		console.log('gameOver')
		gameOver();
	}
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

function game(argument) {
	console.log('game is working yay!')
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + question[questionCount] + "</p><p class='answer'>" + answer[questionCount][0] + "</p><p class='answer'>"+answer[questionCount][1]+"</p><p class='answer'>"+answer[questionCount][2]+"</p><p class='answer'>"+answer[questionCount][3]+"</p>"
	$('.gameDiv').html(gamePage);
}


function win(argument) {
	console.log('good job!')
	winCount++
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correct[questionCount] + "</p>" + '<p>something from gif array</p>'
	$('.gameDiv').html(gamePage)
	setTimeout(delay, 3000)
}

function loss(argument) {
	console.log('nice try!')
	lossCount++
	gameHTML = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correct[questionCount] + "</p>" + "<p>Wrong answer gif</p>"
	$(".gameDiv").html(gameHTML)
	setTimeout(delay, 3000)
}

function gameOver(argument) {
	gamePage = "<p class='timerP text-center'>Time Remaining: <span class='timer'>" + seconds + "</span></p>" + "<p class='text-center'>Thanks for playing!  Here are your results:" + "</p>" + "<p class='results'>Correct Answers: " + winCount + "</p>" + "<p>Wrong Answers: " + lossCount + "</p>" + "<p>Unanswered: " + timeoutCount + "</p>" + "<p class='text-center'><a class='resetBtn btn btn-primary btn-lg btn-block ' href='#' role='button'>Take the Quiz Again!</a></p>"
	$('.gameDiv').html(gamePage);
}

function reset(argument) {
	// body...
}


//THIS IS MY TRIVIA GAME!!  get page ready for jQuery
$(document).ready(function(){

//function to create start button and start page
function startup(){
	// console.log("let's start the game") //-----------make sure startup() is working
	startPage = "<a class='startBtn btn btn-primary btn-lg btn-block' href='#' role='button'>Start Game</a>"
	$('.gameDiv').html(startPage)
}
startup()

//on startBtn click, run game and start countdown
$("body").on("click", ".startBtn", function(){
	game();
	countdown();
})

//on clicked answer => userAnswer.  if correct, clear clock and alert win; else, clear clock and alert loss
$("body").on("click", ".answer", function(){
	userAnswer = $(this).text()
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





//start button on click:
	//hide button
	//begin timer
	//populate random question
	//provide choice answers
//if player chooses incorrectly or if time remaining = 0
	//tell player 'you are wrong' or 'out of time'
	//provide correct answer
	//insert fun gif
//if player chooses correctly
	//tell player 'you are correct'
	//insert fun gif
//at end:
	//timer stops
	//message: all done.  here's how you did:
	//correct answers
	//incorrect answers
	//unanswered
	//start over-->onclick
		//reset game
			//reset counters


// //Let's make some variables!!
// var trivia = []


// //counters
// var correctCount == 0
// var incorrectCount == 0
// var timer == 0

// //array of Questions and Answers


// //booleans
// var outOfTime == false	//
// var correct == false	//
// var gameOver == false	//

// //functions
